import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightWidgetComponent } from './weight-widget.component';

describe('WeightWidgetComponent', () => {
  let component: WeightWidgetComponent;
  let fixture: ComponentFixture<WeightWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeightWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeightWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
