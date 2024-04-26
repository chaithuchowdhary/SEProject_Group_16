import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraccountComponent } from './useraccount.component';

describe('UseraccountComponent', () => {
  let component: UseraccountComponent;
  let fixture: ComponentFixture<UseraccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
