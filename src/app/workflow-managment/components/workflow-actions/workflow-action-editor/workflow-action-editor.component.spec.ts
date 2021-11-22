import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowActionEditorComponent } from './workflow-action-editor.component';

describe('WorkflowActionEditorComponent', () => {
  let component: WorkflowActionEditorComponent;
  let fixture: ComponentFixture<WorkflowActionEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowActionEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowActionEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
