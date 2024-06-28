import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TambahPesananPage } from './tambah-pesanan.page';

describe('TambahPesananPage', () => {
  let component: TambahPesananPage;
  let fixture: ComponentFixture<TambahPesananPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TambahPesananPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
