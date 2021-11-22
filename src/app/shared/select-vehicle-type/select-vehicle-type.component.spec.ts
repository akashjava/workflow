import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectVehicleTypeComponent } from './select-vehicle-type.component';

describe('SelectVehicleTypeComponent', () => {
  let component: SelectVehicleTypeComponent;
  let fixture: ComponentFixture<SelectVehicleTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectVehicleTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectVehicleTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
