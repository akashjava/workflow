import { Component, OnInit, Input } from '@angular/core';
import { WorkflowEntityDefinition ,workflow as _workflow} from '../../../reducers/workflow-managment.states';

@Component({
  selector: 'number-widget',
  templateUrl: './number-widget.component.html',
  styleUrls: ['./number-widget.component.css']
})
export class NumberWidgetComponent implements OnInit {
  @Input() workflow:WorkflowEntityDefinition=JSON.parse(JSON.stringify(_workflow))

  constructor() { }

  ngOnInit() {
  }
  numbersOnly = event => {
    const pattern = /[0-9]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  };
}
