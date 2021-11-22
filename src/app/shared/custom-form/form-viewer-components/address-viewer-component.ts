import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "address-viewer-widget",
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
      <div *ngIf="schema?.description" style="font-size: 14px;color: #5A6872;">{{ schema?.description }}</div>
      <mat-form-field style="width: 100%;">
        <input matInput [placeholder]="schema?.multiple ? 'Address Line1' : 'Address Line'" [(ngModel)]="value.line1" (input)="updateValue()" />
      </mat-form-field>
      <mat-form-field style="width: 100%;margin-top: -1rem;" *ngIf="schema?.multiple">
        <input matInput placeholder="Address Line2" [(ngModel)]="value.line2" (input)="updateValue()" />
      </mat-form-field>
      <div style="display:flex;">
        <mat-form-field style="width: 45%;" >
          <input matInput placeholder="Enter City" [(ngModel)]="value.city" (input)="updateValue()" />
        </mat-form-field>
        <mat-form-field style="width: 45%;margin-left: 1.5rem;" >
          <input matInput placeholder="Enter State" [(ngModel)]="value.state" (input)="updateValue()" />
        </mat-form-field>
      </div>
      <mat-form-field style="width: 50%;">
        <input matInput placeholder="Pincode" [(ngModel)]="value.pincode" (keypress)="numbersOnly($event)" (input)="updateValue()" />
      </mat-form-field>
      <div *ngIf="schema.isRemark">
        <span style="font-size: 12px;color: #0086DA;cursor: pointer;" (click)="addRemark = true" *ngIf="!addRemark">Add Remark</span>
        <mat-form-field *ngIf="addRemark" style="width: 100%;">
          <input matInput placeholder="Remark" [(ngModel)]="schema.remark" (input)="updateValue()" />
          <mat-icon style="font-size: 18px;width: 18px;height: 18px;" matSuffix (click)="schema.remark = ''; addRemark = false; updateValue()">clear</mat-icon>
        </mat-form-field>
      </div>
    </div>

    <div *ngIf="mode === 'view'">
    <app-viewer [fieldKey]="schema?.fieldKey" [required]="schema?.required" [fieldValue]="schema?.value | address"></app-viewer>
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
export class AddressViewerComponent implements OnInit {
  controlName: string;
  controlValue: string = "";
  @Input() schema: any;
  @Input() path: any;
  addRemark: boolean = false;
  value: any = { line1: "", line2: "", city: "", state: "", pincode: "" };
  

  @Input() from: string;
  @Input() mode : string;

  ngOnInit() {
    if(this.schema.value){this.value={...this.value,...JSON.parse(this.schema.value)}}
  }
  updateValue() {
    this.schema.value = JSON.stringify(this.value);
  }
  numbersOnly = event => {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  };
}
