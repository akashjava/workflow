import { Component, OnInit, Input, OnDestroy, ViewChild, AfterViewInit } from "@angular/core";
import { Subscription, fromEvent, Observable, merge, of, Subject, NEVER } from "rxjs";
import { AppService } from "../../app.service";
import { debounceTime, distinctUntilChanged, filter, pluck, catchError, exhaustMap, switchMap, tap, map, shareReplay, withLatestFrom } from "rxjs/operators";
import { OrgSwitcherService } from "./services/org-switcher.service";
import { Organisation } from "../../core/models";

@Component({
  selector: "app-org-switcher",
  templateUrl: "./org-switcher.component.html",
  styleUrls: ["./org-switcher.component.css"]
})
export class OrgSwitcherComponent implements OnInit, AfterViewInit, OnDestroy {
  viewType: any = "";
  @Input() set orgId(data: string) {
    this.currentOrgId = data;
  }

  @Input() viewFrom : string
  currentOrgId: any;
  @ViewChild("scroll", { static: false }) scroll: any;

  subscriptions: Subscription;
  isSpinner: boolean = true;
  page: number = 1;
  searchText: string;
  organisations$: Observable<Organisation[]>;
  organisationSearchSubject$: Subject<string> = new Subject();
  moreOrganisations$: Subject<Observable<Organisation[]>> = new Subject();
  isBoth:boolean=true;

  constructor(private orgSwitcherService: OrgSwitcherService, private appService: AppService) {
    this.viewType = document["viewType"];
  }

  ngOnInit() {
    this.organisations$ = merge(
      this.orgSwitcherService.getOrganisations({ search: null, page: this.page,includePortal:this.isBoth }).pipe(
        pluck("data"),
        catchError(_ => of([])),
        tap(_ => (this.isSpinner = false))
      ),

      this.organisationSearchSubject$.asObservable().pipe(
        debounceTime(250),
        distinctUntilChanged(),
        filter(text => !!text),
        tap(_ => (this.isSpinner = true)),
        switchMap(text =>
          this.orgSwitcherService.getOrganisations({ search: text, page: this.page,includePortal:this.isBoth }).pipe(
            pluck("data"),
            tap(_ => (this.isSpinner = false)),
            catchError(_ => {
              this.isSpinner = false;
              this.appService.openSnackBar("Failed to search organisation");
              return NEVER;
            })
          )
        )
      ),

      this.moreOrganisations$.asObservable().pipe(switchMap(value => value))
    ).pipe(shareReplay(1));
  }

  ngAfterViewInit() {
    this.moreOrganisations$.next(
      fromEvent(this.scroll.nativeElement, "scroll").pipe(
        debounceTime(500),
        map((e: any) => Math.floor((e.srcElement.scrollTop / e.srcElement.scrollHeight) * 100)),
        filter((value: number) => value > 90),
        tap(_ => (this.isSpinner = true)),
        exhaustMap(_ => {
          this.page = this.page + 1;
          return this.orgSwitcherService.getOrganisations({ search: this.searchText, page: this.page,includePortal:this.isBoth }).pipe(
            pluck("data"),
            catchError(_ => of([])),
            tap(_ => (this.isSpinner = false)),
            withLatestFrom(this.organisations$),
            map((org: any[]) => [...org[1], ...org[0]])
          );
        })
      )
    );
  }

  searchOrganisation(orgName: string) {
    this.page = 1;
    this.organisationSearchSubject$.next(orgName);
  }

  switchOrganization(uuid: string) {
    this.subscriptions = this.orgSwitcherService
      .switchOrganisation(uuid)
      .pipe(
        catchError(_ => of({})),
        tap((res: any) => {
          if (res.status === 200) {
            localStorage.setItem("app", res.data.token);
            localStorage.setItem("modules",null)
            window.location.replace("tracknet");
          } else {
            this.appService.openSnackBar("Failed to switch organisation !");
          }
        })
      )
      .subscribe(_ => {});
  }

  ngOnDestroy() {
    if (this.subscriptions) {
      this.subscriptions.unsubscribe();
    }
  }
}
