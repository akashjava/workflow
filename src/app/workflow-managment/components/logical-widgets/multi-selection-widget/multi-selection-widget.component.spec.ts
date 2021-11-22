import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiSelectionWidgetComponent } from './multi-selection-widget.component';

describe('MultiSelectionWidgetComponent', () => {
  let component: MultiSelectionWidgetComponent;
  let fixture: ComponentFixture<MultiSelectionWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiSelectionWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiSelectionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
