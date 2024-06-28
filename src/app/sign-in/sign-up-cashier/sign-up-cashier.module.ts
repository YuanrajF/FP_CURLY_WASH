import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpCashierPageRoutingModule } from './sign-up-cashier-routing.module';

import { SignUpCashierPage } from './sign-up-cashier.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpCashierPageRoutingModule
  ],
  declarations: [SignUpCashierPage]
})
export class SignUpCashierPageModule {}
