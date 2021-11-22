import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSwitcherComponent } from './org-switcher.component';

describe('OrgSwitcherComponent', () => {
  let component: OrgSwitcherComponent;
  let fixture: ComponentFixture<OrgSwitcherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgSwitcherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
