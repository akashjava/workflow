import { Component, OnInit, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import {
  WorkflowEntityDefinition,
  workflow as _workflow,
  EntityTypeDefinations,
  LogicalTypeDefinations
} from "../../../reducers/workflow-managment.states";

@Component({
  selector: "add-edit-entity",
  templateUrl: "./add-edit-entity.component.html",
  styleUrls: ["./add-edit-entity.component.css", "../dialog.css"]
})
export class AddEditEntityComponent implements OnInit {
  workflow: WorkflowEntityDefinition = JSON.parse(JSON.stringify(_workflow));
  itemType: WorkflowEntityDefinition = JSON.parse(JSON.stringify(_workflow));
  fieldType = {
    EntityType: EntityTypeDefinations.filter(t => t.type !== "array"),
    LogicalType: LogicalTypeDefinations
  };
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<AddEditEntityComponent>
  ) {
    if (data.isEdit) {
      this.workflow = JSON.parse(JSON.stringify(data.workflow));
      if (this.workflow.type == "array") {
        this.itemType = this.workflow.itemType;
      }
    }
    if (!data.isEdit) {
      this.workflow = JSON.parse(JSON.stringify(data.workflow));
    }
  }
  addArrayType = workflow => {
    this.workflow.itemType = JSON.parse(JSON.stringify(workflow));
    this.itemType = JSON.parse(JSON.stringify(workflow));
  };

  ngOnInit() {}
  close = () => this.matDialogRef.close();
  save = () => {
    if (this.workflow.type == "array") {
      this.workflow.itemType=this.itemType
    }
    this.matDialogRef.close(JSON.parse(JSON.stringify(this.workflow)));
  };
}
