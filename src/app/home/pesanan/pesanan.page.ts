import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-pesanan',
  templateUrl: './pesanan.page.html',
  styleUrls: ['./pesanan.page.scss'],
})
export class PesananPage implements OnInit {
  ordersInQueue: any[] = [];
  readyOrders: any[] = [];
  historyOrders: any[] = [];
  filteredOrdersInQueue: any[] = [];
  filteredReadyOrders: any[] = [];
  filteredHistoryOrders: any[] = [];
  searchTerm: string = '';
  activeTab: string = 'antrian';

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.ordersInQueue = this.dataService.getOrdersInQueue();
    this.readyOrders = this.dataService.getReadyOrders();
    this.historyOrders = this.dataService.getHistoryOrders();
    this.filterOrders();
    this.checkOrderStatus();
  }

  setTab(tab: string) {
    this.activeTab = tab;
    this.filterOrders();
  }

  filterOrders() {
    if (this.activeTab === 'antrian') {
      this.filteredOrdersInQueue = this.ordersInQueue.filter(order =>
        order.customer.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        order.startTime.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else if (this.activeTab === 'siapAmbil') {
      this.filteredReadyOrders = this.readyOrders.filter(order =>
        order.customer.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        order.startTime.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else if (this.activeTab === 'riwayat') {
      this.filteredHistoryOrders = this.historyOrders.filter(order =>
        order.customer.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        order.startTime.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
  }

  checkOrderStatus() {
    const now = new Date().getTime();
    this.readyOrders.forEach(order => {
      const orderTime = new Date(order.startTime).getTime();
      const duration = order.duration * 60 * 60 * 1000; // Convert hours to milliseconds
      if (now - orderTime >= duration + 24 * 60 * 60 * 1000) { // 24 hours after ready time
        this.moveToHistory(order);
      }
    });
  }

  moveToHistory(order: any) {
    this.historyOrders.push(order);
    this.readyOrders = this.readyOrders.filter(o => o !== order);
    this.filterOrders();
  }
  removeOrder(index: number) {
    if (confirm('Hapus pesanan ini?')) {
      this.dataService.removeOrderFromQueue(index);
    }
  }
}
