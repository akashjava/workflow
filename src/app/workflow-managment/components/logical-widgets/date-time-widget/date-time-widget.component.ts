import { Component, OnInit, Input } from '@angular/core';
import { WorkflowEntityDefinition ,workflow as _workflow} from '../../../reducers/workflow-managment.states';

@Component({
  selector: 'date-time-widget',
  templateUrl: './date-time-widget.component.html',
  styleUrls: ['./date-time-widget.component.css']
})
export class DateTimeWidgetComponent implements OnInit {
  @Input() workflow:WorkflowEntityDefinition=JSON.parse(JSON.stringify(_workflow))

  constructor() { }

  ngOnInit() {
  }
  dateEvent=(event)=>{}

}
