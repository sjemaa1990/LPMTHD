import { TestBed } from '@angular/core/testing';

import { EligibiliteByNdiService } from './eligibilite-by-ndi.service';

describe('EligibiliteByNdiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EligibiliteByNdiService = TestBed.get(EligibiliteByNdiService);
    expect(service).toBeTruthy();
  });
});
