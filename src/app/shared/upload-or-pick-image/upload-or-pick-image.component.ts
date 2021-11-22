import { Component, OnInit, Output, EventEmitter, Input, ViewChild } from '@angular/core';
import { AppService } from '../../app.service';
import { Subject, Observable } from 'rxjs';
import { WebcamImage } from 'ngx-webcam';

@Component({
  selector: 'upload-or-pick-image',
  templateUrl: './upload-or-pick-image.component.html',
  styleUrls: ['./upload-or-pick-image.component.css']
})
export class UploadOrPickImageComponent implements OnInit {
  private trigger: Subject<void> = new Subject<void>();
  showWebcam: boolean = false;
  @Output() value = new EventEmitter<any>()
  @Input() placeholder:string=''
  @Input() fileName:string='Image'
  @ViewChild("file", { static: false })
  pickFile: any;

  constructor(public appService:AppService) { }

  ngOnInit() {
  }
  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  triggerSnapshot(): void {
    this.trigger.next();
  }
  handleImage(webcamImage: WebcamImage): void {
    var blob = this.dataURItoBlob(webcamImage.imageAsDataUrl);
    var file = new File([blob], `${this.fileName}.jpg`, { type: "'image/jpeg" });
    this.value.emit(file)
    this.showWebcam = false;
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
  triggerFileInput = () => {
    try {
      this.pickFile.nativeElement.click();
    } catch (error) {
      console.log(error);
    }
  };
  chooseFile(files: FileList): void {
    let file = files.item(0);
    var blob = file.slice(0, file.size, 'image/jpeg'); 
    var newFile = new File([blob],`${this.fileName}.jpg`, { type: "'image/jpeg" });
    this.value.emit(newFile)
  }

}
