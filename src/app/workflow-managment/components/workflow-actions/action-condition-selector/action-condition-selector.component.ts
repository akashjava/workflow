import { Component, OnInit, Input, ViewChildren, QueryList, Output, EventEmitter } from "@angular/core";
import { WorkflowHelperService } from "../../../services/workflow-helper";
import { ActionConditionComponent } from "../action-condition/action-condition.component";

@Component({
  selector: "action-condition-selector",
  templateUrl: "./action-condition-selector.component.html",
  styleUrls: ["./action-condition-selector.component.css", "../../common.css"]
})
export class ActionConditionSelectorComponent implements OnInit {
  items: string[] = ["AND", "OR"];
  selectedValue: string = "AND";
  iterator: { for: string; payload: any; index: number }[] = [{ for: "condition", payload: null, index: 0 }];
  conditions: any;
  ruleString: string;

  @Input() level: number = 1;
  @Input() payloadFromModuleSelector: any = {};
  @Output() emitRule: EventEmitter<string> = new EventEmitter();
  @Output() emitConditions: EventEmitter<string> = new EventEmitter();
  @Input() set cond(cond: any) {
    if (cond) {
      this.conditions = cond;
      this.furthurActions();
      if (!this.payloadFromModuleSelector) {
        this.payloadFromModuleSelector = {};
      }
      this.selectedValue = this.conditions.selectedConditionType;
      this.conditions.conditions.forEach(c => {
        if (c.type === "bool") {
          this.addGroup(c);
        } else {
          this.addCondition(c);
        }
      });

      this.iterator = this.iterator.slice(1);
    }
  }
  @Input() actionFields:any[]=[]

  @ViewChildren(ActionConditionSelectorComponent) list: QueryList<ActionConditionSelectorComponent>;
  @ViewChildren(ActionConditionComponent) listOfAlertConstions: QueryList<ActionConditionComponent>;

  constructor(private helper: WorkflowHelperService) {}

  ngOnInit() {}

  addCondition(payload) {
    let index = this.iterator[this.iterator.length - 1].index + 1;
    this.iterator.push({ for: "condition", payload: payload, index: index });
  }

  addGroup(payload) {
    let index = this.iterator[this.iterator.length - 1].index + 1;
    this.iterator.push({ for: "group", payload: payload, index: index });
  }

  removeCondition(it: { for: string; index: number }) {
    this.iterator = this.iterator.filter(ite => ite.index !== it.index);
  }

  next() {
    // this.conditions = {
    //   type: "bool",
    //   selectedConditionType: this.selectedValue,
    //   conditions: this.listOfAlertConstions.map((co: ActionConditionComponent) => {
    //     return {
    //       type: co.selectedCondition && co.selectedCondition.includes("range") ? "range" : "term",
    //       fieldKey: co.selectedField.fieldKey,
    //       fieldName: co.selectedField.fieldName,
    //       selectedConditionType: co.selectedCondition,
    //       selectedValue: co.selectedValue
    //     };
    //   })
    // };

    // let nestedCondtions = this.helper.getChildConditions(this.list, []);
    // if (nestedCondtions) {
    //   this.conditions.conditions = this.conditions.conditions.concat(nestedCondtions);
    // }
    // this.helper.currentView$.next("alert-actions");
    // this.furthurActions()
  }

  back() {
    this.helper.currentView$.next("module-selector");
  }

  private furthurActions() {
    this.ruleString = this.helper.convertToString(this.conditions);
    this.emitConditions.emit(this.conditions);
    this.emitRule.emit(this.ruleString);
    console.log(this.conditions)
    console.log(this.ruleString)
  }
}
