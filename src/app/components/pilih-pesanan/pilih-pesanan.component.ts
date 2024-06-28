import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataServiceService } from 'src/app/service/data-service.service';

@Component({
  selector: 'app-pilih-pesanan',
  templateUrl: './pilih-pesanan.component.html',
  styleUrls: ['./pilih-pesanan.component.scss'],
})
export class PilihPesananComponent implements OnInit, AfterViewInit {
  customer: any[] = [];
  filteredCustomers: any[] = [];
  searchTerm: string = '';

  constructor(private router: Router, private dataService: DataServiceService) {}

  ngOnInit() {
    this.customer = this.dataService.getCustomers();
    this.filteredCustomers = this.customer;
  }

  filterCustomers() {
    this.filteredCustomers = this.customer.filter((customer: any) =>
      customer.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  selectCustomer(customer: any) {
    this.dataService.setSelectedCustomer(customer);
    this.router.navigate([`/home/tambah-pesanan/${this.selectedRoute}`]);
  }

  ngAfterViewInit() {
    this.setupEventListeners();
  }

  selectedRoute: string = 'input-pesanan';

  setupEventListeners() {
    const kiloan = document.getElementById('kiloan');
    const satuan = document.getElementById('satuan');
    const pilihPelanggan = document.getElementById('chooseCust');
    const backButton = document.getElementById('backButton');

    if (kiloan) {
      kiloan.addEventListener('click', () => {
        if (pilihPelanggan) {
          pilihPelanggan.classList.remove('hidden');
        }
        this.selectedRoute = 'input-pesanan';
      });
    }

    if (satuan) {
      satuan.addEventListener('click', () => {
        if (pilihPelanggan) {
          pilihPelanggan.classList.remove('hidden');
        }
        this.selectedRoute = 'pesanan-satuan';
      });
    }

    if (backButton) {
      backButton.addEventListener('click', () => {
        if (pilihPelanggan) {
          pilihPelanggan.classList.add('hidden');
        }
      });
    }
  }
}
