import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ProductviewdescriptionComponent } from './productviewdescription.component';

describe('ProductviewdescriptionComponent', () => {
  let component: ProductviewdescriptionComponent;
  let fixture: ComponentFixture<ProductviewdescriptionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductviewdescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductviewdescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
