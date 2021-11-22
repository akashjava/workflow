import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldPickerComponent } from './custom-field-picker.component';

describe('CustomFieldPickerComponent', () => {
  let component: CustomFieldPickerComponent;
  let fixture: ComponentFixture<CustomFieldPickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFieldPickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFieldPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
