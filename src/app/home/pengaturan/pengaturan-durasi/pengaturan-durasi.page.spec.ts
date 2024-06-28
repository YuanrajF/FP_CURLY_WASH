import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PengaturanDurasiPage } from './pengaturan-durasi.page';

describe('PengaturanDurasiPage', () => {
  let component: PengaturanDurasiPage;
  let fixture: ComponentFixture<PengaturanDurasiPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaturanDurasiPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
