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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengaturanPageRoutingModule {}
