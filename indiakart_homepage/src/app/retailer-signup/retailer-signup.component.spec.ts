import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerSignupComponent } from './retailer-signup.component';

describe('RetailerSignupComponent', () => {
  let component: RetailerSignupComponent;
  let fixture: ComponentFixture<RetailerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
