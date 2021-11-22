import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YesNoWidgetComponent } from './yes-no-widget.component';

describe('YesNoWidgetComponent', () => {
  let component: YesNoWidgetComponent;
  let fixture: ComponentFixture<YesNoWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YesNoWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YesNoWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
