import { Component, OnInit, AfterViewInit } from '@angular/core';

interface User {
  title: string;
  harga: number;
  quantity: number;
}

interface Customer {
  name: string;
  phone: string;
}

@Component({
  selector: 'app-pesanan-satuan',
  templateUrl: './pesanan-satuan.page.html',
  styleUrls: ['./pesanan-satuan.page.scss'],
})
export class PesananSatuanPage implements OnInit, AfterViewInit {
  searchTerm: string = '';
  users: User[] = [
    { title: 'Baju', harga: 3000, quantity: 0 },
    { title: 'Celana', harga: 4000, quantity: 0 },
    { title: 'Jacket', harga: 6000, quantity: 0 },
    { title: 'Bed Cover Single', harga: 10000, quantity: 0 },
    { title: 'Bed Cover Double', harga: 20000, quantity: 0 },
    { title: 'Sprei Single', harga: 7000, quantity: 0 },
    { title: 'Sprei Double', harga: 12000, quantity: 0 },
  ];
  customer: Customer = { name: 'Adithya', phone: '081234567890' };
  isDetailVisible: boolean = false;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.setUpEventListener();
  }

  increaseItem(user: User) {
    user.quantity++;
  }

  decreaseItem(user: User) {
    if (user.quantity > 0) {
      user.quantity--;
    }
  }

  get totalItems(): number {
    return this.users.reduce((acc, user) => acc + user.quantity, 0);
  }

  get totalPrice(): number {
    return this.users.reduce((acc, user) => acc + user.quantity * user.harga, 0);
  }

  showDetail() {
    this.isDetailVisible = true;
  }

  hideDetail() {
    this.isDetailVisible = false;
  }

  setUpEventListener() {
    const cardDisplayer = document.getElementById('cardDisplay');
    const cardDetail = document.getElementById('cardDetail');
    const btnCancel = document.getElementById('btnCancel');
    const overlayCard = document.getElementById('overlayCard');

    if (cardDisplayer && cardDetail && btnCancel && overlayCard) {
      cardDisplayer.addEventListener('click', () => {
        cardDetail.classList.remove('hidden');
        overlayCard.classList.remove('hidden');
      });
      btnCancel.addEventListener('click', () => {
        cardDetail.classList.add('hidden');
        overlayCard.classList.add('hidden');
      });
    }
  }
}
