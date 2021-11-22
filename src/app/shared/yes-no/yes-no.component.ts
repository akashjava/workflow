import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-yes-no',
  template: `
    <div *ngIf="type == 'Good/Bad'" style="display: flex;align-items: center;">
      <span [ngClass]="(value=='Bad')?'yes-no-button-checked':'yes-no-button'" (click)="onModelChange('Bad')">
        <mat-icon *ngIf="!(value=='Bad')">radio_button_unchecked</mat-icon> 
        <mat-icon *ngIf="(value=='Bad')">radio_button_checked</mat-icon>
        <span>Bad</span>
      </span>
      <span [ngClass]="(value=='Good')?'yes-no-button-checked':'yes-no-button'"  (click)="onModelChange('Good')">
        <mat-icon *ngIf="!(value=='Good')">radio_button_unchecked</mat-icon> 
        <mat-icon *ngIf="(value=='Good')">radio_button_checked</mat-icon>
        <span>Good</span>
      </span>
    </div>
    <div *ngIf="type == 'Yes/No'" style="display: flex;align-items: center;">
      <span [ngClass]="(value=='Yes')?'yes-no-button-checked':'yes-no-button'" (click)="onModelChange('Yes')">
        <mat-icon *ngIf="!(value=='Yes')">radio_button_unchecked</mat-icon> 
        <mat-icon *ngIf="(value=='Yes')">radio_button_checked</mat-icon>
        <span>Yes</span>
      </span>
      <span [ngClass]="(value=='No')?'yes-no-button-checked':'yes-no-button'"  (click)="onModelChange('No')">
        <mat-icon *ngIf="!(value=='No')">radio_button_unchecked</mat-icon> 
        <mat-icon *ngIf="(value=='No')">radio_button_checked</mat-icon>
        <span>No</span>
      </span>
    </div>
  `,
  styles: [`
    .yes-no-button{
      padding: 0.3rem 0.6rem;
      border: 1px solid #8C9BA5;
      color: #5A6872;
      font-size: 14px;
      display: flex;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      margin-left:25px;
      width: 4rem;
      justify-content: center;
    }
    .yes-no-button .mat-icon{
      height: 18px;
      width: 18px;
      font-size: 18px;
    }
    .yes-no-button span{
      margin-left: 6px;
    }
    .yes-no-button-checked{
      padding: 0.3rem 0.6rem;
      border: 1px solid #3D70B2;
      color: white;
      font-size: 14px;
      display: flex;
      align-items: center;
      border-radius: 5px;
      cursor: pointer;
      margin-left:25px;
      background: #3D70B2;
      width: 4rem;
      justify-content: center;
    }
    .yes-no-button-checked span{
        margin-left: 6px;
    }
    .yes-no-button-checked .mat-icon{
      height: 18px;
      width: 18px;
      font-size: 18px;
    }`
  ]
})
export class YesNoComponent implements OnInit {
  @Input() type:string;
  @Input() value: string;
  @Output() valueChange = new EventEmitter<any> ()

  constructor() { }
  onModelChange = (event) =>{
    this.value=event;
    this.valueChange.emit(this.value);
  }

  ngOnInit() {
  }

}
