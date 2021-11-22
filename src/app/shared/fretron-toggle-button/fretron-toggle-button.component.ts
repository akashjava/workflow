import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-fretron-toggle-button',
  templateUrl: './fretron-toggle-button.component.html',
  styleUrls: ['./fretron-toggle-button.component.css']
})
export class FretronToggleButtonComponent implements OnInit {

  public value:boolean =false;
  public isDisabled:boolean =false;

  @Input() set checked(data:boolean){
    try{
        this.value =data;
    }catch(e){
      
    }
  }

  @Input() set disabled(data:boolean){
    try{
        this.isDisabled =data;
    }catch(e){
      
    }
  }

  @Output() change =new EventEmitter<any>();


  constructor() { }


  toggle(){
    this.value =!this.value;
    this.change.emit(this.value);
  }


  ngOnInit() {
  }

}
