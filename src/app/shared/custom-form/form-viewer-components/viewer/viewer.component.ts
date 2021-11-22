import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-viewer',
  templateUrl: './viewer.component.html',
  styleUrls: ['./viewer.component.css']
})
export class ViewerComponent implements OnInit {

  @Input() fieldKey : string
  @Input() fieldValue : string
  @Input() required : boolean =false;
  

  constructor() { }

  ngOnInit() {
  }

}
