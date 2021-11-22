import { Component, OnInit, ElementRef, ViewChild, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'define-width',
  templateUrl: './define-width.component.html',
  styleUrls: ['./define-width.component.css']
})
export class DefineWidthComponent implements OnInit {
  widths:number[]=[1,2,3,4,5,6]
  selectedWidth:number=6;
  cWidth:number;
  @ViewChild("cnt", { static: false }) template: ElementRef;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private matDialogRef: MatDialogRef<DefineWidthComponent>
  ) { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    setTimeout(() => {
      this.cWidth=this.template.nativeElement.offsetWidth / 6;
    });
  }
  close = () => this.matDialogRef.close()
  save(){
    this.matDialogRef.close({workflow:this.data,layout:{width:this.selectedWidth,xPosition:null,yPosition:null}})
  }

}
