import { TestBed } from '@angular/core/testing';

import { GetRatiosService } from './get-ratios.service';

describe('GetRatiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetRatiosService = TestBed.get(GetRatiosService);
    expect(service).toBeTruthy();
  });
});
