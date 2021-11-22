import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DecimalWidgetComponent } from './decimal-widget.component';

describe('DecimalWidgetComponent', () => {
  let component: DecimalWidgetComponent;
  let fixture: ComponentFixture<DecimalWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DecimalWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DecimalWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
