import { Injectable } from "@angular/core";
import { isEmpty } from "../../core/validators.util";
import { Subject } from "rxjs";
@Injectable()
export class JsonSchemaService {
  data: any = {}; // Output form data (formValues, formatted with correct data types)
  schema: any = {}; // Internal JSON Schema
  public jsonSchema: Subject<any> = new Subject<any>();
  
  constructor() {}
  
  setSchema = (schema: any) => {
    schema ? (this.schema = schema) : (this.schema = {});
    if (isEmpty(this.schema)) {
    }
  };
  
  getSchema = (): any => {
    return this.schema;
  };
 
  setData = event => {
    this.data[event.key] = event.value;
  };
  
  generateSchema = (prop : any) => {
    let jsonSchema: any = {
      fieldType: "array",
      properties: []
    };
    prop.forEach((element : any) => {
      jsonSchema.properties.push({
        schema: element.cfs,
        cfDefinition: element.cfDefinition
      });
    });
    this.jsonSchema.next(jsonSchema);
  };
}
