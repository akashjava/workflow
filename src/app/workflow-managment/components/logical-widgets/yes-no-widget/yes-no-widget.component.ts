import { Component, OnInit, Input } from '@angular/core';
import { WorkflowEntityDefinition ,workflow as _workflow} from '../../../reducers/workflow-managment.states';

@Component({
  selector: 'yes-no-widget',
  templateUrl: './yes-no-widget.component.html',
  styleUrls: ['./yes-no-widget.component.css']
})
export class YesNoWidgetComponent implements OnInit {
  @Input() workflow:WorkflowEntityDefinition=JSON.parse(JSON.stringify(_workflow))
  value:any;

  constructor() { }

  ngOnInit() {
  }

}
