import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahPelangganPageRoutingModule } from './tambah-pelanggan-routing.module';

import { TambahPelangganPage } from './tambah-pelanggan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahPelangganPageRoutingModule
  ],
  declarations: [
    TambahPelangganPage
  ]
})
export class TambahPelangganPageModule {}
