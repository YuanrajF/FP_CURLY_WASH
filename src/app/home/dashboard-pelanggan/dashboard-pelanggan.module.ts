import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPelangganPageRoutingModule } from './dashboard-pelanggan-routing.module';

import { DashboardPelangganPage } from './dashboard-pelanggan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPelangganPageRoutingModule
  ],
  declarations: [
    DashboardPelangganPage
  ]
})
export class DashboardPelangganPageModule {}
