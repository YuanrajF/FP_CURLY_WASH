import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesananSatuanPageRoutingModule } from './pesanan-satuan-routing.module';

import { PesananSatuanPage } from './pesanan-satuan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesananSatuanPageRoutingModule
  ],
  declarations: [PesananSatuanPage]
})
export class PesananSatuanPageModule {}
