import { Input, OnInit, Output, EventEmitter, Component, Inject, OnDestroy, ViewChildren, QueryList } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import { MatCheckbox } from "@angular/material/checkbox";
import { Subscription } from "rxjs";
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: "entity-builder-widget",
  templateUrl: "./entity-builder-component.html",
  styleUrls: ["./entity-builder-component.css"]
})
export class EntityBuilderComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  @Output() schemaChange = new EventEmitter<any>();
  @Input() data: any;
  @Input() cfDefinition: {
    transformer: {
      type: string;
      fields: any[];
      separator: string;
    };
    entity: string;
  } = {
    transformer: {
      type: "path",
      fields: [],
      separator: " "
    },
    entity: ""
  };

  ngOnInit() {
    try {
      if (this.cfDefinition.entity) {
        let entity = entities.find(item => item.displayValue == this.cfDefinition.entity);
        let fields: any[] = [];
        this.cfDefinition.transformer.fields.forEach(_ => {
          let f = entity.fields.find(item => item.key == _);
          f.check = true;
          fields.push(f);
        });
        this.cfDefinition.transformer.fields = fields;
        this.openSetting();
      } else {
        this.openSetting();
      }
    } catch (error) {}
  }
  addOption = () => {
    this.data.schema.items.push({ key: "" });
    this.inputChange();
  };
  removeOption = index => {
    this.data.schema.items.splice(index, 1);
    this.inputChange();
  };
  inputChange = () => {
    this.schemaChange.emit(this.data);
  };
  openSetting = () => {
    const d = this.dialog.open(EntitySettingDialogComponent, {
      maxWidth: "100vw",
      maxHeight: "90vh",
      minWidth: "50vw",
      // height: "65vh",
      data: this.cfDefinition
    });

    d.afterClosed().subscribe(res => {
      if (res) {
        this.cfDefinition = res;
      }
    });
  };
}

