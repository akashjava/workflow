import { Validators, FormControl } from '@angular/forms';
import { Component, Input, OnInit } from '@angular/core';
import { hasStringValue } from '../../../core/validators.util';


@Component({
  selector: 'email-viewer-widget',
  template: `
  <div 
  *ngIf="!mode"
  class="wrapper"
  [style.background]="from === 'shipmentUpdateScreen' ? 'rgba(245, 251, 255, 0.59)' : '#ffffff'"
  [style.border]="from === 'shipmentUpdateScreen' ? 'none' : '1px solid #e8e8e8'"
  >
    <div style="font-weight: 500;font-size: 14px;color: #152935;padding: 0.5rem 0rem;">{{schema?.fieldKey}}<span style="font-size: 12px;color: #5A6872;" *ngIf="schema?.required">* (Required)</span></div>
    <div *ngIf="schema?.description" style="font-size: 14px;color: #5A6872;">{{schema?.description}}</div>
    <mat-form-field style="width: 100%;">
      <input matInput  
      [formControl]="email"
      placeholder="Email ID"
      (input)="updateValue($event)">
      <mat-error *ngIf="email.invalid">{{getErrorMessage()}}</mat-error>
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
  .custom-checkbox >>> .mat-checkbox-inner-container{
    width: 1rem;
    height: 1rem;
  }
  ::ng-deep .mat-checkbox-checked.mat-accent .mat-checkbox-background, .mat-checkbox-indeterminate.mat-accent .mat-checkbox-background, .mat-accent .mat-pseudo-checkbox-checked, .mat-accent .mat-pseudo-checkbox-indeterminate, .mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-indeterminate {
      background-color: #0086DA !important; /* blue background for example */
  }
  ::ng-deep .mat-checkbox-frame {
      border-color: rgba(90, 104, 114, 0.2) !important; /* grey border color for example */
  }
  .wrapper{
    background: #FFFFFF;
    border: 1px solid #E8E8E8;
    box-sizing: border-box;
    border-radius: 5px;
    padding:0.5rem;
  }
  .options{
    display: flex;
    align-items: center;
    padding: 0.3rem;
    border-radius: 4px;
    width: 7rem;
  }
  ::ng-deep .mat-primary .mat-pseudo-checkbox-checked, .mat-primary .mat-pseudo-checkbox-indeterminate {
    background: #0086da;
   }
   ::ng-deep .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {
    color: #0086da;
   }
    
   `],
})
export class EmailViewerComponent implements OnInit {
  email = new FormControl('', [Validators.required,  Validators.email]);
    @Input() schema:any;
    @Input() path:any;
    addRemark:boolean=false;
    @Input() from : string;
    @Input() mode : string

    ngOnInit(){
    }
    updateValue(event) {
      if(this.email.hasError('required') || this.email.hasError('email') ){
        return;
      }
      this.schema.value=event.target.value
      // this.schema.indexedValue=[]
      // if(hasStringValue(this.schema.fieldKey)){
      //   this.schema.indexedValue.push(`${this.schema.fieldKey}_${this.schema.value}`)
      // }
    }
    getErrorMessage() {
      return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
    }

}