import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetailerSignupComponent } from './retailer-signup.component';
import { HttpClientModule } from '@angular/common/http';

describe('RetailerSignupComponent', () => {
  let component: RetailerSignupComponent;
  let fixture: ComponentFixture<RetailerSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerSignupComponent ],
      imports : [HttpClientModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RetailerSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('RetailerSignupComponent created after redirected to retailersignup', () => {
    expect(component).toBeTruthy();
  });
});
