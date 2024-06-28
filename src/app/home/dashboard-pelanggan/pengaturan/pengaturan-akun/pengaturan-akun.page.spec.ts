import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PengaturanAkunPage } from './pengaturan-akun.page';

describe('PengaturanAkunPage', () => {
  let component: PengaturanAkunPage;
  let fixture: ComponentFixture<PengaturanAkunPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaturanAkunPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
