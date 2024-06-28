import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengaturanAkunPageRoutingModule } from './pengaturan-akun-routing.module';

import { PengaturanAkunPage } from './pengaturan-akun.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengaturanAkunPageRoutingModule
  ],
  declarations: [PengaturanAkunPage]
})
export class PengaturanAkunPageModule {}
