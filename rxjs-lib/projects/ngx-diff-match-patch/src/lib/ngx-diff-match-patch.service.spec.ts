import { TestBed } from '@angular/core/testing';

import { NgxDiffMatchPatchService } from './ngx-diff-match-patch.service';

describe('NgxDiffMatchPatchService', () => {
  let service: NgxDiffMatchPatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxDiffMatchPatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
