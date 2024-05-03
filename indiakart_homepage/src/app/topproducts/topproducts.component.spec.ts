import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopproductsComponent } from './topproducts.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('TopproductsComponent', () => {
  let component: TopproductsComponent;
  let fixture: ComponentFixture<TopproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopproductsComponent ],
      imports : [ HttpClientModule,RouterTestingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Initiate the component and activate the routing module', () => {
    expect(component).toBeTruthy();
  });
});
