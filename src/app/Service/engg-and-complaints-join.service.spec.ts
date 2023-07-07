import { TestBed } from '@angular/core/testing';

import { EnggAndComplaintsJoinService } from './engg-and-complaints-join.service';

describe('EnggAndComplaintsJoinService', () => {
  let service: EnggAndComplaintsJoinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnggAndComplaintsJoinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
