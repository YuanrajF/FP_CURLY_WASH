import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahPelangganPage } from './tambah-pelanggan.page';

describe('TambahPelangganPage', () => {
  let component: TambahPelangganPage;
  let fixture: ComponentFixture<TambahPelangganPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahPelangganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
