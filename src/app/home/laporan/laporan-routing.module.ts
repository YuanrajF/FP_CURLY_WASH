import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LaporanPage } from './laporan.page';

const routes: Routes = [
  {
    path: '',
    component: LaporanPage
  },  {
    path: 'laporan-kas',
    loadChildren: () => import('./laporan-kas/laporan-kas.module').then( m => m.LaporanKasPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaporanPageRoutingModule {}
