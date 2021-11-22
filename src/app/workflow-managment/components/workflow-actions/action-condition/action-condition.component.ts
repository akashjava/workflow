import { Component, ViewChild, OnInit, Input, Output, EventEmitter, AfterViewInit } from "@angular/core";
// import { AlertService } from "../../services/alert.service";
import { Observable, Subscription, fromEvent } from "rxjs";
import { map, switchMap, merge, debounceTime, distinctUntilChanged, tap } from "rxjs/operators";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";

@Component({
  selector: "action-condition",
  templateUrl: "./action-condition.component.html",
  styleUrls: ["./action-condition.component.css", "../../common.css"]
})
export class ActionConditionComponent implements OnInit, AfterViewInit {
  fieldName: string;
  selectedField: Field;
  selctedFieldName: string;

  selectedCondition: string;
  selectedValue: any;
  displaySelectedValue: any;
  firstValueInRange: string;
  secondValueInRange: string;

  @Input() fields: Field[] = [];
  fieldsAfterSearch: Field[] = [];
  subscriptions: Subscription = new Subscription();

  _payloadFromModuleSelector: { selectedEvent: string; selectedModule: string };

  @ViewChild("search", { static: false }) search: any;

  @Input() set payloadFromModuleSelector(payloadFromModuleSelector: { selectedEvent: string; selectedModule: string }) {
    this._payloadFromModuleSelector = payloadFromModuleSelector;
    // if (this._payloadFromModuleSelector && this._payloadFromModuleSelector.selectedModule) {
    //   this.subscriptions.add(
    //     this.alertService
    //       .fetchModuleFields(this._payloadFromModuleSelector.selectedModule)
    //       .pipe(
    //         tap(value => {
    //           setTimeout(() => {
    //             if (this.selectedField) {
    //               this.selectedField = value.find(v => v.fieldName === this.fieldName);
    //               this.selctedFieldName = this.selectedField.fieldName;
    //             }
    //           });
    //         })
    //       )
    //       .subscribe(res => {
    //         this.fields = res;
    //         this.fieldsAfterSearch = [...res];
    //       })
    //   );
    // }
  }

  @Input() set payload(payload: any) {
    if (payload) {
      this.selectedField = { conditionTypes: [payload.conditionTypes], type: payload.type, path: payload.path, key: payload.key };
      this.fieldName = payload.fieldName;
      this.selectedCondition = payload.selectedConditionType;
      this.selectedValue = payload.selectedValue;
      if (this.selectedCondition === "in" || this.selectedCondition === "not in") {
        this.displaySelectedValue = "" + this.selectedValue;
      }

      if (this.selectedCondition === "in range" || this.selectedCondition === "not in range") {
        try {
          this.firstValueInRange = this.selectedValue[0];
          this.secondValueInRange = this.selectedValue[1];
        } catch (error) {}
      }
    }
  }

  @Output() selectGroup: EventEmitter<any> = new EventEmitter();
  suggestedFields$: Observable<string[]>;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {}

  suggest() {
    // this.suggestedFields$ = fromEvent(this.search.nativeElement, "keyup").pipe(
    //   merge(fromEvent(this.search.nativeElement, "click")),
    //   debounceTime(50),
    //   distinctUntilChanged(),
    //   map((e: any) => e.target.value),
    //   switchMap((text: string) => this.alertService.fetchSuggestedFields(this._payloadFromModuleSelector.selectedModule, this.selectedField.fieldKey, text))
    // );
  }

  searchFileds(searchedString: string) {
    this.fieldsAfterSearch = this.fields.filter(value => value.key && value.key.toLowerCase().includes(searchedString.toLowerCase()));
  }

  optionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedField = event.option.value;
    this.selctedFieldName = this.selectedField.key;
  }

  conditionChange() {
    this.selectedValue = null;
    this.displaySelectedValue = null;
  }

  inRange(value: string) {
    if (!this.selectedValue) {
      this.selectedValue = [value];
    } else {
      if (this.selectedValue.includes(value)) {
        this.selectedValue = this.selectedValue.filter(v => v !== value);
      } else {
        this.selectedValue.push(value);
      }
    }

    this.displaySelectedValue = "" + this.selectedValue;
  }

  secondValue(value: string) {
    this.selectedValue = [this.firstValueInRange, value];
  }
}

// interface Field {
//   fieldKey: string;
//   fieldType: string;
//   fieldName: string;
//   conditionTypes: string[];
// }
interface Field {
  key: string;
  type: string;
  path: string;
  conditionTypes: string[];
}
