import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "custom-field-picker",
  templateUrl: "./custom-field-picker.component.html",
  styleUrls: ["./custom-field-picker.component.css"]
})
export class CustomFieldPickerComponent implements OnInit {
  @Input() version: boolean;
  @Output() selection: EventEmitter<any> = new EventEmitter();

  @Input() SupportOlderVersion: boolean = false;
  items: any[] = [
    {
      view: "Entity",
      cfs: {
        fieldType: "entity",
        accessType: null,
        fieldKey: "",
        value: null,
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: "string"
      },
      cfDefinition: {
        allowedUsers: [],
        allowedRoles: [],
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        transformer: {
          type: "path",
          fields: [],
          separator: "*"
        },
        entity: ""
      }
    },
    {
      view: "Address",
      cfs: {
        fieldType: "address",
        accessType: null,
        fieldKey: "",
        value: null,
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "json",
        input: "string"
      },
      cfDefinition: {
        allowedUsers: [],
        allowedRoles: [],
        mandotary_on_create: false,
        mandotary_on_resolve: false
      }
    },
    {
      view: "Checkbox",
      cfs: {
        fieldType: "checkbox",
        accessType: null,
        fieldKey: "",
        value: null,
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: ""
      },
      cfDefinition: {
        allowedUsers: [],
        allowedRoles: [],
        mandotary_on_create: false,
        mandotary_on_resolve: false
      }
    },
    {
      view: "Counter",
      cfs: {
        fieldType: "counter",
        accessType: null,
        fieldKey: "",
        value: null,
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: "number"
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    },
    {
      view: "Weight",
      cfs: {
        accessType: null,
        fieldType: "weight",
        fieldKey: "",
        value: null,
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: "number"
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    },
    {
      view: "Text",
      cfs: {
        accessType: null,
        fieldType: "text",
        fieldKey: "",
        value: null,
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: "string"
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    },
    {
      view: "Number",
      cfs: {
        accessType: null,
        fieldType: "text",
        fieldKey: "",
        value: null,
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: "number"
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    },
    {
      view: "Contact No",
      cfs: {
        accessType: null,
        fieldType: "contactNo",
        fieldKey: "",
        value: null,
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: "number"
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    },
    {
      view: "Email",
      cfs: {
        accessType: null,
        fieldType: "email",
        fieldKey: "",
        value: null,
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: "string"
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    },
    {
      view: "Date",
      cfs: {
        accessType: null,
        fieldType: "date",
        fieldKey: "",
        value: null,
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: "date"
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    },
    {
      view: "Date & Time",
      cfs: {
        accessType: null,
        fieldType: "date",
        fieldKey: "",
        value: null,
        multiple: true,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: "date"
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    },
    {
      view: "Single Choice",
      cfs: {
        accessType: null,
        fieldType: "radio-button",
        fieldKey: "",
        value: null,
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: ""
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    },
    {
      view: "Yes/No",
      cfs: {
        accessType: null,
        fieldType: "yes-no",
        fieldKey: "",
        value: "NO",
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: ""
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    },
    {
      view: "Drop down (Single Selection)",
      cfs: {
        accessType: null,
        fieldType: "select",
        fieldKey: "",
        value: null,
        multiple: false,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "string",
        input: ""
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    },
    {
      view: "Drop down (Multiple Selection)",
      cfs: {
        accessType: null,
        fieldType: "select",
        fieldKey: "",
        value: null,
        multiple: true,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "arrayOfString",
        input: ""
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    },
    // {
    //   view:'Textarea',
    //   field_name:'textarea',
    //   cfs:{
    //     "type": "textarea",
    //     "label":"",
    //     "notitle": false,
    //     "placeholder": "",
    //     "required":false,
    //     "width":'100%',
    //     "description":"",
    //     "input":"string"
    //   }
    // },

    {
      view: "Camera",
      cfs: {
        fieldType: "camera",
        accessType: null,
        fieldKey: "",
        value: null,
        multiple: true,
        unit: "",
        isRemark: false,
        remark: "",
        required: false,
        description: "",
        options: [],
        indexedValue: [],
        valueType: "arrayOfJson",
        input: ""
      },
      cfDefinition: {
        mandotary_on_create: false,
        mandotary_on_resolve: false,
        allowedUsers: [],
        allowedRoles: []
      }
    }
    // {
    //   view:'File',
    //   cfs:{
    //     "fieldType": "file",
    //     "fieldKey":"",
    //     "value":null,
    //     "multiple":false,
    //     "unit": "",
    //     "isRemark":false,
    //     "remark":"",
    //     "required": false,
    //     "description":"",
    //     "options":[],
    //     "indexedValue":[],
    //     "valueType":"arrayOfJson",
    //     "input":'',
    //     "singleFile":null,
    //     "multiFile":[],
    //   }
    // },
    // {
    //   type:'array',
    //   view:'Array',
    //   field_name:'',
    //   cfs:{
    //     "type": "text",
    //     "label":"",
    //     "notitle": false,
    //     "placeholder": "",
    //     "width":'100%',
    //     "input":"string"
    //   }
    // },
    // {
    //   type:'button',
    //   view:'Button',
    //   cfs:{
    //     "type": "button",
    //     "name": "",
    //   }
    // }
  ];
  constructor() {}

  ngOnInit() {}

  onItemClick = (item: any) => {
    item = JSON.parse(JSON.stringify(item));
    if (this.SupportOlderVersion) {
      this.selection.emit({
        schema: item.cfs,
        cfDefinition: item.cfDefinition,
        view: item.view
      });
    } else {
      this.selection.emit({ cfs: item.cfs, cfDefinition: item.cfDefinition });
    }
  };
}
