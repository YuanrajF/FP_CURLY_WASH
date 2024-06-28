import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PengaturanDiskonPageRoutingModule } from './pengaturan-diskon-routing.module';

import { PengaturanDiskonPage } from './pengaturan-diskon.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PengaturanDiskonPageRoutingModule
  ],
  declarations: [PengaturanDiskonPage]
})
export class PengaturanDiskonPageModule {}
