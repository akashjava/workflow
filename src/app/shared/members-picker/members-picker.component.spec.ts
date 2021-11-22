import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersPickerComponent } from './members-picker.component';

describe('MembersPickerComponent', () => {
  let component: MembersPickerComponent;
  let fixture: ComponentFixture<MembersPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MembersPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
