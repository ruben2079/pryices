import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomproductsComponent } from './randomproducts.component';

describe('RandomproductsComponent', () => {
  let component: RandomproductsComponent;
  let fixture: ComponentFixture<RandomproductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RandomproductsComponent]
    });
    fixture = TestBed.createComponent(RandomproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
