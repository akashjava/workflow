import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from "@angular/core";
import {
  WorkflowEntityDefinition,
  workflow as _workflow
} from "../../reducers/workflow-managment.states";
import { SharedService } from "../../../shared/shared.service";
import { MatDialog } from "@angular/material/dialog";
import { AddEditEntityComponent } from "../dialogs/add-edit-entity/add-edit-entity.component";

@Component({
  selector: "workflow-priview",
  templateUrl: "./workflow-priview.component.html",
  styleUrls: ["./workflow-priview.component.css"]
})
export class WorkflowPriviewComponent implements OnInit, OnChanges {
  isExpand: boolean = true;
  @Input() workflow: WorkflowEntityDefinition;
  @Output() public workflowChange = new EventEmitter<
    WorkflowEntityDefinition
  >();
  @Output() delete = new EventEmitter<any>();
  @Input() isChild: boolean = true;
  @Input() showActions: boolean = true;
  @Input() allowDropped: boolean = true;

  constructor(private sharedService: SharedService, public dialog: MatDialog) {}

  ngOnInit() {}
  ngOnChanges(changes: SimpleChanges) {}

  allowDrop(ev) {
    if (this.workflow.type == "object" && this.allowDropped) {
      ev.preventDefault();
    } else {
      return;
    }

    ev.stopPropagation();
    // console.log(ev)
  }

  drop(ev) {
    ev.preventDefault();
    let payload = JSON.parse(ev.dataTransfer.getData("data"));
    this.addEntity(payload);
    ev.stopPropagation();
  }
  deleteWorkflow = index => {
    this.workflow.fields.splice(index, 1);
    this.workflowChange.emit(this.workflow);
  };
  addEntity = (data: any = null, isEdit: boolean = false) => {
    const d = this.dialog.open(AddEditEntityComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      width: "50vw",
      height: "50vh",
      data: { workflow: isEdit ? this.workflow : data, isEdit: isEdit }
    });

    d.afterClosed().subscribe(res => {
      if (res) {
        if (isEdit) {
          this.workflow = res;
          this.workflowChange.emit(this.workflow);
        } else {
          this.workflow.fields.push(res);
          this.workflowChange.emit(this.workflow);
        }
      }
    });
  };
}