@Component({
  selector: "entity-setting-dialog",
  templateUrl: "./entity-setting-dialog-component.html",
  styleUrls: ["./entity-builder-component.css"],
  animations: [trigger("fadeIn", [transition(":enter", [style({ opacity: "0" }), animate(".5s ease-out", style({ opacity: "1" }))])])]
})
export class EntitySettingDialogComponent implements OnDestroy {
  subscription$: Subscription = new Subscription();
  entities: any[] = entities;
  selectedEntity: any = null;
  step = 1;
  separetors = ["*", "#", "$", "&", "|", " "];
  cfDefinition: {
    transformer: {
      type: string;
      fields: any[];
      separator: string;
    };
    entity: string;
  } = {
    transformer: {
      type: "path",
      fields: [],
      separator: " "
    },
    entity: ""
  };
  priview: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private matDialogRef: MatDialogRef<EntitySettingDialogComponent>) {
    this.cfDefinition = data;
    let index = this.entities.findIndex(item => item.displayValue == this.cfDefinition.entity);
    if (index != -1) {
      this.selectedEntity = this.entities[index];
      if (this.cfDefinition.transformer.type == "path-joiner") {
        this.entities[index].fields.forEach(element => {
          if (this.cfDefinition.transformer.fields.find(item => item.key === element.key)) element.check = true;
        });
        this.generatePriview();
      }
    }
  }
  close = () => this.matDialogRef.close();
  selectEntity = entity => {
    if (this.selectedEntity) {
      this.selectedEntity.fields.forEach(element => {
        element.check = false;
      });
    }
    this.selectedEntity = entity;
    this.cfDefinition.transformer.fields = [];
    this.cfDefinition.entity = entity.displayValue;
    this.generatePriview();
  };
  checked(event) {
    this.cfDefinition.transformer.fields = this.selectedEntity.fields.filter(element => element.check);
    this.generatePriview();
  }

  checkAll = event => {
    if (event.checked) {
      this.selectedEntity.fields.forEach(element => {
        element.check = true;
      });
      this.cfDefinition.transformer.fields = this.selectedEntity.fields.slice();
    } else {
      this.cfDefinition.transformer.fields = [];
      this.selectedEntity.fields.forEach(element => {
        element.check = false;
      });
    }
    this.generatePriview();
  };
  save = () => {
    this.matDialogRef.close(this.cfDefinition);
  };
  goBack() {
    this.step = 1;
  }
  next() {
    this.step = 2;
  }
  rearrange = (from, to) => {
    this.cfDefinition.transformer.fields.splice(to, 0, this.cfDefinition.transformer.fields.splice(from, 1)[0]);
    this.generatePriview();
  };
  removeElement = (index: any) => {
    let item = this.cfDefinition.transformer.fields[index];
    this.cfDefinition.transformer.fields.splice(index, 1);
    this.selectedEntity.fields.forEach(element => {
      if (element.key === item.key) {
        element.check = false;
      }
    });
    this.generatePriview();
  };
  toggleValue() {
    this.cfDefinition.transformer.separator = "";
    this.cfDefinition.transformer.fields = [];
    this.selectedEntity.fields.forEach(element => {
      element.check = false;
    });
  }
  generatePriview() {
    this.priview = "";
    let p = this.cfDefinition.transformer.fields.map(item => item.value);
    this.priview = p.join(this.cfDefinition.transformer.separator);
  }
  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }
}
export const entities: any[] = [
  {
    displayValue: "Vehicles",
    fields: [
      {
        key: "vehicleRegistrationNumber",
        value: "Vehicle Registration Number",
        check: false
      },
      {
        key: "vehicleType",
        value: "Vehicle Type",
        check: false
      },
      {
        key: "loadCapacity",
        value: "Vehicle Capacity",
        check: false
      },
      {
        key: "category",
        value: "Vehicle Category",
        check: false
      },
      {
        key: "externalId",
        value: "External Id",
        check: false
      }
    ]
  },
  {
    displayValue: "Drivers",
    fields: [
      {
        key: "name",
        value: "Driver Name",
        check: false
      },
      {
        key: "dlNumber",
        value: "DL Number",
        check: false
      },
      {
        key: "mobileNumber",
        value: "Driver Mobile Number",
        check: false
      },
      {
        key: "externalId",
        value: "External Id",
        check: false
      }
    ]
  },
  {
    displayValue: "Devices",
    fields: [
      {
        key: "imei",
        value: "Imei Number",
        check: false
      },
      {
        key: "manufacturerName",
        value: "Manufacturer Name",
        check: false
      },
      {
        key: "mobileNumber",
        value: "Mobile Number",
        check: false
      },
      {
        key: "externalId",
        value: "External Id",
        check: false
      }
    ]
  },
  {
    displayValue: "Members",
    fields: [
      {
        key: "name",
        value: "Member Name",
        check: false
      },
      {
        key: "mobileNumber",
        value: "Mobile Number",
        check: false
      },
      {
        key: "email",
        value: "Email ID",
        check: false
      },
      {
        key: "externalId",
        value: "External Id",
        check: false
      }
    ]
  },
  {
    displayValue: "Bussiness Partner",
    fields: [
      {
        key: "name",
        value: "Bussiness Partner Name",
        check: false
      },
      {
        key: "type",
        value: "Bussiness Partner Type",
        check: false
      },
      {
        key: "places.name",
        value: "Bussiness Partner City",
        check: false
      },
      {
        key: "group.name",
        value: "Bussiness Partner Group",
        check: false
      },
      {
        key: "externalId",
        value: "External Id",
        check: false
      }
    ]
  },
  {
    displayValue: "Offices",
    fields: [
      {
        key: "name",
        value: "Office Name",
        check: false
      },
      {
        key: "regionName",
        value: "Office Region Name",
        check: false
      },
      {
        key: "zoneName",
        value: "Office Zone Name",
        check: false
      },
      {
        key: "externalId",
        value: "External Id",
        check: false
      }
    ]
  },
  {
    displayValue: "Employee",
    fields: [
      {
        key: "name",
        value: "Employee Name",
        check: false
      },
      {
        key: "mobileNumber",
        value: "Mobile Number",
        check: false
      },
      {
        key: "email",
        value: "Email ID",
        check: false
      },
      {
        key: "designation",
        value: "Designation",
        check: false
      },
      {
        key: "externalId",
        value: "External Id",
        check: false
      }
    ]
  },
  {
    displayValue: "Department",
    fields: [
      {
        key: "name",
        value: "Department Name",
        check: false
      },
      {
        key: "externalId",
        value: "External Id",
        check: false
      }
    ]
  },
  {
    displayValue: "Places",
    fields: [
      {
        key: "name",
        value: "Place Name",
        check: false
      },
      {
        key: "category",
        value: "Place Category",
        check: false
      },
      {
        key: "externalId",
        value: "External Id",
        check: false
      }
    ]
  },
  {
    displayValue: "Hubs",
    fields: [
      {
        key: "name",
        value: "Hub Name",
        check: false
      },
      {
        key: "externalId",
        value: "External Id",
        check: false
      }
    ]
  },
  {
    displayValue: "Issue Tracking",
    fields: [
      {
        key: "issueNo",
        value: "Issue No.",
        check: false
      },
      {
        key: "issueType",
        value: "Issue Type",
        check: false
      },
      {
        key: "status",
        value: "Issue Status",
        check: false
      }
    ]
  }
];
