import {
  Component,
  OnInit,
  Inject,
  ViewChildren,
  QueryList,
  ElementRef,
  ViewChild,
  AfterViewInit
} from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { WorkflowHelperService } from '../../services/workflow-helper';

@Component({
  selector: "workflow-layout",
  templateUrl: "./workflow-layout.component.html",
  styleUrls: ["./workflow-layout.component.css"]
})
export class WorkflowLayoutComponent implements OnInit, AfterViewInit {
  items = [];
  text = JSON.stringify(this.items);
  @ViewChild("pdiv", { static: false }) template: ElementRef;
  editor: boolean = false;
  totalWidth: number = null;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<WorkflowLayoutComponent>,
    private helper:WorkflowHelperService
  ) {}

  ngOnInit() {
    this.helper.formLayout$.subscribe(res=>{
      this.items=res
      this.text = JSON.stringify(this.items,null,4)
    })
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.totalWidth = this.template.nativeElement.offsetWidth / 6;
    });
  }
  close = () => this.matDialogRef.close();
  refresh = () => {
    this.totalWidth = this.template.nativeElement.offsetWidth / 6;
    this.items = JSON.parse(this.text);
  };
}
