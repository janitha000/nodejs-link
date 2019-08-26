import { TestBed } from '@angular/core/testing';

import { AirbnbService } from './airbnb.service';

describe('AirbnbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AirbnbService = TestBed.get(AirbnbService);
    expect(service).toBeTruthy();
  });
});
