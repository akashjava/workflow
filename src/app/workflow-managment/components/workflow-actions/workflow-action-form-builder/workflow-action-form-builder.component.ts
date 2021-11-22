import {
  Component,
  OnInit,
  Inject,
  ViewChild,
  ElementRef,
  AfterViewInit,
  ViewChildren,
  QueryList
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material/dialog";
import { DefineWidthComponent } from "../define-width/define-width.component";
import { WorkflowHelperService } from "../../../services/workflow-helper";
declare var TraverseObjects;

@Component({
  selector: "workflow-action-form-builder",
  templateUrl: "./workflow-action-form-builder.component.html",
  styleUrls: ["./workflow-action-form-builder.component.css"]
})
export class WorkflowActionFormBuilderComponent
  implements OnInit, AfterViewInit {
  formFields: any = [];
  fields: any[] = [];
  cWidth: number;

  @ViewChild("cnt", { static: true }) template: ElementRef;
  @ViewChildren("ftem", { read: ElementRef })
  timeList: QueryList<ElementRef>;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<WorkflowActionFormBuilderComponent>,
    public dialog: MatDialog,
    private helper: WorkflowHelperService
  ) {
    let wo = JSON.parse(JSON.stringify(this.data));
    wo.name = "";
    this.formFields = TraverseObjects.traverseWorkflowFields(wo, "");
  }

  ngOnInit() {}
  ngAfterViewInit() {
    setTimeout(() => {
      this.cWidth = this.template.nativeElement.offsetWidth / 6;
    });
  }
  close = () => this.matDialogRef.close();
  save() {
    this.calculateLayout(this.timeList.toArray());
    let v: any[] = JSON.parse(JSON.stringify(this.fields));
    v.map(item => {
      item.layout.xPosition =
        Math.round(item.layout.xPosition / this.cWidth) <= 0
          ? 0
          : Math.round(item.layout.xPosition / this.cWidth);
      return item;
    });
    this.helper.formLayout$.next(v);
  }
  drag(ev, data: any) {
    let payload = JSON.parse(JSON.stringify(data));
    ev.dataTransfer.setData("data", JSON.stringify(payload));
  }
  allowDrop(ev) {
    ev.preventDefault();
    ev.stopPropagation();
  }

  drop(ev) {
    ev.preventDefault();
    let payload = JSON.parse(ev.dataTransfer.getData("data"));
    // console.log(payload)
    // this.fields.push(payload.workflow)
    this.openWidthDialog(payload.workflow);
    ev.stopPropagation();
  }
  drop2(event, index) {
    // let ele = this.fields[index].layout;
    // console.log(ele)
    // ele.xPosition = ele.xPosition + event.distance.x;
    // ele.yPosition = ele.yPosition + event.distance.y;
    // this.fields[index].layout = ele;
    // console.log(ele)
  }

  openWidthDialog(workflow) {
    const d = this.dialog.open(DefineWidthComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      data: workflow
    });

    d.afterClosed().subscribe(res => {
      if (res) {
        this.fields.push(res);
        // setTimeout(() => {
        //   // this.calculateLayout(this.timeList.toArray());
        // });
      }
    });
  }

  calculateLayout(elements: ElementRef[]) {
    elements.forEach((item, index) => {
      let st: string = item.nativeElement.style.transform;
      let x: number;
      let y: number;
      let ele = this.fields[index].layout;
      if (st) {
        let ar = st.substring(st.indexOf("(") + 1, st.indexOf(")")).split(",");
        x = Number(ar[0].replace("px", ""));
        y = Number(ar[1].replace("px", ""));
        ele.xPosition = item.nativeElement.offsetLeft + x;
        ele.yPosition = item.nativeElement.offsetTop + y;
      } else {
        ele.xPosition = item.nativeElement.offsetLeft;
        ele.yPosition = item.nativeElement.offsetTop;
      }
      this.fields[index].layout = ele;
    });
  }
}
