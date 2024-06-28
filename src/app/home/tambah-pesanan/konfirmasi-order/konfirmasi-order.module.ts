import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KonfirmasiOrderPageRoutingModule } from './konfirmasi-order-routing.module';

import { KonfirmasiOrderPage } from './konfirmasi-order.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KonfirmasiOrderPageRoutingModule
  ],
  declarations: [KonfirmasiOrderPage]
})
export class KonfirmasiOrderPageModule {}
