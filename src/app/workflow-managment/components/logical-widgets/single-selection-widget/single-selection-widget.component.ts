import { Component, OnInit, Input } from '@angular/core';
import { WorkflowEntityDefinition ,workflow as _workflow} from '../../../reducers/workflow-managment.states';

@Component({
  selector: 'single-selection-widget',
  templateUrl: './single-selection-widget.component.html',
  styleUrls: ['./single-selection-widget.component.css']
})
export class SingleSelectionWidgetComponent implements OnInit {
  @Input() workflow:WorkflowEntityDefinition=JSON.parse(JSON.stringify(_workflow))

  constructor() { }

  ngOnInit() {
  }

}
