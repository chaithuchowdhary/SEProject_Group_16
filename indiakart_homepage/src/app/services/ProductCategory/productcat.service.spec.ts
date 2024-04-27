import { TestBed } from '@angular/core/testing';

import { OnlineShoppingService } from './productcat.service';

describe('ProductcatService', () => {
  let service: OnlineShoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OnlineShoppingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
