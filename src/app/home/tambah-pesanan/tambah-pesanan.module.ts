import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TambahPesananPageRoutingModule } from './tambah-pesanan-routing.module';

import { TambahPesananPage } from './tambah-pesanan.page';
import { PilihPesananComponent } from 'src/app/components/pilih-pesanan/pilih-pesanan.component';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TambahPesananPageRoutingModule
  ],
  declarations: [
    TambahPesananPage, 
    PilihPesananComponent]
})
export class TambahPesananPageModule {}
