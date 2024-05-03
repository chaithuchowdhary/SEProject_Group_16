import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RetailerLoginComponent } from './retailer-login.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('RetailerLoginComponent', () => {
  let component: RetailerLoginComponent;
  let fixture: ComponentFixture<RetailerLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetailerLoginComponent ],
      imports : [ HttpClientModule, RouterTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(()=>{
    fixture = TestBed.createComponent(RetailerLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('RetailerLogin Component with activated routing', () => {
    expect(component).toBeTruthy();
  });
});
