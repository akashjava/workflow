import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  SimpleChanges
} from "@angular/core";
import { CfDefinition } from "../../../core/models";
import { Observable, fromEvent, Subject, from, of, Subscription } from "rxjs";
import {
  map,
  distinctUntilChanged,
  switchMap,
  debounceTime,
  pluck,
  filter,
  mergeMap
} from "rxjs/operators";
import { SharedService } from "../../shared.service";

@Component({
  selector: "custom-field-editor",
  templateUrl: "./custom-field-editor.component.html",
  styleUrls: ["./custom-field-editor.component.css"]
})
export class CustomFieldEditorComponent implements OnInit {
  @Input() data: CfDefinition;
  @Input() version: boolean;
  @Input() mandateFields: boolean = false;
  @Output() valueChanged: EventEmitter<any> = new EventEmitter();
  @Output() deleteCustomField: EventEmitter<any> = new EventEmitter();

  searchUserSubject$: Subject<string> = new Subject();
  searchRoleSubject$: Subject<string> = new Subject();

  subscriptions$: Subscription = new Subscription();

  users$: Observable<any[]>;
  roles$: Observable<any[]>;

  selectedUsers: { uuid: string; name: string }[] = [];
  selectedRoles: { uuid: string; name: string }[] = [];

  currentTabSelected: number = -1;

  schema: any = {
    schema: {}
  };

  isEdit: boolean;
  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.users$ = this.searchUserSubject$.asObservable().pipe(
      this.mediator,
      switchMap(txt => this.sharedService.getMemebers(txt))
    );
    this.roles$ = this.searchRoleSubject$.asObservable().pipe(
      this.mediator,
      switchMap(txt => this.sharedService.getRoles(txt).pipe(pluck("data")))
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.data && changes.data.currentValue) {
      if (this.data && this.data.cfs) {
        if (this.data.cfDefinition && this.data.cfDefinition.allowedUsers) {
          this.subscriptions$.add(
            from(this.data.cfDefinition.allowedUsers)
              .pipe(
                filter(uuid => !!uuid),
                mergeMap((uuid: string) => this.sharedService.getMember(uuid))
              )
              .subscribe((res: any) => {
                if (res.data) {
                  this.selectedUsers.push({
                    name: res.data.name,
                    uuid: res.data.uuid
                  });
                }
              })
          );
        }

        if (this.data.cfDefinition && this.data.cfDefinition.allowedRoles) {
          this.subscriptions$.add(
            of(this.data.cfDefinition.allowedRoles)
              .pipe(
                switchMap((ids: string[]) => this.sharedService.getRole(ids))
              )
              .subscribe((res: any) => {
                if (res.data) {
                  this.selectedRoles = res.data.map((value: any) => ({
                    name: value.name,
                    uuid: value.uuid
                  }));
                }
              })
          );
        }

        if (!this.data.cfDefinition) {
          this.data["cfDefinition"] = {
            mandotary_on_create: false,
            mandotary_on_resolve: false,
            allowedUsers: [],
            allowedRoles: []
          };
        }
        this.schema.schema = this.data.cfs;
      }
    }
  }

  searchUser(event: any) {
    this.searchUserSubject$.next(event.target.value);
  }

  searchRole(event: any) {
    this.searchRoleSubject$.next(event.target.value);
  }

  removeFormItem() {
    this.deleteCustomField.emit();
  }

  userSelected(user: any) {
    if (!this.data.cfDefinition.allowedUsers) {
      this.data.cfDefinition.allowedUsers = [];
    }

    let index = this.data.cfDefinition.allowedUsers.findIndex(
      (id: string) => user.uuid === id
    );
    if (index === -1) {
      this.data.cfDefinition.allowedUsers = [
        ...this.data.cfDefinition.allowedUsers,
        user.uuid
      ];
      this.selectedUsers = [
        ...this.selectedUsers,
        { uuid: user.uuid, name: user.name }
      ];
    } else {
      this.data.cfDefinition.allowedUsers = this.data.cfDefinition.allowedUsers.filter(
        (id: string) => user.uuid !== id
      );
      this.selectedUsers.splice(index, 1);
    }

    this.valueChanged.emit(this.data);
  }

  removeUser(userId: string) {
    this.data.cfDefinition.allowedUsers = this.data.cfDefinition.allowedUsers.filter(
      (id: string) => userId !== id
    );

    this.selectedUsers = this.selectedUsers.filter(u => u.uuid !== userId);
    this.valueChanged.emit(this.data);
  }

  selectedRole(role: any) {
    if (!this.data.cfDefinition.allowedRoles) {
      this.data.cfDefinition.allowedRoles = [];
    }

    let index = this.data.cfDefinition.allowedRoles.findIndex(
      (id: string) => role.uuid === id
    );
    if (index === -1) {
      this.data.cfDefinition.allowedRoles = [
        ...this.data.cfDefinition.allowedRoles,
        role.uuid
      ];
      this.selectedRoles = [
        ...this.selectedRoles,
        { uuid: role.uuid, name: role.name }
      ];
    } else {
      this.data.cfDefinition.allowedRoles = this.data.cfDefinition.allowedRoles.filter(
        (id: string) => role.uuid !== id
      );
      this.selectedRoles.splice(index, 1);
    }
    this.valueChanged.emit(this.data);
  }

  removeRole(roleId: string) {
    this.data.cfDefinition.allowedRoles = this.data.cfDefinition.allowedRoles.filter(
      (id: string) => roleId !== id
    );

    this.selectedRoles = this.selectedRoles.filter(u => u.uuid !== roleId);
    this.valueChanged.emit(this.data);
  }

  inputChange() {}

  schemaChange(event: any) {
    if (event.schema.required) {
      if (event.schema.accessType == null) {
        event.schema["accessType"] = "_mandatory_create";
      }
    }

    this.data.cfs = event.schema;
    this.valueChanged.emit(this.data);
  }

  changeMandatoryField(data: CfDefinition) {
    if (data.cfs.required) {
      if (data.cfs.accessType == null) {
        data.cfs["accessType"] = "_mandatory_create";
      }
    } else {
      data.cfs.accessType = null;
      this.data.cfDefinition["mandotary_on_create"] = false;
      this.data.cfDefinition["mandotary_on_resolve"] = false;
    }

    if (data.cfs.required && data.cfs.accessType) {
      if (data.cfs.accessType === "_mandatory_create") {
        this.data.cfDefinition["mandotary_on_create"] = true;
        this.data.cfDefinition["mandotary_on_resolve"] = false;
      }

      if (data.cfs.accessType === "_mandatory_resolve") {
        this.data.cfDefinition["mandotary_on_create"] = false;
        this.data.cfDefinition["mandotary_on_resolve"] = true;
      }
    }

    this.valueChanged.emit(data);
  }

  private mediator = (source: Observable<any>): Observable<any> =>
    source.pipe(debounceTime(100), distinctUntilChanged());

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }
}
