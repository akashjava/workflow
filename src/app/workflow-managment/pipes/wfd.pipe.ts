import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
@Pipe({ name: "wfdFieldType", pure: true })
export class WFDFieldType implements PipeTransform {
  transform(status: string): string {
    let value = "";
    switch (status) {
      // EntityType
      case "object":
        value = "OBJECT";
        break;
      case "array":
        value = "ARRAY";
        break;
      case "string":
        value = "STRING";
        break;
      case "number":
        value = "NUMBER";
        break;
      case "decimal":
        value = "DECIMAL";
        break;
      case "boolean":
        value = "BOOLEAN";
        break;
      case "entityType":
        value = "GEO_POINT";
        break;
      // LogicalType
      case "Entity":
        value = "ENTITY";
        break;
      case "Address":
        value = "ADDRESS";
        break;
      case "Checkbox":
        value = "CHECKBOX";
        break;
      case "Counter":
        value = "COUNTER";
        break;
      case "Weight":
        value = "WEIGHT";
        break;
      case "Text":
        value = "TEXT";
        break;
      case "Number":
        value = "NUMBER";
        break;
      case "Contact No":
        value = "CONTACT";
        break;
      case "Email":
        value = "EMAIL";
        break;
      case "Date":
        value = "DATE";
        break;
      case "Date & Time":
        value = "DATETIME";
        break;
      case "Single Choice":
        value = "SINGLECHOICE";
        break;
      case "Yes/No":
        value = "YESNO";
        break;
      case "Drop down (Single Selection)":
        value = "DROPDOWNSINGLE";
        break;
      case "Drop down (Multiple Selection)":
        value = "DROPDOWNMULTIPLE";
        break;
      case "Camera":
        value = "CAMERA";
        break;
      default:
        value = "";
        break;
    }

    return value;
  }
}

@Pipe({ name: "gridArea", pure: true })
export class CalculateGridArea implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}
  transform(element: any, totalWidth: number): any {
    console.log(element);
    if (totalWidth) {
      let start = element.position;
      let end = start + element.width;
      let startGrid = null;
      let endGrid = null;
      if (start <= totalWidth) {
        startGrid = 1;
      }
      if (totalWidth < start && start <= totalWidth * 2) {
        startGrid = 2;
      }
      if (totalWidth * 2 < start && start <= totalWidth * 3) {
        startGrid = 3;
      }
      if (totalWidth * 3 < start && start <= totalWidth * 4) {
        startGrid = 4;
      }
      if (totalWidth * 4 < start && start <= totalWidth * 5) {
        startGrid = 5;
      }
      if (totalWidth * 5 < start && start <= totalWidth * 6) {
        startGrid = 6;
      }
      if (totalWidth * 6 < start) {
        startGrid = 6;
      }

      if (end <= totalWidth) {
        endGrid = 1;
      }
      if (totalWidth < end && end <= totalWidth * 2) {
        endGrid = 2;
      }
      if (totalWidth * 2 < end && end <= totalWidth * 3) {
        endGrid = 3;
      }
      if (totalWidth * 3 < end && end <= totalWidth * 4) {
        endGrid = 4;
      }
      if (totalWidth * 4 < end && end <= totalWidth * 5) {
        endGrid = 5;
      }
      if (totalWidth * 5 < end && end <= totalWidth * 6) {
        endGrid = 6;
      }
      if (totalWidth * 5 < end && end > totalWidth * 6) {
        endGrid = 7;
      }
      console.log(startGrid + " / " + endGrid);
      return this._sanitizer.bypassSecurityTrustStyle(
        startGrid + " / " + endGrid
      );
    }
    return this._sanitizer.bypassSecurityTrustStyle(0 + " / " + 0);
  }
}
