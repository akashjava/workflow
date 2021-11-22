import { Component, OnInit, Input, EventEmitter, Output, OnChanges, SimpleChanges } from "@angular/core";
import {
  WorkflowEntityDefinition,
  workflow as _workflow,
  LogicalTypeDefinations,
  EntityTypeDefinations
} from "../../reducers/workflow-managment.states";
import { SharedService } from "../../../shared/shared.service";


@Component({
  selector: "workflow-entity-editor",
  templateUrl: "./workflow-entity-editor.component.html",
  styleUrls: ["./workflow-entity-editor.component.css"]
})
export class WorkflowEntityEditorComponent implements OnInit ,OnChanges{
  @Input() public workflow: WorkflowEntityDefinition;
  @Output() public workflowChange = new EventEmitter<WorkflowEntityDefinition>();
  @Input() isChild:boolean=true;
  @Input() showActions:boolean=true;
  @Output() removeEvent= new EventEmitter<any>();
  isExpand:boolean=true;
  fieldFor:string=''
  fieldType={
    EntityType:EntityTypeDefinations,
    LogicalType:LogicalTypeDefinations
  }

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges): void {
    
  }
  addField(workflow) {
    if(this.fieldFor=='object'){
      this.workflow.fields.push(JSON.parse(JSON.stringify(workflow)));
    }
    if(this.fieldFor=='array'){
      this.workflow.itemType=JSON.parse(JSON.stringify(workflow));
    }
    this.workflowChange.emit(this.workflow)
  }
  removeField=(index)=>{
    this.workflow.fields.splice(index,1)
    this.workflowChange.emit(this.workflow)
  }

  

  
}
