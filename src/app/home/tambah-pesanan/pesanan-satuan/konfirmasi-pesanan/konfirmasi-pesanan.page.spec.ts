import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KonfirmasiPesananPage } from './konfirmasi-pesanan.page';

describe('KonfirmasiPesananPage', () => {
  let component: KonfirmasiPesananPage;
  let fixture: ComponentFixture<KonfirmasiPesananPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(KonfirmasiPesananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
