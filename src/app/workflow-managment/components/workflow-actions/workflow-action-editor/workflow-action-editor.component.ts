import { Component, OnInit, Input, Inject} from '@angular/core';
import { WorkflowEntityDefinition } from '../../../reducers/workflow-managment.states';
declare var TraverseObjects ;
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material/dialog";
import { WorkflowActionFormBuilderComponent } from '../workflow-action-form-builder/workflow-action-form-builder.component';

@Component({
  selector: 'workflow-action-editor',
  templateUrl: './workflow-action-editor.component.html',
  styleUrls: ['./workflow-action-editor.component.css']
})
export class WorkflowActionEditorComponent implements OnInit{
  actionFields:any=[]
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<WorkflowActionEditorComponent>,
    public dialog: MatDialog
  ) { 
    let wo=JSON.parse(JSON.stringify(this.data.workflow))
    wo.name=''
    this.actionFields=TraverseObjects.traverseWorkflow(wo,'')
  }

  ngOnInit() {
    
  }
  close = () => this.matDialogRef.close()
  save(){
    this.matDialogRef.close()
  }
  openFormDialog(){
    const d = this.dialog.open(WorkflowActionFormBuilderComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      data:this.data.workflow
    });

      d.afterClosed().subscribe(res => {
        if (res) {
        }
      })
  }


}
