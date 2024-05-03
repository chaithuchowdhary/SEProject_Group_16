import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetaileraccountComponent } from './retaileraccount.component';
import { HttpClientModule } from '@angular/common/http';

describe('RetaileraccountComponent', () => {
  let component: RetaileraccountComponent;
  let fixture: ComponentFixture<RetaileraccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RetaileraccountComponent],
      imports: [HttpClientModule]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RetaileraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
