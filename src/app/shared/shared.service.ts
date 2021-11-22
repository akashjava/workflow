import { Injectable } from "@angular/core";
import { paths } from "../../environments/environment";
import { DomSanitizer } from "@angular/platform-browser";
import { AppService } from "../app.service";
import { Observable, forkJoin, of } from "rxjs";
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { catchError, map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class SharedService {
  constructor(
    private httpClient: HttpClient,
    private _sanitizer: DomSanitizer,
    private appService: AppService
  ) {}

  public getPermission(token: string, moduleName: string) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    });

    return this.httpClient.get(`${paths.AUTHORIZATION_PATH}/roles/v1/role`, {
      headers: headers
    });
  }

  public getModulePermissionDetails(token: string, moduleName) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + token
    });

    return this.httpClient.get(
      `${
        paths.AUTHORIZATION_PATH
      }/domain-permission/v1/permission?module=${encodeURIComponent(
        moduleName
      )}`,
      { headers: headers }
    );
  }

  getMachedString(value, key) {
    let item = value;
    let index = value.toLowerCase().indexOf(key.toLowerCase());
    if (index != -1) {
      let st = value.substring(0, index);
      let nd = value.substring(index, index + key.length);
      let rd = value.substring((st + nd).length, value.length);
      item = `<span>${st}</span><span style="background-color: #BDDEFF;">${nd}</span><span>${rd}</span>`;
    }
    return this._sanitizer.bypassSecurityTrustHtml(item);
  }

  public getUser(uuid: string): Observable<any> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Bearer " + this.appService.getToken()
    });

    return this.httpClient.get(
      `${paths.USER_PATH}/v1/user?key=uuid&value=${uuid}&expandAll=true`,
      { headers: headers }
    );
  }

  public callService(
    methodType: string,
    body: any = null,
    path: string
  ): Observable<any> {
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: "Beaer " + this.appService.getToken()
    });

    if (methodType === "get") {
      return this.httpClient.get(path, { headers: headers });
    }

    if (methodType === "post") {
      return this.httpClient.post(path, body, { headers: headers });
    }

    if (methodType === "put") {
      return this.httpClient.put(path, body, { headers: headers });
    }

    if (methodType === "delete") {
      return this.httpClient.delete(path, { headers: headers });
    }
  }

  public uploadDocument(methodType: string, data: any, path: string) {
    let headers = new HttpHeaders({
      Authorization: "Beaer " + this.appService.getToken()
    });

    if (methodType == "post") {
      return this.httpClient.post(path, data, { headers: headers });
    }
    if (methodType == "get") {
      return this.httpClient.get(path, { headers: headers });
    }
  }

  public uploadService(formData) {
    let headers = new HttpHeaders({
      Authorization: "Beaer " + this.appService.getToken()
    });
    return this.httpClient.post(
      `${paths.DOCUMENT_PATH}/v1/document`,
      formData,
      { headers: headers }
    );
  }

  /** validate device or app code */
  public validateImeiOrAppCode(value: string) {
    return this.callService(
      "get",
      null,
      `${paths.FLEET_MANAGEMENT}/v1/fleet/latest/location/${value}`
    ).pipe(
      catchError(_ =>
        of({ data: null, error: "Unexpected error occured", status: 400 })
      )
    );
  }

  /** check consent  */
  public checkConsent = (mobileNumber: string, resourceId?: string) =>
    forkJoin(
      this.callService(
        "get",
        null,
        `${paths.TPI}/v1/lbs/v2/consent?number=${mobileNumber}&resourceId=${
          resourceId ? resourceId : "shipment-creation"
        }`
      ).pipe(
        catchError(_ =>
          of({ data: null, error: "Failed to  get consent", status: 400 })
        )
      ),
      this.callService(
        "get",
        null,
        `${paths.TPI}/v1/lbs/operator?number=${mobileNumber}&resourceId=shipment-creation`
      ).pipe(
        catchError(_ =>
          of({ data: null, error: "Failed to  get operator", status: 400 })
        )
      )
    ).pipe(
      map((values: any[]) => ({
        data: {
          consent: values[0].data ? values[0].data.consent.toUpperCase() : null,
          operator: values[1].data
            ? values[1].data.operator.toLowerCase()
            : null
        },
        error: values[0].error ? values[0].error : null
      }))
    );

  public searchVehicle = (search: string) => {
    let path = `${paths.V1_VEHICLE_PATH}/v1/vehicles/accessible/page?limit=10`;

    if (search) {
      path = `${path}&searchKey=${encodeURIComponent(search)}`;
    }

    return this.callService("get", null, path).pipe(
      catchError(_ =>
        of({ data: [], error: "Failed to  get operator", status: 400 })
      )
    );
  };

  public getVehicleDetail(vehicleId: string) {
    return this.callService(
      "get",
      null,
      `${paths.FLEET_MANAGEMENT}/v1/fleet/${vehicleId}`
    ).pipe(
      catchError(_ =>
        of({ data: null, error: "Failed to get vehicle detail", status: 400 })
      )
    );
  }

  public getOrganisationDetail(uuid: string) {
    return this.callService(
      "get",
      null,
      `${paths.ORGANIATION_PATH}/v1/organisation?key=uuid&value=${uuid}&expandAll=true`
    ).pipe(
      catchError(_ =>
        of({ data: null, error: "Something went wrong", status: 400 })
      )
    );
  }

  public getMemebers(search: string) {
    return this.callService(
      "get",
      null,
      `${paths.SHIPMENT_VIEW}/user/search?search=${encodeURIComponent(
        search
      )}&limit=10`
    ).pipe(catchError(_ => of([])));
  }

  public getRoles(search: string) {
    let path = `${paths.AUTHORIZATION_PATH}/roles/v1/roles/page?limit=50&offset=0&isCount=false`;
    if (search) {
      path = `${path}&searchKey=${encodeURIComponent(search)}`;
    }
    return this.callService("get", null, path).pipe(
      catchError(_ => of({ data: [] }))
    );
  }

  public getMember(uuid: string) {
    return this.callService(
      "get",
      null,
      `${paths.ORGANIATION_PATH}/v1/member/${uuid}`
    );
  }

  public getRole(uuids: string[]) {
    return this.callService(
      "get",
      null,
      `${paths.AUTHORIZATION_PATH}/roles/v1/roles?values=${uuids}&key=uuid`
    );
  }

  public getDefinitations() {
    return [
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
  }
}
