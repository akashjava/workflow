import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'counter-viewer-widget',
  template: `
  <div 
  *ngIf="!mode"
  class="wrapper"
  [style.background]="from === 'shipmentUpdateScreen' ? 'rgba(245, 251, 255, 0.59)' : '#ffffff'"
  [style.border]="from === 'shipmentUpdateScreen' ? 'none' : '1px solid #e8e8e8'"
  >
    <div style="font-weight: 500;font-size: 14px;color: #152935;padding: 0.5rem 0rem;">{{schema?.fieldKey}}<span style="font-size: 12px;color: #5A6872;" *ngIf="schema?.required">* (Required)</span></div>
    <div *ngIf="schema?.description" style="font-size: 14px;color: #5A6872;">{{schema?.description}}</div>
    <div style="display:flex;align-items: center;">
    <mat-form-field style="width: 20%;margin-left: 2rem;">
      <mat-icon matPrefix (click)="decrease()" style="margin-left: -1.5rem;color: #0086DA;cursor: pointer;">remove_circle</mat-icon>
      <input matInput type="number" [min]="0" (keypress)="numbersOnly($event);" [(ngModel)]="value" (input)="updateValue()">
      <mat-icon matSuffix (click)="increase()" style="margin-right:-2rem;color: #0086DA;cursor: pointer;">add_circle</mat-icon>
    </mat-form-field>
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
   input[type=number]::-webkit-inner-spin-button, 
   input[type=number]::-webkit-outer-spin-button { 
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    margin: 0; 
  }
   `],
})
export class CounterViewerComponent implements OnInit {
    @Input() schema:any;
    @Input() path:any;
    addRemark:boolean=false;
    value:number=0
    @Input() from : string
    @Input() mode : string

    ngOnInit(){
      if(this.schema.value)this.value=Number(this.schema.value)
    }
    updateValue() {
      // this.schema.indexedValue=[]
      this.schema.value=String(this.value)
      // if(hasStringValue(this.schema.fieldKey)){
      //   this.schema.indexedValue.push(`${this.schema.fieldKey}_${this.schema.value}`)
      // }
    }
    numbersOnly=(event)=>{
      const pattern = /[0-9]/;
      let inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
      event.preventDefault();
      }
    }
    decrease=()=>{
      if(this.value<=0){
        return;
      }
      this.value=this.value-1;
      this.updateValue();
    }
    increase=()=>{
      this.value=this.value+1;
      this.updateValue();
    }

}