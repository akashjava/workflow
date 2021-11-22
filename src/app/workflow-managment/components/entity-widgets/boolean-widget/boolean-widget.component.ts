import { Component, OnInit, Input } from '@angular/core';
import { WorkflowEntityDefinition,workflow as _workflow } from '../../../reducers/workflow-managment.states';

@Component({
  selector: 'boolean-widget',
  templateUrl: './boolean-widget.component.html',
  styleUrls: ['./boolean-widget.component.css']
})
export class BooleanWidgetComponent implements OnInit {
  @Input() workflow:WorkflowEntityDefinition=JSON.parse(JSON.stringify(_workflow))

  constructor() { }

  ngOnInit() {
  }

}
