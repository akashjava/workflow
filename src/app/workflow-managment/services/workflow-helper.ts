import { Injectable, QueryList } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { ActionConditionSelectorComponent } from "../components/workflow-actions/action-condition-selector/action-condition-selector.component";
import { ActionConditionComponent } from "../components/workflow-actions/action-condition/action-condition.component";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable()
export class WorkflowHelperService {
  currentView$: BehaviorSubject<string>;
  formLayout$: BehaviorSubject<any[]> = new BehaviorSubject([]);

  constructor(private matSnackBar: MatSnackBar) {
    this.currentView$ = new BehaviorSubject("module-selector");
  }

  openSnackBar(message: string) {
    this.matSnackBar.open(message, "ok", { duration: 5000 });
  }

  getChildConditions(
    list: QueryList<ActionConditionSelectorComponent>,
    conditions: {
      type: string;
      selectedConditionType: any;
      conditions: any[];
    }[]
  ): any {
    if (!list.last) {
      return;
    }

    list.forEach((c: ActionConditionSelectorComponent, index: number) => {
      let con: any[] = [];
      c.listOfAlertConstions.forEach((com: ActionConditionComponent) => {
        con.push({
          type: com.selectedField.type,
          key: com.selectedField.key,
          path: com.selectedField.path,
          selectedConditionType: com.selectedCondition,
          selectedValue: com.selectedValue
        });
      });

      conditions.push({
        type: "bool",
        selectedConditionType: c.selectedValue,
        conditions: con
      });
      this.getChildConditions(c.list, conditions[index].conditions);
    });

    return conditions;
  }

  convertToString(condition): string {
    if (
      condition.selectedConditionType == "AND" ||
      condition.selectedConditionType == "OR"
    ) {
      let childCondString = [];
      condition.conditions.forEach(cond => {
        childCondString.push(this.convertToString(cond));
      });

      return (
        "(" +
        childCondString.join(" " + condition.selectedConditionType + " ") +
        ")"
      );
    }
    return (
      condition.fieldName +
      " " +
      condition.selectedConditionType +
      " " +
      (condition.selectedConditionType &&
      condition.selectedConditionType.includes("exists")
        ? ""
        : condition.selectedValue)
    );
  }
}
