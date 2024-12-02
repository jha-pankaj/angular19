import { TestBed } from '@angular/core/testing';

import { RoutescontrolService } from './routescontrol.service';

describe('RoutescontrolService', () => {
  let service: RoutescontrolService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RoutescontrolService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
