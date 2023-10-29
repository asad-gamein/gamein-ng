import { TestBed } from '@angular/core/testing';

import { NotepadPortalService } from './notepad-portal.service';

describe('NotepadPortalService', () => {
  let service: NotepadPortalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotepadPortalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
