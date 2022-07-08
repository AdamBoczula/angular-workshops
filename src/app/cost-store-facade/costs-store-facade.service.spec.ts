import { TestBed } from '@angular/core/testing';

import { CostsStoreFacadeService } from './costs-store-facade.service';

describe('CostsStoreFacadeService', () => {
  let service: CostsStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostsStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
