import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KonfirmasiOrderPage } from './konfirmasi-order.page';

const routes: Routes = [
  {
    path: '',
    component: KonfirmasiOrderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KonfirmasiOrderPageRoutingModule {}
