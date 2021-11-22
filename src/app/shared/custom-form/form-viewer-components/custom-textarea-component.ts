import { Component, Input, OnInit } from '@angular/core';
import { JsonSchemaService } from '../json-schema-service';


@Component({
  selector: 'custom-textarea-widget',
  template: `
  <div  
  *ngIf="!mode"
  [style.background]="from === 'shipmentUpdateScreen' ? 'rgba(245, 251, 255, 0.59)' : '#ffffff'"
  [style.border]="from === 'shipmentUpdateScreen' ? 'none' : '1px solid #e8e8e8'">
  <label *ngIf="options?.label">{{options?.label}}</label>
  <mat-form-field [style.width]="options?.width || '100%'">
  <textarea matInput
        [required]="options?.required"
        [name]="controlName"
        [placeholder]="options?.notitle ? options?.placeholder : options?.title"
        [value]="controlValue"
        (input)="updateValue($event)"
        ></textarea>
        <mat-hint *ngIf="options?.description"
        align="end" [innerHTML]="options?.description"></mat-hint>
  </mat-form-field>
  </div>

  <div *ngIf="mode === 'view'">
    <app-viewer [fieldKey]="schema?.fieldKey" [required]="schema?.required" [fieldValue]="schema?.value"></app-viewer>
    </div>
  `,
  styles: [`
  ::ng-deep .mat-primary .mat-pseudo-checkbox-checked, .mat-primary .mat-pseudo-checkbox-indeterminate {
    background: #0086da;
   }
   ::ng-deep .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {
    color: #0086da;
   }
  `],
})
export class CustomTextareaComponent implements OnInit {
    constructor(private service:JsonSchemaService){}
    controlName: string;
    controlValue: string='';
    @Input() options:any;
    @Input() path:any;
    @Input() from : string;
    @Input() mode : string

    ngOnInit(){

    }
    updateValue(event) {
        this.service.setData({key:this.path,value:event.target.value})
    }
}