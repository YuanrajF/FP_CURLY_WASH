import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KonfirmasiOrderPage } from './konfirmasi-order.page';

describe('KonfirmasiOrderPage', () => {
  let component: KonfirmasiOrderPage;
  let fixture: ComponentFixture<KonfirmasiOrderPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KonfirmasiOrderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
