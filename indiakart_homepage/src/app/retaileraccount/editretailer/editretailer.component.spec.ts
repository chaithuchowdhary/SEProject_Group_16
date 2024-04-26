import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditretailerComponent } from './editretailer.component';

describe('EditretailerComponent', () => {
  let component: EditretailerComponent;
  let fixture: ComponentFixture<EditretailerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditretailerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditretailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
