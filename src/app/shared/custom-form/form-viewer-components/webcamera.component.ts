import { Component, OnInit, Input } from "@angular/core";
import { WebcamImage } from "ngx-webcam";
import { Subject } from "../../../../../node_modules/rxjs";
import { Observable } from "rxjs";
import { paths } from "../../../../environments/environment";
import { map } from "rxjs/operators";
import { AppService } from "../../../app.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "app-webcamera",
  template: `
    <div
      style="padding: 1rem;"
      class="wrapper"
      [style.background]="from === 'shipmentUpdateScreen' ? 'rgba(245, 251, 255, 0.59)' : '#ffffff'"
      [style.border]="from === 'shipmentUpdateScreen' ? 'none' : '1px solid #e8e8e8'"
    >
      <div style="font-weight: 500;font-size: 14px;color: #152935;padding: 0.5rem 0rem;">
        {{ schema?.fieldKey }}<span style="font-size: 12px;color: #5A6872;" *ngIf="schema?.required">* (Required)</span>
      </div>
      <div *ngIf="schema?.description" style="font-size: 14px;color: #5A6872;">{{ schema?.description }}</div>
      <div>
        <div *ngIf="!schema?.multiple">
          <div *ngIf="singleImage" style="width: 5rem;padding: 0.3rem;">
            <img class="img-hor-vert " src="{{ 'data:image/jpeg;base64,' + singleImage?.previewString }}" />
            <mat-form-field style="width:100%">
              <input matInput placeholder="Document Name" [(ngModel)]="singleImage.name" (focusout)="updateDocName(singleImage.uuid, singleImage.name)" />
            </mat-form-field>
          </div>
          <div>
            <div class="single-camera" (click)="showWebcam = true" *ngIf="!singleImage">
              <mat-spinner *ngIf="isSpinner" mode="indeterminate" style="position: absolute;" class="custom-spinner" [strokeWidth]="3" [diameter]="30"></mat-spinner>
              <mat-icon>camera_alt</mat-icon>
            </div>
            <button (click)="retake()" *ngIf="singleImage">RETAKE</button>
          </div>
        </div>

        <div *ngIf="schema?.multiple" style="display: grid;grid-template-columns: repeat(2,1fr);">
          <div style="width: 5rem;padding: 0.3rem;position: relative;" *ngFor="let item of multiImage">
            <mat-icon (click)="remove(item.uuid)" class="remove">clear</mat-icon>
            <img class="img-hor-vert " src="{{ 'data:image/jpeg;base64,' + item?.previewString }}" />
            <mat-form-field style="width:100%">
              <input matInput placeholder="Document Name" [(ngModel)]="item.name" (focusout)="updateDocName(item.uuid, item.name)" />
            </mat-form-field>
          </div>
          <div *ngIf="schema?.multiple" style="padding: 0.3rem">
            <div class="multi-camera" (click)="showWebcam = true">
              <mat-spinner *ngIf="isSpinner" mode="indeterminate" style="position: absolute;" class="custom-spinner" [strokeWidth]="5" [diameter]="70"></mat-spinner>
              <mat-icon style="font-size:3rem;height:3rem;width:3rem;">camera_alt</mat-icon>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div *ngIf="showWebcam" class="mycustomDialog" style="overflow: hidden;">
      <div class="modal-content modal-content-override" style="border-radius: 0px;text-align: center;">
        <div style="text-align: center;padding: 1rem;">
          <mat-icon style="float:right" (click)="showWebcam = false">clear</mat-icon>
          <webcam [mirrorImage]="'always'" [trigger]="triggerObservable" (imageCapture)="handleImage($event)"></webcam>
        </div>

        <br />
        <button style="width: fit-content" (click)="triggerSnapshot()">Click to Take A Snapshot</button>
      </div>
    </div>
  `,
  styles: [
    `
      .wrapper {
        background: #ffffff;
        border: 1px solid #e8e8e8;
        box-sizing: border-box;
        border-radius: 5px;
        padding: 0.5rem;
      }
      .img-hor-vert {
        transform: scaleX(-1);
        height: 5rem;
        width: 5rem;
      }
      .single-camera {
        background-color: #eee;
        padding: 0.2rem 0.8rem;
        width: 2rem;
        text-align: center;
        color: #0086da;
        border: 1px dashed #0086da;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
      }
      .multi-camera {
        background-color: #eee;
        padding: 0.8rem 0.8rem;
        width: 3rem;
        text-align: center;
        color: #0086da;
        border: 1px dashed #0086da;
        border-radius: 4px;
        height: 3rem;
        cursor: pointer;
      }
      .modal-content-override {
        width: 100vw;
        height: 100vh;
        margin-top: 0%;
        padding: 0rem;
      }
      .remove {
        position: absolute;
        z-index: 1;
        right: 0.3rem;
        background: white;
        color: red;
        width: 20px;
        height: 20px;
        font-size: 20px;
        cursor: pointer;
      }
    `
  ]
})
export class WebcameraComponent implements OnInit {
  private trigger: Subject<void> = new Subject<void>();
  showWebcam: boolean = false;
  isSpinner: boolean = false;
  @Input() schema: any;
  @Input() path: any;
  fileName: string = "Image";
  singleImage: any = null;
  multiImage: any[] = [];
  @Input() from: string;
  @Input() mode: string;

