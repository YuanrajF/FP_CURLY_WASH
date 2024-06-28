import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PesananSatuanPage } from './pesanan-satuan.page';

const routes: Routes = [
  {
    path: '',
    component: PesananSatuanPage
  },  {
    path: 'konfirmasi-pesanan',
    loadChildren: () => import('./konfirmasi-pesanan/konfirmasi-pesanan.module').then( m => m.KonfirmasiPesananPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PesananSatuanPageRoutingModule {}
