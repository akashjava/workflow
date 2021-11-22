import { Validators, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'select-viewer-widget',
  template: `
  <div 
  *ngIf="!mode"
  class="wrapper"
  [style.background]="from === 'shipmentUpdateScreen' ? 'rgba(245, 251, 255, 0.59)' : '#ffffff'"
  [style.border]="from === 'shipmentUpdateScreen' ? 'none' : '1px solid #e8e8e8'"
  >
    <div style="font-weight: 500;font-size: 14px;color: #152935;padding: 0.5rem 0rem;">{{schema?.fieldKey}}<span style="font-size: 12px;color: #5A6872;" *ngIf="schema?.required">* (Required)</span></div>
    <div *ngIf="schema?.description" style="font-size: 14px;color: #5A6872;">{{schema?.description}}</div>
    <mat-form-field style="width: 100%;" >
        <mat-select
            [multiple]="schema?.multiple"
            [placeholder]="schema?.key"
            [required]="schema?.required"
            (selectionChange)="updateValue()"
            [(ngModel)]="value"
            >
            <mat-option *ngFor="let item of schema?.options"
                [value]="item">
                <span [innerHTML]="item"></span>
            </mat-option>
        </mat-select>
    </mat-form-field>
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
  styles: [`
  .wrapper{
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 5px;
    padding:0.5rem;
  }
  ::ng-deep .mat-primary .mat-pseudo-checkbox-checked, .mat-primary .mat-pseudo-checkbox-indeterminate {
    background: #0086da;
   }
   ::ng-deep .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {
    color: #0086da;
   }`],
})
export class SelectViewerComponent implements OnInit {
    @Input() schema:any;
    @Input() path:any;
    value:any;
    addRemark:boolean=false;
    @Input() from : string;
    @Input() mode : string

    ngOnInit(){
    }
    updateValue() {
      // this.schema.indexedValue=[]
      if(this.schema.multiple){
        // this.value.forEach(element => {
        //   this.schema.indexedValue.push(`${this.schema.fieldKey}_${element}`)
        // });
        this.schema.value=JSON.stringify(this.value)
      }
      else{
        // this.schema.indexedValue.push(`${this.schema.fieldKey}_${this.value}`)
        this.schema.value=this.value;
      }
    }
}