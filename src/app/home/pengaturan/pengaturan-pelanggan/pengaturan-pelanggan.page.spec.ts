import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PengaturanPelangganPage } from './pengaturan-pelanggan.page';

describe('PengaturanPelangganPage', () => {
  let component: PengaturanPelangganPage;
  let fixture: ComponentFixture<PengaturanPelangganPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaturanPelangganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
