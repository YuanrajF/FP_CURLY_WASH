import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-konfirmasi-order',
  templateUrl: './konfirmasi-order.page.html',
  styleUrls: ['./konfirmasi-order.page.scss'],
})
export class KonfirmasiOrderPage implements OnInit {
  customer: { name: string; phone: string; } | null = null;
  order: { duration: number; price: string; discount: string; kilo: number; } | null = null;

  constructor(private router: Router, private dataService: DataServiceService) {}

  ngOnInit() {
    this.customer = this.dataService.getSelectedCustomer();
    this.order = this.dataService.getOrder();
  }

  calculateTotal() {
    if (!this.order) return 0;
    const pricePerKilo = this.dataService.getOrderOptions().pricePerKilo;
    let price = parseFloat(this.order.price.replace(/[^0-9]/g, ''));
    let discount = this.order.discount.replace('%', '');
    let discountAmount = price * (parseInt(discount) / 100);
    let total = (price - discountAmount) + (this.order.kilo * pricePerKilo);
    return total.toLocaleString();
  }

  orderReady() {
    if (!this.customer || !this.order) {
      alert('Customer atau order tidak ditemukan');
      return;
    }

    this.dataService.addOrderToQueue({
      ...this.order,
      customer: this.customer,
      startTime: new Date()
    });
    alert('Pesanan Telah Siap');
    this.router.navigate(['/home']);
  }

  cancelOrder() {
    if (confirm('Batalkan Pesanan?')) {
      this.dataService.clearOrder();
      this.router.navigate(['/home']);
    }
  }
}
