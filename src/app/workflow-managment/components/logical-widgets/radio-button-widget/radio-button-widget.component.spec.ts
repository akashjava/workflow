import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonWidgetComponent } from './radio-button-widget.component';

describe('RadioButtonWidgetComponent', () => {
  let component: RadioButtonWidgetComponent;
  let fixture: ComponentFixture<RadioButtonWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadioButtonWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadioButtonWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
