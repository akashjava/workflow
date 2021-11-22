import { Component, OnInit } from "@angular/core";
import {
  WorkflowEntityDefinition,
  workflow as _workflow,
  EntityType,
  LogicalType,
  LogicalTypeDefinations,
  EntityTypeDefinations
} from "../../reducers/workflow-managment.states";
import { MatDialog } from "@angular/material/dialog";
import { WorkflowLayoutComponent } from "../workflow-layout/workflow-layout.component";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "workflow-managment-container",
  templateUrl: "./workflow-managment-container.component.html",
  styleUrls: ["./workflow-managment-container.component.css"]
})
export class WorkflowManagmentContainerComponent implements OnInit {
  workflow: WorkflowEntityDefinition = JSON.parse(
    JSON.stringify({
      uuid: null,
      name: "ship",
      type: "object",
      fields: [
        {
          uuid: null,
          name: "Address",
          type: "object",
          fields: [
            {
              uuid: null,
              name: "Address Line",
              type: "string",
              fields: [],
              itemType: null,
              options: [],
              logicalType: null
            },
            {
              uuid: null,
              name: "City",
              type: "string",
              fields: [],
              itemType: null,
              options: [],
              logicalType: null
            },
            {
              uuid: null,
              name: "State",
              type: "string",
              fields: [],
              itemType: null,
              options: [],
              logicalType: null
            },
            {
              uuid: null,
              name: "Pincode",
              type: "number",
              fields: [],
              itemType: null,
              options: [],
              logicalType: null
            }
          ],
          itemType: null,
          options: [],
          logicalType: "Address"
        },
        {
          uuid: null,
          name: "Checkbox",
          type: "string",
          fields: [],
          itemType: null,
          options: ["First", "Second"],
          logicalType: "Checkbox"
        },
        {
          uuid: null,
          name: "Counter",
          type: "number",
          fields: [],
          itemType: null,
          options: [],
          logicalType: "Counter"
        },
        {
          uuid: null,
          name: "Weight",
          type: "object",
          fields: [
            {
              uuid: null,
              name: "Net Weight",
              type: "number",
              fields: [],
              itemType: null,
              options: [],
              logicalType: null
            },
            {
              uuid: null,
              name: "Unit",
              type: "string",
              fields: [],
              itemType: null,
              options: ["MT", "KG"],
              logicalType: null
            }
          ],
          itemType: null,
          options: [],
          logicalType: "Weight"
        },
        {
          uuid: null,
          name: "Text",
          type: "string",
          fields: [],
          itemType: null,
          options: [],
          logicalType: "Text"
        },
        {
          uuid: null,
          name: "Number",
          type: "number",
          fields: [],
          itemType: null,
          options: [],
          logicalType: "Number"
        },
        {
          uuid: null,
          name: "Contact No",
          type: "number",
          fields: [],
          itemType: null,
          options: [],
          logicalType: "Contact No"
        },
        {
          uuid: null,
          name: "Email",
          type: "string",
          fields: [],
          itemType: null,
          options: [],
          logicalType: "Email"
        },
        {
          uuid: null,
          name: "Date",
          type: "number",
          fields: [],
          itemType: null,
          options: [],
          logicalType: "Date"
        },
        {
          uuid: null,
          name: "Date & Time",
          type: "number",
          fields: [],
          itemType: null,
          options: [],
          logicalType: "Date & Time"
        },
        {
          uuid: null,
          name: "Single Choice",
          type: "string",
          fields: [],
          itemType: null,
          options: ["First", "Second"],
          logicalType: "Single Choice"
        },
        {
          uuid: null,
          name: "Yes/No",
          type: "string",
          fields: [],
          itemType: null,
          options: [],
          logicalType: "Yes/No"
        },
        {
          uuid: null,
          name: "Single Selection",
          type: "string",
          fields: [],
          itemType: null,
          options: ["First", "Second"],
          logicalType: "Drop down (Single Selection)"
        },
        {
          uuid: null,
          name: "Multiple Selection",
          type: "string",
          fields: [],
          itemType: null,
          options: ["First", "Second"],
          logicalType: "Drop down (Multiple Selection)"
        },
        {
          uuid: null,
          name: "Camera",
          type: "object",
          fields: [],
          itemType: null,
          options: [],
          logicalType: "Camera"
        },
        {
          uuid: null,
          name: "fleetInfo",
          type: "object",
          fields: [
            {
              uuid: null,
              name: "vehicle",
              type: "object",
              fields: [
                {
                  uuid: null,
                  name: "loadInfo",
                  type: "object",
                  fields: [
                    {
                      uuid: null,
                      name: "measurmentType",
                      type: "string",
                      fields: [],
                      itemType: null,
                      options: [],
                      logicalType: null
                    },
                    {
                      uuid: null,
                      name: "capacity",
                      type: "number",
                      fields: [],
                      itemType: null,
                      options: [],
                      logicalType: null
                    }
                  ],
                  itemType: null,
                  options: [],
                  logicalType: null
                },
                {
                  uuid: null,
                  name: "vehicleRegistarationNumber",
                  type: "string",
                  fields: [],
                  itemType: null,
                  options: [],
                  logicalType: null
                }
              ],
              itemType: null,
              options: [],
              logicalType: null
            },
            {
              uuid: null,
              name: "driver",
              type: "object",
              fields: [
                {
                  uuid: null,
                  name: "name",
                  type: "string",
                  fields: [],
                  itemType: null,
                  options: [],
                  logicalType: null
                },
                {
                  uuid: null,
                  name: "Address",
                  type: "object",
                  fields: [
                    {
                      uuid: null,
                      name: "Address Line",
                      type: "string",
                      fields: [],
                      itemType: null,
                      options: [],
                      logicalType: null
                    },
                    {
                      uuid: null,
                      name: "City",
                      type: "string",
                      fields: [],
                      itemType: null,
                      options: [],
                      logicalType: null
                    },
                    {
                      uuid: null,
                      name: "State",
                      type: "string",
                      fields: [],
                      itemType: null,
                      options: [],
                      logicalType: null
                    },
                    {
                      uuid: null,
                      name: "Pincode",
                      type: "number",
                      fields: [],
                      itemType: null,
                      options: [],
                      logicalType: null
                    }
                  ],
                  itemType: null,
                  options: [],
                  logicalType: "Address"
                }
              ],
              itemType: null,
              options: [],
              logicalType: null
            }
          ],
          itemType: null,
          options: [],
          logicalType: null
        },
        {
          uuid: null,
          name: "stages",
          type: "array",
          fields: [],
          itemType: {
            uuid: null,
            name: "stage",
            type: "object",
            fields: [
              {
                uuid: null,
                name: "stageId",
                type: "string",
                fields: [],
                itemType: null,
                options: [],
                logicalType: null
              },
              {
                uuid: null,
                name: "place",
                type: "object",
                fields: [
                  {
                    uuid: null,
                    name: "placeId",
                    type: "string",
                    fields: [],
                    itemType: null,
                    options: [],
                    logicalType: null
                  },
                  {
                    uuid: null,
                    name: "name",
                    type: "string",
                    fields: [],
                    itemType: null,
                    options: [],
                    logicalType: null
                  },
                  {
                    uuid: null,
                    name: "Address",
                    type: "object",
                    fields: [
                      {
                        uuid: null,
                        name: "Address Line",
                        type: "string",
                        fields: [],
                        itemType: null,
                        options: [],
                        logicalType: null
                      },
                      {
                        uuid: null,
                        name: "City",
                        type: "string",
                        fields: [],
                        itemType: null,
                        options: [],
                        logicalType: null
                      },
                      {
                        uuid: null,
                        name: "State",
                        type: "string",
                        fields: [],
                        itemType: null,
                        options: [],
                        logicalType: null
                      },
                      {
                        uuid: null,
                        name: "Pincode",
                        type: "number",
                        fields: [],
                        itemType: null,
                        options: [],
                        logicalType: null
                      }
                    ],
                    itemType: null,
                    options: [],
                    logicalType: "Address"
                  }
                ],
                itemType: null,
                options: [],
                logicalType: null
              }
            ],
            itemType: null,
            options: [],
            logicalType: null
          },
          options: [],
          logicalType: null
        }
      ],
      itemType: null,
      options: [],
      logicalType: null
    })
  );
  // workflow: WorkflowEntityDefinition = JSON.parse(JSON.stringify(_workflow));
  text = JSON.stringify(this.workflow, null, 4);
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  showAddField: boolean = false;
  fieldType = {
    EntityType: EntityTypeDefinations,
    LogicalType: LogicalTypeDefinations
  };
  constructor(public dialog: MatDialog) {}

  ngOnInit() {}
  openDialog = () => {
    const d = this.dialog.open(WorkflowLayoutComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      width: "98vw",
      height: "98vh"
      // data: data
    });

    d.afterClosed().subscribe(res => {});
  };
  setJSON = () => {
    this.text = JSON.stringify(this.workflow, null, 4);
  };
  refresh = () => {
    this.workflow = JSON.parse(this.text);
  };
  display = () => {
    console.log(this.workflow);
  };
  drag(ev, data: any) {
    let payload = JSON.parse(JSON.stringify(data));
    ev.dataTransfer.setData("data", JSON.stringify(payload));
  }
}
