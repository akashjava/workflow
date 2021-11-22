import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'weight-builder-widget',
  template: `
  <div>
    <mat-form-field class="builder-field">
        <input matInput placeholder="Enter Field Name" [(ngModel)]="data.schema.fieldKey" (input)="inputChange()">
    </mat-form-field>
    <div class="description">
        <span style="white-space: nowrap;">Add Description:</span>
        <input type="text" [(ngModel)]="data.schema.description" (input)="inputChange()">
    </div>
    <div style="display:flex;align-items: center;">
      <mat-select placeholder="Select Unit" [(ngModel)]="data.schema.unit" (selectionChange)="inputChange()" name="item">
        <mat-option *ngFor="let item of units" [value]="item.value">
            {{item.view}}({{item.value}})
        </mat-option>
      </mat-select>
    </div>
  </div>`,
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
  .builder-field{
    width: calc(100% - 35px);
    height: 3.3rem;
    border: 1px dashed #0086DA;
    padding: 0rem 1rem;
    border-radius: 3px;
    background-color: #F7F9FA;
  }
  .description{
    display: flex;
    align-items: center;
    margin-top: 0.5rem;
    border: 0.75px dashed #8C9BA5;
    padding: 0.5rem;
    border-radius: 5px;
    background-color: #F8FAFB;
    font-size: 12px;
    color: #8C9BA5;
  }
  .description input{
    outline: none;
    border: none;
    background-color: inherit;
    padding: 0.3rem 0.5rem;
    width:100%;
  }
  mat-select{
    margin-top: 0.5rem;
    width: 10rem;
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px dashed #8C9BA5;
    background-color: #F7F9FA;
  }
  `],
})
export class WeightBuilderComponent implements OnInit {
    constructor(){}
    @Output() schemaChange=new EventEmitter<any>();
    @Input() data:any;
    units:any[]=[{view:'Metric Tonnes',value:'MT'},{view:'Gallons',value:'Gallons'}]
    ngOnInit(){
    }
    addOption=()=>{
      this.data.schema.items.push({key:''})
      this.inputChange()
    }
    removeOption=(index)=>{
      this.data.schema.items.splice(index,1)
      this.inputChange()
    }
    inputChange=()=>{
      this.schemaChange.emit(this.data)
    }
}