  constructor(private httpClient: HttpClient, private appService: AppService) {}

  ngOnInit() {}

  handleImage(webcamImage: WebcamImage): void {
    this.showWebcam = false;
    var blob = this.dataURItoBlob(webcamImage.imageAsDataUrl);
    var file = new File([blob], `${this.fileName}${this.schema.multiple ? this.multiImage.length : ""}.jpg`, { type: "'image/jpeg" });
    this.isSpinner = true;
    this.uploadImage(file).subscribe(
      (res : any) => {
        if (res.status == 200) {
          this.isSpinner = false;
          if (!this.schema.multiple) {
            this.singleImage = res.data;
          } else {
            this.multiImage.push(res.data);
          }
          this.updateValue();
        } else {
          this.isSpinner = false;
          this.appService.openSnackBar("Image Upload Failed !");
        }
      },
      err => {
        this.isSpinner = false;
        this.appService.openSnackBar("Network Error !");
      }
    );
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  triggerSnapshot(): void {
    //  setTimeout(()=>{
    this.trigger.next();
    //  },500)
  }

  retake() {
    this.deleteImage(this.singleImage.uuid).subscribe((_ : any) => {
      if (_.status == 200) {
        this.updateValue();
      }
    });
    this.singleImage = null;
    this.showWebcam = true;
  }
  remove(docId) {
    this.deleteImage(docId).subscribe((res : any) => {
      if (res.status == 200) {
        this.multiImage = this.multiImage.filter(item => item.uuid !== docId);
        this.updateValue();
      }
    });
  }
  public uploadImage(file) {
    let documentObj = {
      file: file,
      doc: {
        resourceId: null,
        isExpirable: false,
        expireDate: null,
        uuid: null,
        orgId: null,
        resourceType: "DOC",
        docPath: null,
        downloadUrl: null,
        name: file.name
      }
    };
    let headers = new HttpHeaders({"Authorization"  : "Bearer " + this.appService.getToken()});
    let formData: FormData = new FormData();
    formData.append("file", documentObj.file, documentObj.file.name);
    formData.append("doc", JSON.stringify(documentObj.doc));

    return this.httpClient.post(`${paths.DOCUMENT_PATH}/v1/document`, formData, {
      headers: headers
    });
  }

  deleteImage = docid => {
    let headers = new HttpHeaders({"Content-Type" : "application/json","Authorization"  : "Bearer " + this.appService.getToken()});

    return this.httpClient.delete(`${paths.DOCUMENT_PATH}/v1/document/${docid}`, { headers: headers });
  };
  updateDocName(id, name) {
    let doc = {
      uuid: id,
      name: name
    };
    this.updateImage(doc).subscribe((res : any) => {
      if (res.status == 200) {
        if (this.schema.multiple) {
          this.multiImage[this.multiImage.findIndex(item => item.uuid == id)] = res.data;
        } else {
          this.singleImage = res.data;
        }
        this.updateValue();
      }
    });
  }

  public updateImage(reqObj) {
    let headers = new HttpHeaders({"Content-Type" : "application/json","Authorization"  : "Bearer " + this.appService.getToken()});

    return this.httpClient.put(`${paths.DOCUMENT_PATH}/v1/document`, reqObj, { headers: headers });
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

  updateValue = () => {
    // this.schema.indexedValue=[]
    if (this.schema.multiple) {
      // this.value.forEach(element => {
      //   this.schema.indexedValue.push(`${this.schema.fieldKey}_${element}`)
      // });
      this.schema.value = JSON.stringify(this.multiImage);
    } else {
      // this.schema.indexedValue.push(`${this.schema.fieldKey}_${this.value}`)
      this.schema.value = JSON.stringify(this.singleImage);
    }
    console.log(this.schema);
  };
}
