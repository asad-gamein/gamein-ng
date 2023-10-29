import { TestBed } from '@angular/core/testing';

import { LeavePortalService } from './leave-portal.service';

describe('LeavePortalService', () => {
  let service: LeavePortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeavePortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
