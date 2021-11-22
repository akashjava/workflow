import { Component, OnInit, Input } from '@angular/core';
import { WorkflowEntityDefinition ,workflow as _workflow} from '../../../reducers/workflow-managment.states';

@Component({
  selector: 'multi-selection-widget',
  templateUrl: './multi-selection-widget.component.html',
  styleUrls: ['./multi-selection-widget.component.css']
})
export class MultiSelectionWidgetComponent implements OnInit {
  @Input() workflow:WorkflowEntityDefinition=JSON.parse(JSON.stringify(_workflow))

  constructor() { }

  ngOnInit() {
  }

}
