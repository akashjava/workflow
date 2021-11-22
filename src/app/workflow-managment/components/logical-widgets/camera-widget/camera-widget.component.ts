import { Component, OnInit, Input } from '@angular/core';
import { WorkflowEntityDefinition ,workflow as _workflow} from '../../../reducers/workflow-managment.states';
import { Observable, Subject } from 'rxjs';
import { WebcamImage } from "ngx-webcam";

@Component({
  selector: 'camera-widget',
  templateUrl: './camera-widget.component.html',
  styleUrls: ['./camera-widget.component.css']
})
export class CameraWidgetComponent implements OnInit {
  @Input() workflow:WorkflowEntityDefinition=JSON.parse(JSON.stringify(_workflow))
  showWebcam:boolean=false;
  private trigger: Subject<void> = new Subject<void>();
  multiImage:any[]=[]
  constructor() { }

  ngOnInit() {
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
  triggerSnapshot(): void {
    //  setTimeout(()=>{
    this.trigger.next();
    //  },500)
  }
  handleImage(webcamImage: WebcamImage): void {
    this.showWebcam = false;
    var blob = this.dataURItoBlob(webcamImage.imageAsDataUrl);
    this.multiImage.push(webcamImage.imageAsDataUrl)
    console.log(this.multiImage)
    // var file = new File([blob], `${this.fileName}${this.schema.multiple ? this.multiImage.length : ""}.jpg`, { type: "'image/jpeg" });
  }

  dataURItoBlob(dataURI) {
    // convert base64/URLEncoded data component to raw binary data held in a string
    var byteString;
    if (dataURI.split(",")[0].indexOf("base64") >= 0) byteString = atob(dataURI.split(",")[1]);
    else byteString = decodeURIComponent(dataURI.split(",")[1]);

    // separate out the mime component
    var mimeString = dataURI
      .split(",")[0]
      .split(":")[1]
      .split(";")[0];

    // write the bytes of the string to a typed array
    var ia = new Uint8Array(byteString.length);
    for (var i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }

    return new Blob([ia], { type: mimeString });
  }
}
