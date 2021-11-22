import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "text-builder-widget",
  template: `
    <div>
      <mat-form-field class="builder-field">
        <input matInput placeholder="Enter Field Name" [(ngModel)]="data.schema.fieldKey" (input)="inputChange()" />
      </mat-form-field>
      <div class="description">
        <span style="white-space: nowrap;">Add Description:</span>
        <input type="text" [(ngModel)]="data.schema.description" (input)="inputChange()" />
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
        border-color: rgba(90, 104, 114, 0.2) !important; /* grey border color for example */
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
    `
  ]
})
export class TextBuilderComponent {
  constructor() {}
  @Output() schemaChange = new EventEmitter<any>();
  @Input() data: any;

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
