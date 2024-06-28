import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LaporanPageRoutingModule } from './laporan-routing.module';

import { LaporanPage } from './laporan.page';
import { ModalDateComponent } from 'src/app/components/modal-date/modal-date.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LaporanPageRoutingModule
  ],
  declarations: [
      LaporanPage,
      ModalDateComponent
    ]
})
export class LaporanPageModule {}
