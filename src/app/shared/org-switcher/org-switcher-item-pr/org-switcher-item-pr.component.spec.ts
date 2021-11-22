import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrgSwitcherItemPrComponent } from './org-switcher-item-pr.component';

describe('OrgSwitcherItemPrComponent', () => {
  let component: OrgSwitcherItemPrComponent;
  let fixture: ComponentFixture<OrgSwitcherItemPrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrgSwitcherItemPrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrgSwitcherItemPrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
