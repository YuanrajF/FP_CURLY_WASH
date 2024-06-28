import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from '../../../service/data-service.service';

@Component({
  selector: 'app-input-pesanan',
  templateUrl: './input-pesanan.page.html',
  styleUrls: ['./input-pesanan.page.scss'],
})
export class InputPesananPage implements OnInit {
  users: any[] = [];
  orderOptions: any = {};
  showLayananGroup = false;
  showPesananGroup = false;
  showSubmitButton = false;
  order: any = {
    duration: null,
    price: null,
    discount: null,
    parfum: 'yes',
    antarjemput: 'yes',
    catatan: '',
    kilo: ''
  };

  constructor(private router: Router, private dataService: DataServiceService) {}

  ngOnInit() {
    this.users = this.dataService.getCustomers();
    this.orderOptions = this.dataService.getOrderOptions();
  }

  getDurasiLabel(index: number): string {
    return index === 0 ? 'Reguler' : index === 1 ? 'Express' : 'Kilat';
  }

  getLayananLabel(index: number): string {
    return index === 0 ? 'Cuci' : index === 1 ? 'Setrika' : 'Cuci + Setrika';
  }

  onDurasiChange(value: number) {
    this.order.duration = value;
    this.showLayananGroup = true;
  }

  onLayananChange(value: string) {
    this.order.price = value;
    this.showPesananGroup = true;
    this.showSubmitButton = true;
  }

  submitOrder() {
    this.dataService.setOrder(this.order);
    this.router.navigate(['/home/tambah-pesanan/konfirmasi-order']);
  }
}
