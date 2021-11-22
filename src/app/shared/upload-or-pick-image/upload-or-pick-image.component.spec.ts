import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadOrPickImageComponent } from './upload-or-pick-image.component';

describe('UploadOrPickImageComponent', () => {
  let component: UploadOrPickImageComponent;
  let fixture: ComponentFixture<UploadOrPickImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadOrPickImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadOrPickImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
