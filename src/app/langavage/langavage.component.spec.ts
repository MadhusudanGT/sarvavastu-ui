import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangavageComponent } from './langavage.component';

describe('LangavageComponent', () => {
  let component: LangavageComponent;
  let fixture: ComponentFixture<LangavageComponent>;

  beforeEach(async(() => {
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
