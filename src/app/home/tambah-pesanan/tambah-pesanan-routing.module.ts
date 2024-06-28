import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TambahPesananPage } from './tambah-pesanan.page';
import { PilihPesananComponent } from 'src/app/components/pilih-pesanan/pilih-pesanan.component';
import { HomePage } from '../home.page';

const routes: Routes = [
  {
    path: '',
    component: TambahPesananPage
  },  {
    path: 'input-pesanan',
    loadChildren: () => import('./input-pesanan/input-pesanan.module').then( m => m.InputPesananPageModule)
  },
  {
    path: 'pesanan-satuan',
    loadChildren: () => import('./pesanan-satuan/pesanan-satuan.module').then( m => m.PesananSatuanPageModule)
  },
  {
    path: 'konfirmasi-order',
    loadChildren: () => import('./konfirmasi-order/konfirmasi-order.module').then( m => m.KonfirmasiOrderPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TambahPesananPageRoutingModule {}
