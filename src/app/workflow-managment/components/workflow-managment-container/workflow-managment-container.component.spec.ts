import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowManagmentContainerComponent } from './workflow-managment-container.component';

describe('WorkflowManagmentContainerComponent', () => {
  let component: WorkflowManagmentContainerComponent;
  let fixture: ComponentFixture<WorkflowManagmentContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowManagmentContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowManagmentContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
