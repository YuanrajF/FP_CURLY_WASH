import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-pelanggan',
  templateUrl: './dashboard-pelanggan.page.html',
  styleUrls: ['./dashboard-pelanggan.page.scss'],
})
export class DashboardPelangganPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit() {
    this.setUpEventListener();
  }

  setUpEventListener() {
    const overlayModal = document.querySelector('.overlayModal');
    const modalWhatsapp = document.querySelector('.modal-whatsapp');
    const modalClose = document.querySelector('.btn-cancel');
    const btnWhatsapp = document.getElementById('btnWhatsapp');

    if (overlayModal && modalWhatsapp && modalClose && btnWhatsapp) {
      btnWhatsapp.addEventListener('click', () => {
        overlayModal.classList.remove('hidden');
        modalWhatsapp.classList.remove('hidden');
      });
      modalClose.addEventListener('click', () => {
        overlayModal.classList.add('hidden');
        modalWhatsapp.classList.add('hidden');
      });
    }
  }
}
