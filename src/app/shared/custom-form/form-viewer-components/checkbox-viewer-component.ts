import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'checkbox-viewer-widget',
  template: `
  <div 
  *ngIf="!mode"
   class="wrapper"
   [style.background]="from === 'shipmentUpdateScreen' ? 'rgba(245, 251, 255, 0.59)' : '#ffffff'"
   [style.border]="from === 'shipmentUpdateScreen' ? 'none' : '1px solid #e8e8e8'"
  >
    <div style="font-weight: 500;font-size: 14px;color: #152935;padding: 0.5rem 0rem;">{{schema?.fieldKey}}<span style="font-size: 12px;color: #5A6872;" *ngIf="schema?.required">* (Required)</span></div>
    <div *ngIf="schema?.description" style="font-size: 14px;color: #5A6872;">{{schema?.description}}</div>
    <div style="display: grid;grid-template-columns:repeat(auto-fit,minmax(127px,1fr));padding:0.5rem 0rem;row-gap: 0.5rem;">
      <div *ngFor="let item of schema?.options;">
        <div  class="options">
          <mat-checkbox class="custom-checkbox" [checked]="(schema?.value==item)" (change)="schema.value=item;updateValue()">{{item}}</mat-checkbox>
        </div>
      </div>
    </div>
    <div *ngIf="schema.isRemark">
    <span style="font-size: 12px;color: #0086DA;cursor: pointer;" (click)="addRemark=true;" *ngIf="!addRemark">Add Remark</span>
    <mat-form-field *ngIf="addRemark" style="width: 100%;">
      <input matInput placeholder="Remark" [(ngModel)]="schema.remark" (input)="updateValue()">
      <mat-icon style="font-size: 18px;width: 18px;height: 18px;" matSuffix (click)="schema.remark='';addRemark=false;updateValue()">clear</mat-icon>
    </mat-form-field>
    </div>
  </div>

  <div *ngIf="mode === 'view'">
    <app-viewer [fieldKey]="schema?.fieldKey" [required]="schema?.required" [fieldValue]="schema?.value"></app-viewer>
    </div>
  `,
  styles: [`.custom-checkbox >>> .mat-checkbox-inner-container {
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
  }`],
})
export class CheckboxViewerComponent implements OnInit {
    controlName: string;
    controlValue: string='';
    @Input() schema:any;
    @Input() path:any;
    addRemark:boolean=false;
    @Input() from : string
    @Input() mode : string

    ngOnInit(){
    }
    updateValue() {
      // this.schema.indexedValue=[]
      // if(hasStringValue(this.schema.fieldKey)){
      //   this.schema.indexedValue.push(`${this.schema.fieldKey}_${this.schema.value}`)
      // }
    }
}