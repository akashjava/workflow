import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkflowPriviewComponent } from './workflow-priview.component';

describe('WorkflowPriviewComponent', () => {
  let component: WorkflowPriviewComponent;
  let fixture: ComponentFixture<WorkflowPriviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkflowPriviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkflowPriviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
