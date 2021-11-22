import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleSelectionWidgetComponent } from './single-selection-widget.component';

describe('SingleSelectionWidgetComponent', () => {
  let component: SingleSelectionWidgetComponent;
  let fixture: ComponentFixture<SingleSelectionWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSelectionWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSelectionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
