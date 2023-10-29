import { TestBed } from '@angular/core/testing';

import { HolidaysPortalService } from './holidays-portal.service';

describe('HolidaysPortalService', () => {
  let service: HolidaysPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HolidaysPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
