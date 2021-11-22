import { TestBed, inject } from '@angular/core/testing';

import { OrgSwitcherService } from './org-switcher.service';

describe('OrgSwitcherService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrgSwitcherService]
    });
  });

  it('should be created', inject([OrgSwitcherService], (service: OrgSwitcherService) => {
    expect(service).toBeTruthy();
  }));
});
