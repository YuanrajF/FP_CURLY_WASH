import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengaturanAkunPage } from './pengaturan-akun.page';

const routes: Routes = [
  {
    path: '',
    component: PengaturanAkunPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengaturanAkunPageRoutingModule {}
