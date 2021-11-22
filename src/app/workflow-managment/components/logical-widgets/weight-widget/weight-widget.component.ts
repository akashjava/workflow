import { Component, OnInit, Input } from '@angular/core';
import { WorkflowEntityDefinition ,workflow as _workflow} from '../../../reducers/workflow-managment.states';

@Component({
  selector: 'weight-widget',
  templateUrl: './weight-widget.component.html',
  styleUrls: ['./weight-widget.component.css']
})
export class WeightWidgetComponent implements OnInit {
  @Input() workflow:WorkflowEntityDefinition=JSON.parse(JSON.stringify(_workflow))

  constructor() { }

  ngOnInit() {
  }

}
