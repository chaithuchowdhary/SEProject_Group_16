import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaccountComponent } from './viewaccount.component';

describe('ViewaccountComponent', () => {
  let component: ViewaccountComponent;
  let fixture: ComponentFixture<ViewaccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaccountComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
