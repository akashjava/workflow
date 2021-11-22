import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowActionFormBuilderComponent } from './workflow-action-form-builder.component';

describe('WorkflowActionFormBuilderComponent', () => {
  let component: WorkflowActionFormBuilderComponent;
  let fixture: ComponentFixture<WorkflowActionFormBuilderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowActionFormBuilderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowActionFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
