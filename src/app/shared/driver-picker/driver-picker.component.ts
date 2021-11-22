import { Component, OnInit, Output, EventEmitter, Input, OnDestroy } from "@angular/core";
import { Subscription, Subject } from "rxjs";
import { debounceTime, map, distinctUntilChanged } from "rxjs/operators";
import { paths } from "../../../environments/environment";
import { AppService } from "../../app.service";
import { SharedService } from "../shared.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-driver-picker",
  templateUrl: "./driver-picker.component.html",
  styleUrls: ["./driver-picker.component.css"]
})
export class DriverPickerComponent implements OnInit, OnDestroy {
  searchKey: string = "";
  drivers: any[] = [];
  startSearch: Subject<any> = new Subject<any>();
  isLoading: boolean = false;
  @Output() selectedDriver = new EventEmitter<any>();
  @Input() selfIds = [];
  @Input() view = null;

  serviceSubscribtion$: Subscription;

  constructor(private appService: AppService, private httpClient: HttpClient, private sharedService: SharedService) {}

  ngOnInit() {
    this.serviceSubscribtion$ = this.getDrivers(this.searchKey);
    this.startSearch
      .pipe(
        distinctUntilChanged(),
        debounceTime(200)
      )
      .subscribe(res => {
        this.getDrivers(res);
      });
  }

  search = () => {
    this.isLoading = true;
    this.startSearch.next(this.searchKey);
  };

  getDrivers = search => {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Beaer " + this.appService.getToken()
    });

    return this.httpClient
      .get(`${paths.DRIVER_PATH}/v1/driver/typeahead?search=${search}&orgId=${this.appService.getUserTokenDetails().orgId}`, { headers: headers })
      .subscribe(
        (res: any) => {
          this.drivers = res.data;
          this.isLoading = false;
        },
        err => {
          this.isLoading = false;
        }
      );
  };

  chooseDriver = item => {
    this.selectedDriver.emit(item);
  };

  ngOnDestroy(): void {
    try {
      this.serviceSubscribtion$.unsubscribe();
    } catch (error) {}
  }
}
