import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaporanKasPage } from './laporan-kas.page';

const routes: Routes = [
  {
    path: '',
    component: LaporanKasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaporanKasPageRoutingModule {}
