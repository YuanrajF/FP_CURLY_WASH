import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahPelangganPage } from './tambah-pelanggan.page';

const routes: Routes = [
  {
    path: '',
    component: TambahPelangganPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahPelangganPageRoutingModule {}
