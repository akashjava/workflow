import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEntityComponent } from './add-edit-entity.component';

describe('AddEditEntityComponent', () => {
  let component: AddEditEntityComponent;
  let fixture: ComponentFixture<AddEditEntityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEntityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
