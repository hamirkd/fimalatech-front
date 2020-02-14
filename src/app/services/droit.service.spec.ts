import { TestBed } from '@angular/core/testing';

import { DroitService } from './droit.service';

describe('DroitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DroitService = TestBed.get(DroitService);
    expect(service).toBeTruthy();
  });
});
