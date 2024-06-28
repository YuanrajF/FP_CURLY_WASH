import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengaturanDurasiPage } from './pengaturan-durasi.page';

const routes: Routes = [
  {
    path: '',
    component: PengaturanDurasiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengaturanDurasiPageRoutingModule {}
