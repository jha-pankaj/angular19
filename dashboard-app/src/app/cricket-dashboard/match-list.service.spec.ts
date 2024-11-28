import { TestBed } from '@angular/core/testing';

import { MatchListService } from './match-list.service';

describe('MatchListService', () => {
  let service: MatchListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatchListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
