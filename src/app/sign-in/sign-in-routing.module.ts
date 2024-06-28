import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignInPage } from './sign-in.page';
import { LoginPage } from '../login/login.page';

const routes: Routes = [
  {
    path: '',
    component: SignInPage
  },  {
    path: 'sign-up-cashier',
    loadChildren: () => import('./sign-up-cashier/sign-up-cashier.module').then( m => m.SignUpCashierPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignInPageRoutingModule {}
