import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { JsonSchemaService } from "../json-schema-service";

@Component({
  selector: "app-custom-form-builder",
  templateUrl: "./custom-form-builder.component.html",
  styleUrls: ["./custom-form-builder.component.css"]
})
export class CustomFormBuilderComponent implements OnInit {
  properties: any[] = [];
  @Input() version: boolean = false;
  @Input() isEdit: boolean = false;
  @Input() set setSchema(data: any) {
    if (data) {
      this.properties = [];
      if (data.fieldType == "array") {
        this.properties = data.properties;
      }
    }
  }

  trackByFn(index : number, item : any) {
    return index; 
  }

  constructor(private jsonService: JsonSchemaService) {}

  ngOnInit() {}

  selectedField = item => {
    this.properties.push(JSON.parse(JSON.stringify(item)));
    this.jsonService.generateSchema(this.properties);
  };

  removeFormItem = (index: number) => {
    this.properties.splice(index, 1);
    this.jsonService.generateSchema(this.properties);
  };

  inputChange = () => this.jsonService.generateSchema(this.properties);

  schemaChange = (customField: any, index: number) => {
    this.properties[index] = customField;
    this.jsonService.generateSchema(this.properties);
  };

  rearrange = (from, to) => {
    this.properties.splice(to, 0, this.properties.splice(from, 1)[0]);
    this.jsonService.generateSchema(this.properties);
  };
}
