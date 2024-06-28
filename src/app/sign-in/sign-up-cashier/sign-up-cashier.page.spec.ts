import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SignUpCashierPage } from './sign-up-cashier.page';

describe('SignUpCashierPage', () => {
  let component: SignUpCashierPage;
  let fixture: ComponentFixture<SignUpCashierPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpCashierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
