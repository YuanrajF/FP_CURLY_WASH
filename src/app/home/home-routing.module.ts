import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { LoginPage } from '../login/login.page';
import { SignInPage } from '../sign-in/sign-in.page';
import { TambahPelangganPage } from './tambah-pelanggan/tambah-pelanggan.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'tambah-pelanggan',
    loadChildren: () => import('./tambah-pelanggan/tambah-pelanggan.module').then( m => m.TambahPelangganPageModule)
  },
  {
    path: 'tambah-pesanan',
    loadChildren: () => import('./tambah-pesanan/tambah-pesanan.module').then( m => m.TambahPesananPageModule)
  },
  {
    path: 'pesanan',
    loadChildren: () => import('./pesanan/pesanan.module').then( m => m.PesananPageModule)
  },
  {
    path: 'laporan',
    loadChildren: () => import('./laporan/laporan.module').then( m => m.LaporanPageModule)
  },
  {
    path: 'pengaturan',
    loadChildren: () => import('./pengaturan/pengaturan.module').then( m => m.PengaturanPageModule)
  },
  {
    path: 'dashboard-pelanggan',
    loadChildren: () => import('./dashboard-pelanggan/dashboard-pelanggan.module').then( m => m.DashboardPelangganPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
