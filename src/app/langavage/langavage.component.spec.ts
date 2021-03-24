import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { LangavageComponent } from './langavage.component';

describe('LangavageComponent', () => {
  let component: LangavageComponent;
  let fixture: ComponentFixture<LangavageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ LangavageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangavageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
