import { Validators, FormControl } from "@angular/forms";
import { Component, Input, OnInit } from "@angular/core";
import { JsonSchemaService } from "../json-schema-service";
import { hasStringValue } from "../../../core/validators.util";

@Component({
  selector: "date-viewer-widget",
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
      <mat-form-field style="width:100%">
        <input
          [owlDateTime]="dt"
          [owlDateTimeTrigger]="dt"
          [(ngModel)]="time"
          matInput
          [placeholder]="schema?.multiple ? 'Select Date & Time' : 'Select Date'"
          name="controlName"
          [required]="schema?.required"
          (ngModelChange)="updateValue()"
        />
        <i matSuffix class="fas fa-calendar-alt" style="font-size: 13px;color: #5A6872" [owlDateTimeTrigger]="dt"></i>
        <owl-date-time #dt [pickerType]="schema?.multiple ? 'both' : 'calendar'"> </owl-date-time>
        <mat-hint *ngIf="schema?.description" align="start" [innerHTML]="schema?.description"></mat-hint>
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
      <app-viewer [fieldKey]="schema?.fieldKey" [required]="schema?.required" [fieldValue]="schema?.value | date: 'd/M/yy, h:mm a'"></app-viewer>
    </div>
  `,
  styles: [
    `
      .wrapper {
        background: #ffffff;
        border: 1px solid #e8e8e8;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 0.5rem;
      }
    `
  ]
})
export class DateViewerComponent implements OnInit {
  constructor(private service: JsonSchemaService) {}
  controlName: string;
  controlValue: string = "";
  @Input() schema: any;
  @Input() path: any;
  time: any;
  addRemark: boolean = false;
  @Input() from: string;
  @Input() mode: string;

  ngOnInit() {
    if(this.schema.value){
      this.time= new Date(Number(this.schema.value))
    }
  }
  updateValue() {
    if (this.time) {
      // this.schema.indexedValue=[]
      this.schema.value = String(new Date(this.time).getTime());
      // if(hasStringValue(this.schema.fieldKey)){
      //     this.schema.indexedValue.push(`${this.schema.fieldKey}_${this.schema.value}`)
      // }
    }
  }
  numbersOnly = event => {
    if (this.schema.input == "number") {
      const pattern = /[0-9]/;
      let inputChar = String.fromCharCode(event.charCode);
      if (!pattern.test(inputChar)) {
        event.preventDefault();
      }
    }
  };
}
