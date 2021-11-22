import { Component, OnInit, Output, EventEmitter, Input, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { SharedService } from '../shared.service';
import { paths } from '../../../environments/environment';
import { pluck, map, debounceTime, distinctUntilChanged} from 'rxjs/operators';

@Component({
  selector: 'select-vehicle-type',
  templateUrl: './select-vehicle-type.component.html',
  styleUrls: ['./select-vehicle-type.component.css']
})
export class SelectVehicleTypeComponent implements OnInit ,OnDestroy,AfterViewInit{
  subscription$ : Subscription = new Subscription()
  @Output() value = new EventEmitter<any>()
  @Output() values = new EventEmitter<any>()
  selectedValue:any[]=[];
  @Input() multiple:boolean=false;
  @Input() allowedTypes:string[]=[];
  @Input() selected:string[]=[];
  allVehicleTypes:any[]=[]
  displayVehicleTypes:any[]=[]
  text:string=''
  catagories$:Observable<any[]>;
  capacities$:Observable<any[]>
  dimentions$:Observable<any[]>
  catagory:any=null
  capacity:any=null
  dimention:any=null
  searchOb$: Subscription;
  isFirst:boolean=true
  @ViewChild("search" , {static:false}) searchEvent: any; 

  constructor(private service:SharedService) { }

  ngOnInit() {
    this.catagories$=this.service.callService('get',null,`${paths.LOADTYPE_PATH}/v1/suggest/vehicleCategory`).pipe(pluck('data'))
    this.capacities$=this.service.callService('get',null,`${paths.LOADTYPE_PATH}/v1/suggest/passingCapacityMT`).pipe(pluck('data'))
    this.dimentions$=this.service.callService('get',null,`${paths.LOADTYPE_PATH}/v1/suggest/dimensionString`).pipe(pluck('data'))
    this.getAllTypes(this.text)
  }
  ngAfterViewInit(): void {
    try {
      this.searchOb$ = fromEvent(this.searchEvent.nativeElement, "keyup")
        .pipe(
          map((e: any) => e.target.value),
          debounceTime(100),
          distinctUntilChanged(),
        )
        .subscribe(text => {
          this.getAllTypes(text)
        });
    } catch (error) {}
  }
  getAllTypes(search){
    let filter={}
    if(this.catagory)filter['vehicleCategory']=[this.catagory]
    if(this.capacity)filter['passingCapacityMT']=[this.capacity]
    if(this.dimention)filter['dimensionString']=[this.dimention]
    this.subscription$.add(
      this.service.callService('get',null,`${paths.LOADTYPE_PATH}/v1/load-types?search=${search}&filters=${encodeURIComponent(JSON.stringify(filter))}`).subscribe(
        res=>{
          this.allVehicleTypes=res.data;
          this.displayVehicleTypes=res.data;
          if(this.isFirst){
            this.mapSelected()
            this.isFirst=false;
          }
        },
        err=>{}
      )
    )
  }
  mapSelected(){
    if(this.selected){
      this.selectedValue=this.allVehicleTypes.filter(item=>this.selected.includes(item.name))
    }
  }
  select = (event) =>{
    this.selectedValue=[]
    this.selectedValue.push(event)
    this.value.emit(this.selectedValue[0])
  }
  selectedType=(option)=>{
    let index=this.selectedValue.findIndex(item=>item.uuid==option.uuid)
    if(index===-1){
      this.selectedValue.push(option)
    }
    else{
      this.selectedValue.splice(index, 1)
    }
    this.values.emit(this.selectedValue)
  }
  displayFn(value: any[] | any): string | undefined {
    let displayValue: string;
    if(value){
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          if (index === 0) {
            displayValue = item.name;
          } else {
            displayValue += ', ' + item.name;
          }
        });
      return displayValue;
  
      } else if(!Array.isArray(value)) {
        displayValue = value.type;
        return displayValue;
      }
    }
    else displayValue;
  }

  isInclude(config:string):boolean {
    if( this.selectedValue.length==0) return false;
    for (let i = 0; i < this.selectedValue.length; i++) {
      if(this.selectedValue[i]['uuid']==config) return true;
    }
    return false;
  }
  selectAll(event){
    this.selectedValue=[]
    if(event.checked){
      this.displayVehicleTypes.forEach(item=>this.selectedValue.push(item))
    }
    this.values.emit(this.selectedValue)

  }
  ngOnDestroy(){
    this.subscription$.unsubscribe()
  }
}
const array=[
  {type:'Open Body 6 Tyre (19-24FT) - 6 ton', capacity:6},
  {type:'Open Body 6 Tyre (19-24FT) - 7 ton',  capacity:7},
  {type:'Open Body 6 Tyre (19-24FT) - 7.5 ton', capacity:7.5},
  {type:'Open Body 6 Tyre (19-24FT) - 8 ton', capacity:8},
  {type:'Open Body 6 Tyre (19-24FT) - 9 ton', capacity:9},
  {type:'Open Body 6 Tyre (19-24FT) - 10 ton', capacity:10},
  {type:'Open Body 10 Tyre 14 ton',capacity:14},
  {type:'Open Body 10 Tyre 15 ton',capacity:15},
  {type:'Open Body 10 Tyre 16 ton',capacity:16},
  {type:'Open Body 12 tyre 20 ton',capacity:20},
  {type:'Open Body 12 tyre 21 ton',capacity:21},
  {type:'Open Body 12 tyre 22 ton',capacity:22},
  {type:'Open Body 14 tyre 24 ton',capacity:24},
  {type:'Open Body 14 tyre 25 ton',capacity:25},
  {type:'Open Body 14 tyre 26 ton',capacity:26},
  {type:'Open Body 18 tyre 26 ton',capacity:26},
  {type:'Open Body 18 tyre 27 ton',capacity:27},
  {type:'Open Body 18 tyre 28 ton',capacity:28},
  {type:'Open Body 22 tyre 33 ton',capacity:33},
  {type:'Open Body 22 tyre 34 ton',capacity:34},
  {type:'Open Body 22 tyre 35 ton',capacity:35},
  {type:'Open Body Tempo 407 - 1 ton',capacity:1},
  {type:'Open Body Tempo 407 - 1.5 ton',capacity:1.5},
  {type:'Open Body Tempo 407 - 2 ton',capacity:2},
  {type:'Open Body Tempo 407 - 2.5 ton',capacity:2.5},
  {type:'Open Body Tempo 407 - 3 ton',capacity:3},
  {type:'Open Body LCV (14-17 FT) 4 ton',  capacity:4},
  {type:'Open Body LCV (14-17 FT) 4.5 ton',  capacity:4.5},
  {type:'Open Body LCV (14-17 FT) 5 ton',  capacity:5},
  {type:'Open Body LCV (14-17 FT) 5.5 ton',  capacity:5.5},
  {type:'Open Body LCV (14-17 FT) 6 ton',  capacity:6},
  {type:'Container 32 FT MXL - 14 ton',capacity:14},
  {type:'Container 32 FT MXL - 14.5 ton',capacity:14.5},
  {type:'Container 32 FT MXL - 15 ton',capacity:15},
  {type:'Container 32 FT SXL - 6 ton',capacity:6},
  {type:'Container 32 FT SXL - 6.5 ton',capacity:6.5},
  {type:'Container 32 FT SXL - 7 ton',capacity:7},
  {type:'Container SXL (19-22 FT) - 6 ton',  capacity:6},
  {type:'Container SXL (19-22 FT) - 6.5 ton',  capacity:6.5},
  {type:'Container SXL (19-22 FT) - 7 ton',  capacity:7},
  {type:'Container LCV (14-17 FT) - 4 ton',  capacity:4},
  {type:'Container LCV (14-17 FT) - 4.5 ton',  capacity:4.5},
  {type:'Container LCV (14-17 FT) - 5 ton',  capacity:5},
  {type:'Container LCV (14-17 FT) - 5.5 ton',  capacity:5.5},
  {type:'Container LCV (14-17 FT) - 6 ton',  capacity:6},
  {type:'Container 24 FT MXL - 14 ton',capacity:14},
  {type:'Container 24 FT MXL - 14.5 ton',capacity:14.5},
  {type:'Container 24 FT MXL - 15 ton',capacity:15},
  {type:'Container 24 FT SXL - 6 ton',capacity:6},
  {type:'Container 24 FT SXL - 6.5 ton',capacity:6.5},
  {type:'Container 24 FT SXL - 7 ton',capacity:7},
  {type:'Container 32 FT MXL HQ - 14 ton',capacity:14},
  {type:'Container 32 FT MXL HQ - 14.5 ton',capacity:14.5},
  {type:'Container 32 FT MXL HQ - 15 ton',capacity:17},
  {type:'Container 32 FT SXL HQ - 6 ton',capacity:6},
  {type:'Container 32 FT SXL HQ - 6.5 ton',capacity:6.5},
  {type:'Container 32 FT SXL HQ - 7 ton',capacity:7},
  {type:'Container 32 FT XL - 20 ton',capacity:20},
  {type:'Container 32 FT XL - 21 ton',capacity:21},
  {type:'Container 32 FT XL - 20.5 ton',capacity:20.5},
  {type:'Container 32 FT TXL HQ - 20 ton',capacity:20},
  {type:'Container 32 FT TXL HQ - 21 ton',capacity:21},
  {type:'Container 32 FT TXL HQ - 20.5 ton',capacity:20.5},
  {type:'Trailer High Bed - 23 ton',capacity:23},
  {type:'Trailer High Bed - 28 ton',capacity:28},
  {type:'Trailer High Bed - 35 ton',capacity:35},
  {type:'Trailer Low Bed - 23 ton',capacity:23},
  {type:'Trailer Low Bed - 28 ton',capacity:28},
  {type:'Trailer Low Bed - 35 ton',capacity:35},
  {type:'Trailer Semi Bed - 23 ton',capacity:23},
  {type:'Trailer Semi Bed - 28 ton',capacity:28},
  {type:'Trailer Semi Bed - 35 ton',capacity:35}
]

