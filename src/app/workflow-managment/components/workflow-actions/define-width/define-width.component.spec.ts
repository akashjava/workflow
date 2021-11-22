import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineWidthComponent } from './define-width.component';

describe('DefineWidthComponent', () => {
  let component: DefineWidthComponent;
  let fixture: ComponentFixture<DefineWidthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefineWidthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefineWidthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
