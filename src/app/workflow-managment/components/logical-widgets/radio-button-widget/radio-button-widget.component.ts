import { Component, OnInit, Input } from '@angular/core';
import { WorkflowEntityDefinition ,workflow as _workflow} from '../../../reducers/workflow-managment.states';

@Component({
  selector: 'radio-button-widget',
  templateUrl: './radio-button-widget.component.html',
  styleUrls: ['./radio-button-widget.component.css']
})
export class RadioButtonWidgetComponent implements OnInit {
  @Input() workflow:WorkflowEntityDefinition=JSON.parse(JSON.stringify(_workflow))
  value:any;
  constructor() { }

  ngOnInit() {
  }

}
