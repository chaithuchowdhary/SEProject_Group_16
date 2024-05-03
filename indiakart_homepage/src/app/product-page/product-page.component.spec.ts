import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { ProductPageComponent } from './product-page.component';
import { ShoppingService } from '../shopping.service';
import { CartItem } from '../Models/CartItem';
import { OrderItem } from '../Models/OrderItem';

const mockCartItem: CartItem = {
  id: 1,
  userId: 1,
  orderId: 1,
  quantity: 1,
  productId: 1,
  retailerId: 1,
  stock: 10,
  price: 50,
  image: 'https://example.com/image.jpg',
  brand: 'Brand Name',
  name: 'Product Name',
  description: 'Product Description',
  cost: 50,
  dateAdded: new Date()
};

// Mock data for OrderItem
const mockOrderItem: OrderItem = {
  id: 1,
  userId: 1,
  orderId: 1,
  quantity: 1,
  productId: 1,
  cost: 50,
  dateAdded: new Date()
};

// Mock data for ProductDetails

describe('ProductPageComponent', () => {
  let component: ProductPageComponent;
  let fixture: ComponentFixture<ProductPageComponent>;
  let mockRouter: any;
  let mockActivatedRoute: any;
  let mockShoppingService: any;

  beforeEach(async () => {
    mockRouter = jasmine.createSpyObj('Router', ['navigate']);
    mockActivatedRoute = {
      snapshot: {
        paramMap: {
          get: () => '1' // Simulating the 'id' parameter in the URL
        }
      }
    };
    mockShoppingService = jasmine.createSpyObj('ShoppingService', ['getImg', 'getProductById', 'getCartItems']);

    await TestBed.configureTestingModule({
      declarations: [ProductPageComponent],
      providers: [
        { provide: Router, useValue: mockRouter },
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: ShoppingService, useValue: mockShoppingService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductPageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch product details, images, and cart items on initialization', () => {
    const mockProductDetails = { /* Mock product details */ };
    const mockImages = [{ /* Mock image */ }];
    const mockCartItems = [{ /* Mock cart item */ }];
  
    // Mock service methods
    mockShoppingService.getImg.and.returnValue(of(mockImages));
    mockShoppingService.getProductById.and.returnValue(of(mockProductDetails));
    mockShoppingService.getCartItems.and.returnValue(of(mockCartItems));
  
    // Trigger ngOnInit
    fixture.detectChanges();
  
    // Assertions
    expect(mockShoppingService.getImg).toHaveBeenCalledWith(1); // Simulated 'id' parameter
    expect(mockShoppingService.getProductById).toHaveBeenCalledWith(1); // Simulated 'id' parameter
    expect(mockShoppingService.getCartItems).toHaveBeenCalled();
    expect(component.cartItems).toEqual(jasmine.arrayContaining(mockCartItems)); // Use jasmine.arrayContaining() for array comparison
  });
});
