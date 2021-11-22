import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Subscription, Subject } from 'rxjs';
import { SharedService } from '../shared.service';
import { paths } from '../../../environments/environment';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'pick-transporter',
  templateUrl: './pick-transporter.component.html',
  styleUrls: ['./pick-transporter.component.css']
})
export class PickTransporterComponent implements OnInit,OnDestroy {
  @Input() route:string=''
  @Input() payload:{origin:string,destination:string}={origin:'',destination:''}
  @Input() multiple:boolean=false;
  @Input() selectedVendors:any[]=[]
  @Input() set vehicleTypes(data:any){
    this._vehicleTypes=data;
    this.getVendors()
  }
  _vehicleTypes:any[]=[]
  @Input() vandorBy:string="all";
  @Output() values = new EventEmitter<any>();
  @Output() value = new EventEmitter<any>();

  selectedItem:any=null;
  search:string=''
  searchKey:string=''
  subscription$:Subscription = new Subscription()
  vendors:any[]=[]
  searchEvent$:Subject<any>= new Subject()
  isSpinner:boolean=false;
  copiedVendors:any[]=[]

  constructor(private helper:SharedService) { }

  ngOnInit() {
    this.getVendors()
    this.searchEvent$.pipe(
      debounceTime(100),
      distinctUntilChanged(),
    ).subscribe(text=>{
      this.getVendors()
    })
  }
  getVendors(){
    this.isSpinner=true
    if(this.vandorBy=='all'){
    let path=`${paths.SHIPMENT_VIEW}/bpartners/partners?filters=${encodeURIComponent(JSON.stringify({"type.keyword": ['vendor']}))}`
    if (this.searchKey) {
      path = `${path}&search=${encodeURIComponent(this.searchKey)}`;
    }
      this.subscription$.add(
        this.helper.callService("get", null,path).subscribe(
          res=>{
            this.isSpinner=false;
            this.vendors= res;
          }
        )
      )
    }
    if(this.vandorBy=='vandors on this lane'){
      let path=`${paths.SHIPMENT_VIEW}/bpartners/partners/route?route=${this.route}&origin=${this.payload.origin}&destination=${this.payload.destination}&vehicleTypes=${encodeURIComponent( JSON.stringify(this._vehicleTypes))}`
      this.subscription$.add(
        this.helper.callService("get", null,path).subscribe(
          res=>{
            this.isSpinner=false;
            this.vendors= res;
          }
        )
      )
    }

  }
  selectAll = (event) => {
    this.selectedVendors=[];
    if(event.checked){
      this.vendors.forEach(item=>{this.selectedVendors.push(item.uuid)})
    }
    this.values.emit(this.selectedVendors)
  }
  selectVendor = (item) => {
    if(this.multiple){
      let index=this.selectedVendors.findIndex(ele => ele===item.uuid)
      if(index!=-1){
        this.selectedVendors.splice(index,1)
      }
      else{
        this.selectedVendors.push(item.uuid)
      }
      this.values.emit(this.selectedVendors)
    }
    else{
      this.selectedItem=item;
      this.value.emit(item)
    }
    
  }
  searchAll(event){
    this.searchEvent$.next(event.target.value)
  }
  filterPrimary(event){
    if(event.checked){
      this.copiedVendors=[...this.vendors]
      this.vendors=this.copiedVendors.filter(item=>item.isPrimary)
    }
    else{
      this.vendors=[...this.copiedVendors]
    }
  }
  ngOnDestroy(){
    this.searchEvent$.unsubscribe();
    this.subscription$.unsubscribe()
  }

}
