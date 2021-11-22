import { Component, OnInit, Input } from "@angular/core";
@Component({
  selector: "app-custom-form-viewer",
  templateUrl: "./custom-form-viewer.component.html",
  styleUrls: ["./custom-form-viewer.component.css"]
})
export class CustomFormViewerComponent implements OnInit {
  properties: any[] = [];
  schema: any;

  @Input() path: any;
  isParse: boolean = false;

  @Input() uuid: string;
  @Input() from: string;
  @Input() mode: string;

  @Input() set setSchema(data: any) {
    this.schema = data;
    if (this.schema.fieldType == "object") {
      this.properties = Object.keys(this.schema.properties);
    }
  }
  constructor() {}
  ngOnInit() {}
}
