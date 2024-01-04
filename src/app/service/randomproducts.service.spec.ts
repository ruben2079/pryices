import { TestBed } from '@angular/core/testing';

import { RandomproductsService } from './randomproducts.service';

describe('RandomprodutsService', () => {
  let service: RandomproductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomproductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
