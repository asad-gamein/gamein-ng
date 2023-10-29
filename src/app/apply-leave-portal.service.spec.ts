import { TestBed } from '@angular/core/testing';

import { ApplyLeavePortalService } from './apply-leave-portal.service';

describe('ApplyLeavePortalService', () => {
  let service: ApplyLeavePortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplyLeavePortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
