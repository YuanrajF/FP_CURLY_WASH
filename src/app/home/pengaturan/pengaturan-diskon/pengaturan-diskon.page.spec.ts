import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PengaturanDiskonPage } from './pengaturan-diskon.page';

describe('PengaturanDiskonPage', () => {
  let component: PengaturanDiskonPage;
  let fixture: ComponentFixture<PengaturanDiskonPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PengaturanDiskonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
