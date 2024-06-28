import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DashboardPelangganPage } from './dashboard-pelanggan.page';

describe('DashboardPelangganPage', () => {
  let component: DashboardPelangganPage;
  let fixture: ComponentFixture<DashboardPelangganPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardPelangganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
