import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgForm } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { CheckoutComponent } from './checkout.component';
import { ShoppingService } from '../shopping.service';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let router: Router;
  let shoppingService: ShoppingService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
      imports: [RouterTestingModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: () => '1', // Assuming user ID as '1' for testing
              },
            },
          },
        },
        {
          provide: ShoppingService,
          useValue: {
            getCartItems: () => of([]), // Mocking empty cart items
            getAddress: () => of([]), // Mocking empty addresses
            getCards: () => of([]), // Mocking empty cards
            deleteCartItem: () => of({}), // Mocking successful deletion of cart item
            addAddress: () => of({}), // Mocking successful addition of address
            deleteAddress: () => of({}), // Mocking successful deletion of address
            addCard: () => of({}), // Mocking successful addition of card
            deleteCard: () => of({}), // Mocking successful deletion of card
            addOrder: () => of({}), // Mocking successful order placement
            updateCart: () => of({}), // Mocking successful cart update after order placement
          },
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    shoppingService = TestBed.inject(ShoppingService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize component properties', () => {
    expect(component.cartItems).toEqual([]);
    expect(component.addresses).toEqual([]);
    expect(component.cards).toEqual([]);
    expect(component.selectedAddress).toEqual('');
    expect(component.selectedCard).toEqual('');
    expect(component.isCollapsed).toBeTrue();
    expect(component.isCollapsedCard).toBeTrue();
    expect(component.enteredcvv).toEqual('');
    // Assuming local storage contains valid user data
    expect(component.response).toBeTruthy();
  });

  it('should fetch cart items, addresses, and cards on initialization', () => {
    spyOn(shoppingService, 'getCartItems').and.returnValue(of([]));
    spyOn(shoppingService, 'getAddress').and.returnValue(of([]));
    spyOn(shoppingService, 'getCards').and.returnValue(of([]));

    component.ngOnInit();

    expect(shoppingService.getCartItems).toHaveBeenCalled();
    expect(shoppingService.getAddress).toHaveBeenCalled();
    expect(shoppingService.getCards).toHaveBeenCalled();
  });

  // Add more test cases for other methods and scenarios
});
