import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengaturanPelangganPageRoutingModule } from './pengaturan-pelanggan-routing.module';

import { PengaturanPelangganPage } from './pengaturan-pelanggan.page';
import { ModalDeleteComponent } from 'src/app/components/modal-delete/modal-delete.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengaturanPelangganPageRoutingModule
  ],
  declarations: [
      PengaturanPelangganPage,
    ModalDeleteComponent
  ]
})
export class PengaturanPelangganPageModule {}
