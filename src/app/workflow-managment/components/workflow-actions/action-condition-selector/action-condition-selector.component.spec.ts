import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionConditionSelectorComponent } from './action-condition-selector.component';

describe('ActionConditionSelectorComponent', () => {
  let component: ActionConditionSelectorComponent;
  let fixture: ComponentFixture<ActionConditionSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActionConditionSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionConditionSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
