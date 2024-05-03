import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditretailerComponent } from './editretailer.component';
import { HttpClientModule } from '@angular/common/http';

describe('EditretailerComponent', () => {
  let component: EditretailerComponent;
  let fixture: ComponentFixture<EditretailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditretailerComponent ],
      imports : [ HttpClientModule ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('EditRetailer Component created on ngOnInit', () => {
    expect(component).toBeTruthy();
  });
});
