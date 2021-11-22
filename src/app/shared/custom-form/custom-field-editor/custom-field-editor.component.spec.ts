import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomFieldEditorComponent } from './custom-field-editor.component';

describe('CustomFieldEditorComponent', () => {
  let component: CustomFieldEditorComponent;
  let fixture: ComponentFixture<CustomFieldEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomFieldEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomFieldEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
