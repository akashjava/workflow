export enum EntityType {
  OBJECT = "object",
  ARRAY = "array",
  STRING = "string",
  NUMBER = "number",
  DECIMAL = "decimal",
  BOOLEAN = "boolean",
  DATE = "Date"
}
export enum LogicalType {
  ADDRESS = "Address",
  CHECKBOX = "Checkbox",
  COUNTER = "Counter",
  WEIGHT = "Weight",
  TEXT = "Text",
  NUMBER = "Number",
  CONTACT = "Contact No",
  EMAIL = "Email",
  DATE = "Date",
  DATETIME = "Date & Time",
  SINGLECHOICE = "Single Choice",
  YESNO = "Yes/No",
  DROPDOWNSINGLE = "Drop down (Single Selection)",
  DROPDOWNMULTIPLE = "Drop down (Multiple Selection)",
  CAMERA = "Camera"
}

export interface WorkflowEntityDefinition {
  uuid: String;
  name: string;
  type: EntityType;
  fields: WorkflowEntityDefinition[];
  itemType: WorkflowEntityDefinition; //only in case of Array
  options: String[];
  logicalType: LogicalType;
  // layout:{position:number,width:number}
}

export const workflow: WorkflowEntityDefinition = {
  uuid: null,
  name: null,
  type: EntityType.OBJECT,
  fields: [],
  itemType: null,
  options: [],
  logicalType: null
  // layout: {
  //   position: 0,
  //   width: 100
  // }
};
export interface WorkflowActions {
  name: string;
  condition: any;
  preScript: string;
  fieldsToUpdate: string[];
  postScript: string;
}
export const LogicalTypeDefinations = [
  {
    uuid: null,
    name: "Address",
    type: EntityType.OBJECT,
    fields: [
      {
        uuid: null,
        name: "Address Line",
        type: EntityType.STRING,
        fields: [],
        itemType: null,
        options: [],
        logicalType: null
      },
      {
        uuid: null,
        name: "City",
        type: EntityType.STRING,
        fields: [],
        itemType: null,
        options: [],
        logicalType: null
      },
      {
        uuid: null,
        name: "State",
        type: EntityType.STRING,
        fields: [],
        itemType: null,
        options: [],
        logicalType: null
      },
      {
        uuid: null,
        name: "Pincode",
        type: EntityType.NUMBER,
        fields: [],
        itemType: null,
        options: [],
        logicalType: null
      }
    ],
    itemType: null,
    options: [],
    logicalType: LogicalType.ADDRESS
  },
  {
    uuid: null,
    name: "Checkbox",
    type: EntityType.STRING,
    fields: [],
    itemType: null,
    options: ["First", "Second"],
    logicalType: LogicalType.CHECKBOX
  },
  {
    uuid: null,
    name: "Counter",
    type: EntityType.NUMBER,
    fields: [],
    itemType: null,
    options: [],
    logicalType: LogicalType.COUNTER
  },
  {
    uuid: null,
    name: "Weight",
    type: EntityType.OBJECT,
    fields: [
      {
        uuid: null,
        name: "Net Weight",
        type: EntityType.NUMBER,
        fields: [],
        itemType: null,
        options: [],
        logicalType: null
      },
      {
        uuid: null,
        name: "Unit",
        type: EntityType.STRING,
        fields: [],
        itemType: null,
        options: [],
        logicalType: null
      }
    ],
    itemType: null,
    options: [],
    logicalType: LogicalType.WEIGHT
  },
  {
    uuid: null,
    name: "Text",
    type: EntityType.STRING,
    fields: [],
    itemType: null,
    options: [],
    logicalType: LogicalType.TEXT
  },
  {
    uuid: null,
    name: "Number",
    type: EntityType.NUMBER,
    fields: [],
    itemType: null,
    options: [],
    logicalType: LogicalType.NUMBER
  },
  {
    uuid: null,
    name: "Contact No",
    type: EntityType.NUMBER,
    fields: [],
    itemType: null,
    options: [],
    logicalType: LogicalType.CONTACT
  },
  {
    uuid: null,
    name: "Email",
    type: EntityType.STRING,
    fields: [],
    itemType: null,
    options: [],
    logicalType: LogicalType.EMAIL
  },
  {
    uuid: null,
    name: "Date",
    type: EntityType.NUMBER,
    fields: [],
    itemType: null,
    options: [],
    logicalType: LogicalType.DATE
  },
  {
    uuid: null,
    name: "Date & Time",
    type: EntityType.NUMBER,
    fields: [],
    itemType: null,
    options: [],
    logicalType: LogicalType.DATETIME
  },
  {
    uuid: null,
    name: "Single Choice",
    type: EntityType.STRING,
    fields: [],
    itemType: null,
    options: [],
    logicalType: LogicalType.SINGLECHOICE
  },
  {
    uuid: null,
    name: "Yes/No",
    type: EntityType.STRING,
    fields: [],
    itemType: null,
    options: [],
    logicalType: LogicalType.YESNO
  },
  {
    uuid: null,
    name: "Single Selection",
    type: EntityType.STRING,
    fields: [],
    itemType: null,
    options: [],
    logicalType: LogicalType.DROPDOWNSINGLE
  },
  {
    uuid: null,
    name: "Multiple Selection",
    type: EntityType.STRING,
    fields: [],
    itemType: null,
    options: [],
    logicalType: LogicalType.DROPDOWNMULTIPLE
  },
  {
    uuid: null,
    name: "Camera",
    type: EntityType.OBJECT,
    fields: [],
    itemType: null,
    options: [],
    logicalType: LogicalType.CAMERA
  }
];
export const EntityTypeDefinations = [
  {
    uuid: null,
    name: null,
    type: EntityType.OBJECT,
    fields: [],
    itemType: null,
    options: [],
    logicalType: null
  },
  {
    uuid: null,
    name: null,
    type: EntityType.ARRAY,
    fields: [],
    itemType: null,
    options: [],
    logicalType: null
  },
  {
    uuid: null,
    name: null,
    type: EntityType.STRING,
    fields: [],
    itemType: null,
    options: [],
    logicalType: null
  },
  {
    uuid: null,
    name: null,
    type: EntityType.NUMBER,
    fields: [],
    itemType: null,
    options: [],
    logicalType: null
  },
  {
    uuid: null,
    name: null,
    type: EntityType.DECIMAL,
    fields: [],
    itemType: null,
    options: [],
    logicalType: null
  },
  {
    uuid: null,
    name: null,
    type: EntityType.BOOLEAN,
    fields: [],
    itemType: null,
    options: [],
    logicalType: null
  },
  {
    uuid: null,
    name: null,
    type: EntityType.DATE,
    fields: [],
    itemType: null,
    options: [],
    logicalType: null
  }
];
