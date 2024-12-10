import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatchListService } from './match-list.service';
import { URLS } from '../app.model';  // Assuming this is defined elsewhere
import { MATCHTYPE } from './match.model';  // Assuming this is defined elsewhere

describe('MatchListService', () => {
  let service: MatchListService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MatchListService]
    });

    service = TestBed.inject(MatchListService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should load match lists', async () => {
    // Mock response data
    const mockResponse = {
      typeMatches: [{ matchId: 1, matchName: 'Match 1' }, { matchId: 2, matchName: 'Match 2' }]
    };

    const type = MATCHTYPE.LIVE;

    // Call the service method to load match lists
    const matches = service.loadMatchLists(type);

    // Ensure the GET request is made with the correct URL and method
    const req = httpMock.expectOne(`${URLS.apiRoot}/matches/v1/${type}`);
    expect(req.request.method).toBe('GET');

    // Simulate a successful response with flush
    req.flush(mockResponse);

    // Await the response to resolve the promise from loadMatchLists
    await matches;

    // Verify that the service returns the expected data
    expect(await matches).toEqual(mockResponse.typeMatches);

    // Verify that there are no outstanding HTTP requests
    httpMock.verify();
  });

  afterEach(() => {
    // Ensure no outstanding requests after each test
    httpMock.verify();
  });
});
