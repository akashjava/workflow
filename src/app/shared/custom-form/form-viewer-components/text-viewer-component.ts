import { Component, Input, OnInit } from '@angular/core';
import { JsonSchemaService } from '../json-schema-service';


@Component({
  selector: 'text-viewer-widget',
  template: `
  <div 
  *ngIf="!mode"
  class="wrapper"
  [style.background]="from === 'shipmentUpdateScreen' ? 'rgba(245, 251, 255, 0.59)' : '#ffffff'"
  [style.border]="from === 'shipmentUpdateScreen' ? 'none' : '1px solid #e8e8e8'"
  >
    <mat-form-field style="width: 100%;">
        <input matInput 
        [placeholder]="schema?.fieldKey" 
        [(ngModel)]="schema.value" 
        (input)="updateValue()"
        [required]="schema?.required"
        (keypress)="numbersOnly($event);"
        >
        <mat-hint *ngIf="schema?.description"
        align="start" [innerHTML]="schema?.description"></mat-hint>
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
   
  `],
})
export class TextViewerComponent implements OnInit {
    constructor(private service:JsonSchemaService){}
    addRemark:boolean=false;
    @Input() schema:any;
    @Input() path:any;
    @Input() from : string;
    @Input() mode : string

    ngOnInit(){

    }
    updateValue() {
      // this.schema.indexedValue=[]
      // if(hasStringValue(this.schema.fieldKey)){
      //   this.schema.indexedValue.push(`${this.schema.fieldKey}_${this.schema.value}`)
      // }
    }
    numbersOnly=(event)=>{
        if(this.schema.input=='number'){
            const pattern = /[0-9]/;
            let inputChar = String.fromCharCode(event.charCode);
            if (!pattern.test(inputChar)) {
            event.preventDefault();
            }
        }
    }
}