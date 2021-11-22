import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'checkbox-builder-widget',
  template: `
  <div>
  <mat-form-field class="builder-field">
      <input matInput placeholder="Enter Field Name" [(ngModel)]="data.schema.fieldKey" (input)="inputChange()">
  </mat-form-field>
  <div class="description">
      <span style="white-space: nowrap;">Add Description:</span>
      <input type="text" [(ngModel)]="data.schema.description" (input)="inputChange()">
  </div>
  <div style="display: grid;grid-template-columns: repeat(auto-fit,minmax(150px,158px));padding:0.5rem 0rem;row-gap: 0.5rem;">
    <div *ngFor="let item of items;let index=index;" class="opt2">
      <div  class="options">
        <mat-checkbox class="custom-checkbox" disabled="true"></mat-checkbox>
        <input type="text" [(ngModel)]="item.key" (input)="inputChange()">
      </div>
      <mat-icon (click)="removeOption(index)">clear</mat-icon>
    </div>
    <div style="display: flex;"><span class="add-options" (click)="addOption()">Add More</span></div>
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
    width: 100%;
  }
  .add-options{
    background: #F7F9FA;
    border: 0.75px dashed #0086DA;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 0.3rem;
    color: #0086DA;
    cursor: pointer;
    white-space: nowrap;
    font-size: 12px;
    align-items: center;
    display: flex;
  }
  .options{
    display: flex;
    align-items: center;
    padding: 0.3rem;
    border: 0.75px dashed #8C9BA5;
    border-radius: 4px;
    width: 7rem;
    background-color: #F7F9FA;
  }

  .options input{
    margin-left: 0.2rem;
    width: 6rem;
    outline: none;
    border: none;
    border-bottom: 1px solid #8C9BA5;
    background-color: inherit;
  }
  .opt2{
    display:flex;
    align-items: center;
  }
  .opt2 mat-icon{
    font-size: 16px;
    border: 1px solid #3D70B2;
    border-radius: 50%;
    margin-left: 0.1rem;
    height: 16px;
    width: 16px;
    color:#3D70B2;
    cursor: pointer;
  }
  `],
})
export class CheckboxBuilderComponent implements OnInit {
    constructor(){}
    @Output() schemaChange=new EventEmitter<any>();
    @Input() data:any;
    items:any[]=[]
    ngOnInit(){
      if(this.data.schema.options!=null && this.data.schema.options.length>0){
        this.items=[];
        this.data.schema.options.forEach(element => {
          this.items.push({key:element})
        });
      }
    }
    addOption=()=>{
      this.items.push({key:''})
      this.inputChange()
    }
    removeOption=(index)=>{
      this.items.splice(index,1)
      this.inputChange()
    }
    inputChange=()=>{
      this.data.schema.options=[]
      this.items.forEach(item=>this.data.schema.options.push(item.key))
      this.schemaChange.emit(this.data)
    }
}