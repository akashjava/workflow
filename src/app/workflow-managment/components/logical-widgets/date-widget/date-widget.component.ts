import { Component, OnInit, Input } from '@angular/core';
import { WorkflowEntityDefinition ,workflow as _workflow} from '../../../reducers/workflow-managment.states';

@Component({
  selector: 'date-widget',
  templateUrl: './date-widget.component.html',
  styleUrls: ['./date-widget.component.css']
})
export class DateWidgetComponent implements OnInit {
  @Input() workflow:WorkflowEntityDefinition=JSON.parse(JSON.stringify(_workflow))

  constructor() { }

  ngOnInit() {
  }
  dateEvent=(event)=>{}
}
