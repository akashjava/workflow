import { Component, OnInit, Input } from '@angular/core';
import { WorkflowEntityDefinition,workflow as _workflow } from '../../../reducers/workflow-managment.states';

@Component({
  selector: 'string-widget',
  templateUrl: './string-widget.component.html',
  styleUrls: ['./string-widget.component.css']
})
export class StringWidgetComponent implements OnInit {
  @Input() workflow:WorkflowEntityDefinition=JSON.parse(JSON.stringify(_workflow))

  constructor() { }

  ngOnInit() {
  }

}
