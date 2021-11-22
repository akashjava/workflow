import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionConditionComponent } from './action-condition.component';

describe('ActionConditionComponent', () => {
  let component: ActionConditionComponent;
  let fixture: ComponentFixture<ActionConditionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionConditionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionConditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
