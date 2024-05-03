import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { OnlineShoppingService } from './productcat.service';

describe('ProductcatService', () => {
  let service: OnlineShoppingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(OnlineShoppingService);
  });

  it('Initialize ProductCat service for fetching products category', () => {
    expect(service).toBeTruthy();
  });
});
