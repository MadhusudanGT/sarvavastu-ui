import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductViewimageComponent } from './product-viewimage.component';

describe('ProductViewimageComponent', () => {
  let component: ProductViewimageComponent;
  let fixture: ComponentFixture<ProductViewimageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductViewimageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductViewimageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
