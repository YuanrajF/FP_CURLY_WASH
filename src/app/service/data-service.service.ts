import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {
  private customers = [
    { name: 'Adhit', phone: '0812345678' },
    { name: 'ilham', phone: '0812345678' },
    { name: 'yuan', phone: '0812345678' },
    { name: 'Rio', phone: '081233333' },
    { name: 'yudi', phone: '0812344444' },
  ];

  private orderOptions = {
    durations: [72, 24, 6],
    prices: ['10.000', '15.000', '20.000'],
    discounts: ['0', '20%', '50%'],
    pricePerKilo: 10.000
  };

  private ordersInQueue: any[] = [];
  private readyOrders: any[] = [];
  private historyOrders: any[] = [];

  private selectedCustomer: any;
  private order: any;
  private ordersQueue: any[] = [];

  constructor() {}

  getCustomers() {
    return this.customers;
  }

  getOrderOptions() {
    return this.orderOptions;
  }

  setSelectedCustomer(customer: any) {
    this.selectedCustomer = customer;
  }

  getSelectedCustomer() {
    return this.selectedCustomer;
  }

  setOrder(order: { duration: string; price: string; discount: string; parfum: string; antarjemput: string; catatan: string; kilo: number; }) {
    this.order = order;
  }

  getOrder() {
    return this.order;
  }

  clearOrder() {
    this.order = null;
  }

  addOrderToQueue(order: { customer: { name: string; phone: string; } | null; startTime: Date; duration?: number | undefined; price?: string | undefined; discount?: string | undefined; pricePerKilo?: number | undefined; }) {
    this.ordersInQueue.push(order);
  }

  moveToReadyOrders(order: any) {
    this.readyOrders.push(order);
    this.ordersInQueue = this.ordersInQueue.filter(o => o !== order);
  }

  getOrdersInQueue() {
    return this.ordersInQueue;
  }

  getReadyOrders() {
    return this.readyOrders;
  }

  getHistoryOrders() {
    return this.historyOrders;
  }

  addOrderToHistory(order: any) {
    this.historyOrders.push(order);
  }
  removeOrderFromQueue(index: number) {
    this.ordersQueue.splice(index, 1);
  }
  deleteCustomer(index: number) {
    this.customers.splice(index, 1);
  }
}
