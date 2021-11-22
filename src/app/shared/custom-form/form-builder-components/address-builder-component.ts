import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "address-builder-widget",
  template: `
    <div>
      <mat-form-field class="builder-field">
        <input
          matInput
          placeholder="Enter Field Name"
          [(ngModel)]="data.schema.fieldKey"
          (input)="inputChange()"
        />
      </mat-form-field>
      <div style="padding:0.5rem;">
        <mat-radio-group
          [(ngModel)]="data.schema.multiple"
          style="margin-top:0.8rem"
          (change)="inputChange()"
        >
          <mat-radio-button [value]="false"
            >Single Line Address</mat-radio-button
          >
          <mat-radio-button [value]="true" style="margin-left: 0.5rem;"
            >Multi Line Address</mat-radio-button
          >
        </mat-radio-group>
      </div>
      <div class="description">
        <span style="white-space: nowrap;">Add Description:</span>
        <input
          type="text"
          [(ngModel)]="data.schema.description"
          (input)="inputChange()"
        />
      </div>
   </div>
  `,
  styles: [
    `
      .custom-checkbox >>> .mat-checkbox-inner-container {
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
        border-color: rgba(
          90,
          104,
          114,
          0.2
        ) !important; /* grey border color for example */
      }
      .builder-field {
        width: calc(100% - 35px);
        height: 3.3rem;
        border: 1px dashed #0086da;
        padding: 0rem 1rem;
        border-radius: 3px;
        background-color: #f7f9fa;
      }
      .description {
        display: flex;
        align-items: center;
        margin-top: 0.5rem;
        border: 0.75px dashed #8c9ba5;
        padding: 0.5rem;
        border-radius: 5px;
        background-color: #f8fafb;
        font-size: 12px;
        color: #8c9ba5;
      }
      .description input {
        outline: none;
        border: none;
        background-color: inherit;
        padding: 0.3rem 0.5rem;
        width: 100%;
      }
      .add-options {
        background: #f7f9fa;
        border: 0.75px dashed #0086da;
        box-sizing: border-box;
        border-radius: 4px;
        padding: 0.3rem;
        color: #0086da;
        cursor: pointer;
        white-space: nowrap;
        font-size: 12px;
        align-items: center;
        display: flex;
      }
      .options {
        display: flex;
        align-items: center;
        padding: 0.3rem;
        border: 0.75px dashed #8c9ba5;
        border-radius: 4px;
        width: 7rem;
        background-color: #f7f9fa;
      }

      .options input {
        margin-left: 0.2rem;
        width: 6rem;
        outline: none;
        border: none;
        border-bottom: 1px solid #8c9ba5;
        background-color: inherit;
      }
      .opt2 {
        display: flex;
        align-items: center;
      }
      .opt2 mat-icon {
        font-size: 16px;
        border: 1px solid #3d70b2;
        border-radius: 50%;
        margin-left: 0.1rem;
        height: 16px;
        width: 16px;
        color: #3d70b2;
        cursor: pointer;
      }
    `
  ]
})
export class AddressBuilderComponent implements OnInit {
  constructor() {}
  @Output() schemaChange = new EventEmitter<any>();
  @Input() data: any;
  ngOnInit() {}
  addOption = () => {
    this.data.schema.items.push({ key: "" });
    this.inputChange();
  };
  removeOption = index => {
    this.data.schema.items.splice(index, 1);
    this.inputChange();
  };
  inputChange = () => {
    this.schemaChange.emit(this.data);
  };
}
