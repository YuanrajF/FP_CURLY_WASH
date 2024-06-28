import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InputPesananPage } from './input-pesanan.page';
import { TambahPesananPage } from '../tambah-pesanan.page';

const routes: Routes = [
  {
    path: '',
    component: InputPesananPage
  } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InputPesananPageRoutingModule {}
