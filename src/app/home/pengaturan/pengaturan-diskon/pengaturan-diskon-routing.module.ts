import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PengaturanDiskonPage } from './pengaturan-diskon.page';

const routes: Routes = [
  {
    path: '',
    component: PengaturanDiskonPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PengaturanDiskonPageRoutingModule {}
