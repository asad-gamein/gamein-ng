import { TestBed } from '@angular/core/testing';

import { MyLeavesPortalService } from './my-leaves-portal.service';

describe('MyLeavesPortalService', () => {
  let service: MyLeavesPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyLeavesPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
