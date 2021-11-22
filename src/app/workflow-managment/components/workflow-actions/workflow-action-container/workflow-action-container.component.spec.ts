import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowActionContainerComponent } from './workflow-action-container.component';

describe('WorkflowActionContainerComponent', () => {
  let component: WorkflowActionContainerComponent;
  let fixture: ComponentFixture<WorkflowActionContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowActionContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowActionContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
