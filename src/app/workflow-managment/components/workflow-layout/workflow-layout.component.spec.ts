import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowLayoutComponent } from './workflow-layout.component';

describe('WorkflowLayoutComponent', () => {
  let component: WorkflowLayoutComponent;
  let fixture: ComponentFixture<WorkflowLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
