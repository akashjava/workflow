import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  OnDestroy
} from "@angular/core";
import { Subscription, Subject } from "rxjs";
import { debounceTime, distinctUntilChanged } from "rxjs/operators";
import { AppService } from "../../app.service";
import { SharedService } from "../shared.service";

@Component({
  selector: "app-members-picker",
  templateUrl: "./members-picker.component.html",
  styleUrls: ["./members-picker.component.css"]
})
export class MembersPickerComponent implements OnInit, OnDestroy {
  searchKey: string = "";
  members: any[] = [];
  startSearch: Subject<any> = new Subject<any>();
  isLoading: boolean = false;
  @Output() selectedMember = new EventEmitter<any>();
  @Input() selfIds = [];
  @Input() view = null;
  @Input() permissions: any = null;
  @Input() permissionFor: any = null;
  serviceSubscribtion$: Subscription;

  constructor(
    private appService: AppService,
    public sharedService: SharedService
  ) {}

  ngOnInit() {
    this.serviceSubscribtion$ = this.getMembers(this.searchKey);
    this.startSearch
      .pipe(distinctUntilChanged(), debounceTime(200))
      .subscribe(res => {
        this.getMembers(res);
      });
  }

  search = () => {
    this.isLoading = true;
    this.startSearch.next(this.searchKey);
  };

  getMembers = search =>
    this.sharedService.getMemebers(search).subscribe(
      (res: any) => {
        this.members = res;
        this.isLoading = false;
      },
      err => {
        this.isLoading = false;
      }
    );

  chooseMember = item => {
    let member = {
      email: item.email,
      mobileNumber: item.mobileNumber,
      name: item.name,
      uuid: item.userUuid
    };
    this.selectedMember.emit(member);
  };

  ngOnDestroy(): void {
    try {
      this.serviceSubscribtion$.unsubscribe();
    } catch (error) {}
  }
}
