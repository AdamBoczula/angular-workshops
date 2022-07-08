import { TestBed } from '@angular/core/testing';

import { CostsStoreService } from './costs-store.service';

describe('CostsStoreService', () => {
  let service: CostsStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostsStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
