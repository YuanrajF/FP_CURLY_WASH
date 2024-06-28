import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporanKasPageRoutingModule } from './laporan-kas-routing.module';

import { LaporanKasPage } from './laporan-kas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaporanKasPageRoutingModule
  ],
  declarations: [LaporanKasPage]
})
export class LaporanKasPageModule {}
