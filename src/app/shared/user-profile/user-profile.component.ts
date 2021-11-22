import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Store } from "@ngrx/store";
import { Router } from "@angular/router";
import { appVersion, environment, paths } from "../../../environments/environment";
import { AppService } from "../../app.service";
import { User, Organisation } from "../../core/models";
import { AuthState } from "../../auth/reducers/auth.state";
import { ClearDashboardStateAction } from "../../tracknet/dashboard/actions/dashboard.actions";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { Subject } from "rxjs";
import { addOrgState } from "../../add-organization/reducers/add-organization.reducer";
import { getAddOrgState } from "../../add-organization/reducers/add-organization.selector";
import { userDetailSelector, orgDetailStateSelector, userSessionSelector } from "../../tracknet/manage-organisation/reducers/manage-organisation.selector";
import { debounceTime, takeUntil } from "rxjs/operators";
import { UserSessions, initialUserSessions } from "../../tracknet/manage-organisation/reducers/manage-organisation.state";
import { HttpClient, HttpHeaders } from "@angular/common/http";

declare var jwt_decode: any;

@Component({
  selector: "app-user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfile implements OnInit {
  @Input() view: any;
  @Input() set setShow(data) {
    this.isShow = data;
    // this.isExpand=data;
    // console.log(this.isShow);
    // console.log(this.isExpand)
  }
  private unsubscribe = new Subject<void>();
  @Output() updateAction = new EventEmitter<any>();

  public version = appVersion;
  public environment = environment;
  public viewType = "";

  public isShowCreatePassword: boolean = false;
  public isShowChangelog: boolean = false;
  public userDetails: any;
  public selectedOrg: Organisation;
  public mobileNo: string = "";
  public token: string = "";
  public changeLogPath: any;
  public changeLogData: any;
  public currentAuthState: AuthState;
  public addOrgState: addOrgState;
  _manageUserSession: UserSessions = initialUserSessions;
  showProfile: boolean = false;
  isShow: boolean;
  public user: User;
  userACL: any;

  ngOnDestroy() {}

  constructor(private httpClient: HttpClient, private _router: Router, private _store: Store<any>, private appService: AppService, public snackBar: MatSnackBar) {
    this.userDetails = this.customerDetail(appService.getToken());
    this.viewType = document["viewType"];
  } // constructor close
  ngOnInit() {
    this.userACL = this.appService.getUserACL();
    if (this.userACL == null || this.userACL == undefined) {
      setTimeout(() => {
        this.userACL = this.appService.getUserACL();
      }, 5000);
    }
    this._store
      .select(userDetailSelector) // get UserDetails
      .pipe(debounceTime(1000))
      .subscribe(_ => {
        this.user = _.data;
      });

    // this._store
    // .select(getOrgSwitcherState) // get organizationlist
    // .subscribe(res => {
    //   try {
    //     // console.log(res);
    //     // console.log(this.userDetails);
    //     if(res){
    //       this.selectedOrg = res['list'][res['list'].findIndex(_=>_.uuid==this.userDetails['orgId'])];
    //     }
    //   } catch (error) {

    //   }

    // });

    this._store
      .select(orgDetailStateSelector) // get Organisation Details
      .pipe(debounceTime(1000))
      .subscribe(res => {
        // console.log(res);
        if (res) {
          // if(res.updateSuccess){
          this.selectedOrg = res.data;
          // }
        }
      });

    this.mobileNo = this.userDetails.mobileNumber;
    let token = this.appService.getToken();
    let details = this.customerDetail(token);
    // if (details["orgId"] == null || details["orgId"] == undefined) {
    //   this.logout();
    // }

    this._store
      .select(getAddOrgState)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(res => {
        if (res == null || res == undefined) return;
        this.addOrgState = res;
      });
    this._store.select(userSessionSelector).subscribe(_ => {
      this._manageUserSession = _;
    });
  }

  goToAddOrganisation() {
    this._router.navigate(["add-organization"]);
  }

  customerDetail(token) {
    return jwt_decode(token);
  }

  logout() {
    this.appService.logout();
    this.appService.removeModules();
    try {
      let session: any = this._manageUserSession.session[this._manageUserSession.session.findIndex(item => item.token === this.appService.getToken())];
      let uuid = session.uuid;
      let headers = new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.appService.getToken()
      });

      this.httpClient.put(`${paths.USER_PATH}/v1/user/session/${uuid}/logout`, null, { headers: headers }).subscribe(res => {});
    } catch (error) {}
    // this.logoutService.logout();
    this.openSnackbar("Logout Successful", 5000);
    this._store.dispatch(new ClearDashboardStateAction({}));
    this._router.navigate(["auth"]);
  }

  openSnackbar(message, duration) {
    this.snackBar.open(message, "", <MatSnackBarConfig>{
      duration: duration
    });
  }

  showChangelog() {
    this.isShowChangelog = true;
    let path;

    path = "./changelog.md";

    this.appService.getMetadata(path).subscribe(data => {
      // this.changeLogData = data;
      let str = data.toString().substr(0, 15);
      if (str == "<!doctype html>") {
        this.changeLogData = "ERROR: Unable to access changelog.";
      } else {
        this.changeLogData = data;
      }
    });
  }
  updateAccountAction = () => this.updateAction.emit("USER");
  updateOrgAction = () => this.updateAction.emit("ORG");
  showprofile = () => {
    this.showProfile = true;
  };
}
