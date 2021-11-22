import { Component, OnInit, Input } from "@angular/core";
import { WorkflowEntityDefinition } from "../../../reducers/workflow-managment.states";
import { MatDialog } from "@angular/material/dialog";
import { WorkflowActionEditorComponent } from "../workflow-action-editor/workflow-action-editor.component";

@Component({
  selector: "workflow-action-container",
  templateUrl: "./workflow-action-container.component.html",
  styleUrls: ["./workflow-action-container.component.css"]
})
export class WorkflowActionContainerComponent implements OnInit {
  @Input() public workflow: WorkflowEntityDefinition;
  actions: any[] = [];

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.actions = [
      // {
      //   name: "Create",
      //   conditions: [],
      //   preScript: null,
      //   postScript: null
      // },
      // {
      //   name: "Update",
      //   conditions: [],
      //   preScript: null,
      //   postScript: null
      // },
      // {
      //   name: "Delete",
      //   conditions: [],
      //   preScript: null,
      //   postScript: null
      // }
    ];
  }
  addAction = ()=> {
    const d = this.dialog.open(WorkflowActionEditorComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      data: {workflow:this.workflow}
    });

    d.afterClosed().subscribe(res => {
      if (res) {
      }
    });
  };
}
