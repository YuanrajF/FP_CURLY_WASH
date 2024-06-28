import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LaporanKasPage } from './laporan-kas.page';

describe('LaporanKasPage', () => {
  let component: LaporanKasPage;
  let fixture: ComponentFixture<LaporanKasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LaporanKasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
