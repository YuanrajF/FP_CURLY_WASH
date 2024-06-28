import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PesananSatuanPage } from './pesanan-satuan.page';

describe('PesananSatuanPage', () => {
  let component: PesananSatuanPage;
  let fixture: ComponentFixture<PesananSatuanPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PesananSatuanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
