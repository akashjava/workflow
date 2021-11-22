import { Component, OnInit, Input, ViewChild, ElementRef } from "@angular/core";
import { paths } from "../../../../environments/environment";
import { AppService } from "../../../app.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Component({
  selector: "custom-file-widget",
  template: `
    <div
      *ngIf="!mode"
      style="padding: 1rem;background-color: white;"
      [style.background]="from === 'shipmentUpdateScreen' ? 'rgba(245, 251, 255, 0.59)' : '#ffffff'"
      [style.border]="from === 'shipmentUpdateScreen' ? 'none' : '1px solid #e8e8e8'"
    >
      <input #inputFile type="file" style="display: none;" (change)="chooseFile($event.target.files)" />
      <div *ngIf="!options?.multiple">
        <div *ngIf="options?.singleFile" style="width: 7rem;padding: 0.3rem;position: relative;">
          <img class="img-hor-vert" src="assets/images/TextDocument.png" />
          <mat-form-field style="width:100%">
            <input
              matInput
              placeholder="Document Name"
              [(ngModel)]="options?.singleFile.name"
              (focusout)="updateDocName(options?.singleImage.uuid, options?.singleImage.name)"
            />
          </mat-form-field>
        </div>
        <div class="single-file" (click)="triggerFile()" *ngIf="!options?.singleFile">
          <mat-spinner *ngIf="isSpinner" mode="indeterminate" style="position: absolute;" class="custom-spinner" [strokeWidth]="3" [diameter]="30"></mat-spinner>
          <mat-icon>add</mat-icon>
          <span>Upload File</span>
        </div>
        <div class="another-file" (click)="removeSingle()" *ngIf="options?.singleFile">
          <mat-spinner *ngIf="isSpinner" mode="indeterminate" style="position: absolute;" class="custom-spinner" [strokeWidth]="3" [diameter]="30"></mat-spinner>
          <mat-icon>add</mat-icon>
          <span>Choose Another File</span>
        </div>
      </div>
      <div *ngIf="options?.multiple" style="display: grid;grid-template-columns: repeat(2,1fr);">
        <div style="width: 7rem;padding: 0.3rem;position: relative;" *ngFor="let item of options?.multiFile">
          <mat-icon (click)="remove(item.uuid)" class="remove">clear</mat-icon>
          <img class="img-hor-vert" src="assets/images/TextDocument.png" />
          <mat-form-field style="width:100%">
            <input matInput placeholder="Document Name" [(ngModel)]="item.name" (focusout)="updateDocName(item.uuid, item.name)" />
          </mat-form-field>
        </div>
        <div *ngIf="options?.multiple" style="padding: 0.3rem">
          <div class="multi-file" (click)="triggerFile()">
            <mat-spinner *ngIf="isSpinner" mode="indeterminate" style="position: absolute;" class="custom-spinner" [strokeWidth]="5" [diameter]="70"></mat-spinner>
            <mat-icon>add</mat-icon>
            <span>Upload File</span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div *ngIf="mode === 'view'">
      <app-viewer [fieldKey]="schema?.fieldKey" [required]="schema?.required" [fieldValue]="schema?.value"></app-viewer>
    </div> -->
  `,
  styles: [
    `
      .img-hor-vert {
        height: 7rem;
        width: 7rem;
      }
      .single-file {
        background-color: #ffffff;
        padding: 0.2rem 0.2rem;
        width: 7rem;
        color: #0086da;
        border: 1px dashed #0086da;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        align-items: center;
        display: flex;
      }
      .another-file {
        background-color: #ffffff;
        padding: 0.2rem 0.2rem;
        width: fit-content;
        color: #0086da;
        border: 1px dashed #0086da;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        align-items: center;
        display: flex;
      }
      .multi-file {
        background-color: #ffffff;
        padding: 1rem 0.2rem;
        width: 6rem;
        height: 3.5rem;
        color: #0086da;
        border: 1px dashed #0086da;
        border-radius: 4px;
        position: relative;
        cursor: pointer;
        align-items: center;
        display: flex;
        flex-direction: column;
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
export class CustomFileComponent implements OnInit {
  showWebcam: boolean = false;
  isSpinner: boolean = false;
  @Input() options: any;
  @Input() path: any;
  @ViewChild("inputFile", { static: true })
  inputFile: any;
  @Input() from: string;
  @Input() mode: string;

  constructor(private httpClient: HttpClient, private appService: AppService) {}

  ngOnInit() {}
  chooseFile(files: FileList): void {
    try {
      let file = files.item(0);
      this.isSpinner = true;

      let t = {
        uuid:null,
        isExpirable: false,
        expireDate: null,
        resourceType: "DOC",
        resourceId: null,
        docPath: null,
        downloadUrl: null,
        orgId:null,
        name: "Image.jpg",
        previewString:null,
 
      };
      this.options.singleFile = t;
      setTimeout(() => {
        this.isSpinner = false;
      }, 500);
      //   this.uploadFile(file).subscribe(
      //     res => {
      //       if (res.status == 200) {
      //         this.isSpinner = false;
      //         if (!this.options.multiple) {
      //           this.options.singleFile = res.data;
      //         } else {
      //           this.options.multiFile.push(res.data);
      //         }
      //       } else {
      //         this.isSpinner = false;
      //         this.appService.openSnackBar("Image Upload Failed !");
      //       }
      //     },
      //     err => {
      //       this.isSpinner = false;
      //       this.appService.openSnackBar("Network Error !");
      //     }
      //   );
    } catch (err) {}
  }
  triggerFile = () => {
    try {
      this.inputFile.nativeElement.click();
    } catch (error) {}
  };
  removeSingle = () => {
    try {
      this.deleteFile(this.options.singleFile.uuid).subscribe((_: any) => {
        if (_.status == 200) this.options.singleFile = null;
      });
      this.inputFile.nativeElement.click();
    } catch (error) {}
  };
  remove(docId) {
    this.deleteFile(docId).subscribe((res: any) => {
      if (res.status == 200) {
        this.options.multiImage = this.options.multiImage.filter(item => item.uuid !== docId);
      }
    });
  }
  uploadFile(file) {
    let documentObj = {
      file: file,
      doc: {
        resourceId: null,
        isExpirable: false,
        expireDate: null,
        uuid: null,
        orgId: null,
        resourceType: "FILE",
        docPath: null,
        downloadUrl: null,
        name: file.name
      }
    };

    let formData: FormData = new FormData();
    formData.append("file", documentObj.file, documentObj.file.name);
    formData.append("doc", JSON.stringify(documentObj.doc));

    return this.httpClient.post(`${paths.DOCUMENT_PATH}/v1/document`, formData, { headers: new HttpHeaders({ Authorization: "Bearer " + this.appService.getToken() }) });
  }

  deleteFile = (docid: string) => {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.appService.getToken()
      })
    };

    return this.httpClient.delete(`${paths.DOCUMENT_PATH}/v1/document/${docid}`, options);
  };

  updateDocName(id, name) {
    let doc = {
      uuid: id,
      name: name
    };
    this.updateFile(doc).subscribe((res: any) => {
      if (res.status == 200) {
        if (this.options.multiple) {
          this.options.multiFile[this.options.multiFile.findIndex(item => item.uuid == id)] = res.data;
        } else {
          this.options.singleFile = res.data;
        }
      }
    });
  }

  updateFile(reqObj: any) {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.appService.getToken()
      })
    };

    return this.httpClient.put(`${paths.DOCUMENT_PATH}/v1/document`, reqObj, options);
  }
}
