import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PesananPageRoutingModule } from './pesanan-routing.module';

import { PesananPage } from './pesanan.page';
// import { ModulesModule } from 'src/app/modules/modules.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PesananPageRoutingModule,
    // ModulesModule
  ],
  declarations: [
    PesananPage
  ]
})
export class PesananPageModule {}
