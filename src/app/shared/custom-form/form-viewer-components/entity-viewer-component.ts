import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { Observable, of, Subject } from "rxjs";
import { SharedService } from "../../shared.service";
import { paths } from "../../../../environments/environment";
import { shareReplay, pluck, catchError, tap, debounceTime, distinctUntilChanged, switchMap } from "rxjs/operators";

@Component({
  selector: "entity-viewer-widget",
  template: `
    <div
      *ngIf="!mode"
      class="wrapper"
      [style.background]="from === 'shipmentUpdateScreen' ? 'rgba(245, 251, 255, 0.59)' : '#ffffff'"
      [style.border]="from === 'shipmentUpdateScreen' ? 'none' : '1px solid #e8e8e8'"
    >
      <div style="font-weight: 500;font-size: 14px;color: #152935;padding: 0.5rem 0rem;">
        {{ schema?.fieldKey }}<span style="font-size: 12px;color: #5A6872;" *ngIf="schema?.required">* (Required)</span>
      </div>
      <div *ngIf="schema?.description" style="font-size: 14px;color: #5A6872;">
        {{ schema?.description }}
      </div>
      <mat-form-field style="width: 100%;">
        <input matInput placeholder="Search Entity here" [value]="schema?.value" (keyup)="searchEntity($event)" [matAutocomplete]="auto" />
        <mat-spinner matSuffix *ngIf="isSpinner" mode="indeterminate" [strokeWidth]="3" [diameter]="23" style="margin-right: 0.5rem;"></mat-spinner>
      </mat-form-field>
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let entity of entities$ | async" (click)="updateValue(entity)">
          {{ entity }}
        </mat-option>
      </mat-autocomplete>

      <div *ngIf="schema.isRemark">
        <span style="font-size: 12px;color: #0086DA;cursor: pointer;" (click)="addRemark = true" *ngIf="!addRemark">Add Remark</span>
        <mat-form-field *ngIf="addRemark" style="width: 100%;">
          <input matInput placeholder="Remark" [(ngModel)]="schema.remark" (input)="updateValue()" />
          <mat-icon style="font-size: 18px;width: 18px;height: 18px;" matSuffix (click)="schema.remark = ''; addRemark = false; updateValue()">clear</mat-icon>
        </mat-form-field>
      </div>
    </div>

    <div *ngIf="mode === 'view'">
      <app-viewer [fieldKey]="schema?.fieldKey" [required]="schema?.required" [fieldValue]="schema?.value"></app-viewer>
    </div>
  `,
  styles: [
    `
      .custom-checkbox >>> .mat-checkbox-inner-container {
        width: 1rem;
        height: 1rem;
      }
      ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background,
      .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background,
      .mat-accent .mat-pseudo-checkbox-checked,
      .mat-accent .mat-pseudo-checkbox-indeterminate,
      .mat-pseudo-checkbox-checked,
      .mat-pseudo-checkbox-indeterminate {
        background-color: #0086da !important; /* blue background for example */
      }
      ::ng-deep .mat-checkbox-frame {
        border-color: rgba(90, 104, 114, 0.2) !important; /* grey border color for example */
      }
      .wrapper {
        background: #ffffff;
        border: 1px solid #e8e8e8;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 0.5rem;
      }
      .options {
        display: flex;
        align-items: center;
        padding: 0.3rem;
        border-radius: 4px;
        width: 7rem;
      }
      ::ng-deep .mat-primary .mat-pseudo-checkbox-checked,
      .mat-primary .mat-pseudo-checkbox-indeterminate {
        background: #0086da;
      }
      ::ng-deep .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {
        color: #0086da;
      }
      mat-select {
        width: 95%;
        border-bottom: 1px solid lightgray;
      }
    `
  ]
})
export class EntityViewerComponent implements OnInit, OnDestroy {
  controlName: string;
  controlValue: string = "";
  @Input() schema: any;
  @Input() path: any;
  @Input() uuid: any;
  addRemark: boolean = false;
  isSpinner: boolean = false;
  value: string;

  @Input() from: string;
  @Input() mode: string;
  search$: Subject<any> = new Subject();
  entities$: Observable<any[]>;
  constructor(private helper: SharedService) {}
  ngOnInit() {
    // if (this.schema.value) {
    //   this.value = { ...this.value, ...JSON.parse(this.schema.value) };
    // }
    this.entities$ = this.search$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      switchMap(text => this.getEntity(text))
    );
  }
  updateValue(value) {
    this.schema.value = value;
  }
  getEntity(text) {
    this.isSpinner = true;
    let uuid = this.uuid ? this.uuid : this.schema.uuid;
    return uuid ? this.search(uuid, text) : of([]);
  }

  search = (uuid: string, text: string) => {
    let path = `${paths.SETTING}/settings/suggest?id=${uuid}&search=${text}`;
    return this.helper.callService("get", null, path).pipe(
      pluck("data"),
      catchError(_ => of([])),
      tap(_ => (this.isSpinner = false))
    );
  };

  searchEntity = event => this.search$.next(event.target.value);
  ngOnDestroy() {
    this.search$.unsubscribe();
  }
}
