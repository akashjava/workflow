import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

@Input() uuid:string;
@Input() name:string;
@Input() color:string;
imageId:string=null;

@Input() set image(data:any){
    if(data){
     this.imageId=data
    }
}

public bColor='';
  constructor(){ 

  }

  ngOnInit() {
      if(this.color){
        this.bColor=this.color
      }
      else{
        this.bColor =this.stringToColour(this.uuid);
      }

      this.name = this.nameFormator(this.name);

  }

  
  stringToColour(str){
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    var colour = '#';
    for (var i = 0; i < 3; i++) {
        var value = (hash >> (i * 8)) & 0xFF;
        colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
}


nameFormator(name){
    if(name ==null || name ==undefined){
        name ="";
    }
    let str =name.trim();
    
    let res ='';
    let spaceIndex=str.indexOf(" ");

    if(spaceIndex <0){
        res =str.substr(0,2);
    }else{
        res =str.charAt(0);
        res=res+(str.slice(spaceIndex+1).trim()).charAt(0);
    }
    res= res.toUpperCase();
    return res;
}

}
