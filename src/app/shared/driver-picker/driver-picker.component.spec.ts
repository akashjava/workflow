import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverPickerComponent } from './driver-picker.component';

describe('MembersPickerComponent', () => {
  let component: DriverPickerComponent;
  let fixture: ComponentFixture<DriverPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
