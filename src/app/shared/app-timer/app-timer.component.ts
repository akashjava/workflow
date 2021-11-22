import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  template: `
    <div  style="flex-direction:column" class="web" *ngIf="type=='BOX'">
      <div style="align-items:center;display:flex;">
        <mat-icon style="color: #5B6973">timer</mat-icon>
        <span class="small-box mat-elevation-z2" style="margin-left: 5px">{{hours?.substring(0,1)}}</span>
        <span class="small-box mat-elevation-z2">{{hours?.substring(1,2)}}</span>
        <span style="margin: 0px 3px">:</span>
        <span class="small-box mat-elevation-z2">{{minutes?.substring(0,1)}}</span>
        <span class="small-box mat-elevation-z2">{{minutes?.substring(1,2)}}</span>
        <span style="margin: 0px 3px">:</span>
        <span class="small-box mat-elevation-z2">{{seconds?.substring(0,1)}}</span>
        <span class="small-box mat-elevation-z2">{{seconds?.substring(1,2)}}</span>
      </div>
      <div style="display:flex;align-items:center;font-size: 12px;color: #152935;padding-top:4px">
        <span style="margin-left: 2.5rem;flex: 1;">hours</span>
        <span style="margin-left: 0.5rem;flex: 1;">minutes</span>
        <span style="margin-left: 1rem;flex: 1;">seconds</span>
      </div>
    </div>
    <div style="display:flex;align-items:center;color: #5A6872;font-size:14px;"  *ngIf="(type=='TEXT')">
      <i style="font-weight: 500;">{{hours}}<span style="font-size:10px">h</span>:{{minutes}}<span style="font-size:10px">m</span>:{{seconds}}<span style="font-size:10px">s</span> time left</i>
    </div>
    <div style="display:flex;align-items:center;font-size:16px;"  *ngIf="(type=='TIME')" [ngClass]="(time - currentTime <600000) && isBlink?'blink_me':'{color: #152935;}'">
      <span>{{hours}}<span style="font-size:10px">h</span>&nbsp;:&nbsp;{{minutes}}<span style="font-size:10px">m</span>&nbsp;:&nbsp;{{seconds}}<span style="font-size:10px">s</span></span>
    </div>
    <div *ngIf="type=='BOX'" >
      <div style="align-items:center;justify-content: center;color: #152935;" class="mob">
        <span class="small-box-mob" style="margin-left: 5px">{{hours?.substring(0,1)}}</span>
        <span class="small-box-mob" >{{hours?.substring(1,2)}}</span>
        <span style="margin: 0px 3px;font-size: 26px;">:</span>
        <span class="small-box-mob">{{minutes?.substring(0,1)}}</span>
        <span class="small-box-mob">{{minutes?.substring(1,2)}}</span>
        <span style="margin: 0px 3px;font-size: 26px;">:</span>
        <span class="small-box-mob">{{seconds?.substring(0,1)}}</span>
        <span class="small-box-mob">{{seconds?.substring(1,2)}}</span>
      </div>
    </div>
  `,
  styles: [`
    .small-box{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 6px 8px;
      border-radius: 2px;
      background-color: white;
      margin: 0px 2px;
    }
    .small-box-mob{
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 5px;
      border-radius: 2px;
      background-color: white;
      font-size: 26px;
    }
    .web{
      display:flex;
    }
    .mob{
      display:none;
    }
    .blink_me {
      animation: blinker 1s linear infinite;
      color: #E71D32;
    }
    
    @keyframes blinker {
      50% {
        opacity: 0;
      }
    }
  @media(max-width: 650px){
    .wrapper {
      padding: 12px 16px;
      background: #0086DA;
    }
      .web{
        display:none;
      }
      .mob{
        display:flex;
      }
    }
  `]
})
export class AppTimerComponent implements OnInit {
  seconds:string='00';
  minutes:string='00';
  hours:string='00';
  days:any;
  timer:any;
  compairDate=new Date().getTime()
  @Input() type ='BOX'
  @Input() set payload(data:any){
    this.time=data;
    this.compairDate=new Date(this.time).getTime();
    this.timeDates(this.compairDate);

    // clearInterval(this.timer);
    this.startTimer();
  }
  time:number;
  currentTime:number=new Date().getTime();
  viewType:string='web'
  isBlink:boolean=true;
  constructor() { 
    this.viewType = document["viewType"];
  }

  ngOnInit() {
  }
  startTimer(){
    this.timer = setInterval(()=>{
      this.isBlink=true;
      this.currentTime=new Date().getTime()
      this.timeDates(this.compairDate);
    }, 1000);
  }
  timeDates(time) {
    let now = new Date();
    let difference = time-now.getTime();
    if (difference <= 0) {
      this.isBlink=false;
      clearInterval(this.timer);
    } else {
      
      let seconds = Math.floor(difference / 1000);
      let minutes = Math.floor(seconds / 60);
      let hours = Math.floor(minutes / 60);
      let days = Math.floor(hours / 24);
  
      this.hours =String((hours%24<10)?('0'+hours%24):( hours%24));
      this.minutes =String((minutes%60<10)?('0'+minutes%60):( minutes%60));
      this.seconds =String((seconds%60<10)?('0'+seconds%60):(seconds%60));
    }
  }

}
