import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute } from '@angular/router';
import { CarouselComponent } from './carousel.component';
import { ShoppingService } from '../shopping.service';
import { of } from 'rxjs';

describe('CarouselComponent', () => {
  let component: CarouselComponent;
  let fixture: ComponentFixture<CarouselComponent>;
  let shoppingService: jasmine.SpyObj<ShoppingService>;
  let activatedRoute: ActivatedRoute;

  beforeEach(async () => {
    const shoppingServiceSpy = jasmine.createSpyObj('ShoppingService', [
      'getProducts',
    ]);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [CarouselComponent],
      providers: [
        { provide: ShoppingService, useValue: shoppingServiceSpy },
        { provide: ActivatedRoute, useValue: { snapshot: { data: {} } } },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselComponent);
    component = fixture.componentInstance;
    shoppingService = TestBed.inject(
      ShoppingService
    ) as jasmine.SpyObj<ShoppingService>;
    activatedRoute = TestBed.inject(ActivatedRoute);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize images array', () => {
    expect(component.images.length).toBeGreaterThan(0);
  });

  it('should fetch user data from local storage', () => {
    localStorage.setItem('user', JSON.stringify({ username: 'testUser' }));
    fixture.detectChanges();
    expect(component.response.username).toEqual('testUser');
  });

  // it('should call getProducts method on initialization', () => {
  //   shoppingService.getProducts.and.returnValue(of([]));
  //   component.ngOnInit();
  //   expect(shoppingService.getProducts).toHaveBeenCalled();
  // });
});
