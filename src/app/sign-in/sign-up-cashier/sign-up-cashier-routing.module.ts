import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpCashierPage } from './sign-up-cashier.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpCashierPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpCashierPageRoutingModule {}
