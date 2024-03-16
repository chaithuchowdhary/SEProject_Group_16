import { TestBed } from '@angular/core/testing';

import { ProductcatService } from './productcat.service';

describe('ProductcatService', () => {
  let service: ProductcatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductcatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
