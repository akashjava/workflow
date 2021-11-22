import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BooleanWidgetComponent } from './boolean-widget.component';

describe('BooleanWidgetComponent', () => {
  let component: BooleanWidgetComponent;
  let fixture: ComponentFixture<BooleanWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BooleanWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BooleanWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
