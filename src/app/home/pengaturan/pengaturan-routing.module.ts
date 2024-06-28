import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengaturanPage } from './pengaturan.page';

const routes: Routes = [
  {
    path: '',
    component: PengaturanPage
  },  {
    path: 'pengaturan-akun',
    loadChildren: () => import('./pengaturan-akun/pengaturan-akun.module').then( m => m.PengaturanAkunPageModule)
  },
  {
    path: 'pengaturan-durasi',
    loadChildren: () => import('./pengaturan-durasi/pengaturan-durasi.module').then( m => m.PengaturanDurasiPageModule)
  },
  {
    path: 'pengaturan-diskon',
    loadChildren: () => import('./pengaturan-diskon/pengaturan-diskon.module').then( m => m.PengaturanDiskonPageModule)
  },
  {
    path: 'pengaturan-pelanggan',
    loadChildren: () => import('./pengaturan-pelanggan/pengaturan-pelanggan.module').then( m => m.PengaturanPelangganPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengaturanPageRoutingModule {}
