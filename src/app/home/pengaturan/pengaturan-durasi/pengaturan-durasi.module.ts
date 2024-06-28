import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengaturanDurasiPageRoutingModule } from './pengaturan-durasi-routing.module';

import { PengaturanDurasiPage } from './pengaturan-durasi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengaturanDurasiPageRoutingModule
  ],
  declarations: [PengaturanDurasiPage]
})
export class PengaturanDurasiPageModule {}
