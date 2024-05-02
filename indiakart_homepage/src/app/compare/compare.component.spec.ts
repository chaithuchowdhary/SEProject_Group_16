import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CompareComponent } from './compare.component';
import { Observable, of } from 'rxjs';
import { Product } from '../Model/Product';
import { ShoppingService } from '../shopping.service';

describe('CompareComponent', () => {
  let component: CompareComponent;
  let fixture: ComponentFixture<CompareComponent>;
  let shoppingService: ShoppingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompareComponent],
      providers: [
        {
          provide: ShoppingService,
          useValue: {
            getProducts: () => of([]), // Mocking empty product list
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompareComponent);
    component = fixture.componentInstance;
    shoppingService = TestBed.inject(ShoppingService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties', () => {
    expect(component.products).toEqual([]);
    expect(component.selectedProduct1).toEqual(0);
    expect(component.selectedProduct2).toEqual(0);
  });

  it('should fetch products on initialization', () => {
    spyOn(shoppingService, 'getProducts').and.returnValue(of([]));
    component.ngOnInit();
    expect(shoppingService.getProducts).toHaveBeenCalled();
  });
});
