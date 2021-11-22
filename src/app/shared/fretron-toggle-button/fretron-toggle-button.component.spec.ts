import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FretronToggleButtonComponent } from './fretron-toggle-button.component';

describe('FretronToggleButtonComponent', () => {
  let component: FretronToggleButtonComponent;
  let fixture: ComponentFixture<FretronToggleButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FretronToggleButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FretronToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
