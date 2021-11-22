import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowEntityEditorComponent } from './workflow-entity-editor.component';

describe('WorkflowEntityEditorComponent', () => {
  let component: WorkflowEntityEditorComponent;
  let fixture: ComponentFixture<WorkflowEntityEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowEntityEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowEntityEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
