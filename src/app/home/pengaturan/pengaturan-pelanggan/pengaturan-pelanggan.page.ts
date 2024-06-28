import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/data-service.service';
@Component({
  selector: 'app-pengaturan-pelanggan',
  templateUrl: './pengaturan-pelanggan.page.html',
  styleUrls: ['./pengaturan-pelanggan.page.scss'],
})
export class PengaturanPelangganPage implements OnInit{
  users: Array<{ name: string; phone: string }> = [];
  showModal = false;
  userToDeleteIndex: number | null = null;

  constructor(private dataService: DataServiceService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.users = this.dataService.getCustomers();
  }

  confirmDelete(index: number) {
    this.userToDeleteIndex = index;
    this.showModal = true;
  }

  deleteUser() {
    if (this.userToDeleteIndex !== null) {
      this.dataService.deleteCustomer(this.userToDeleteIndex);
      this.loadUsers();  // Refresh the list after deletion
      this.userToDeleteIndex = null;
      this.showModal = false;
    }
  }

  cancelDelete() {
    this.userToDeleteIndex = null;
    this.showModal = false;
  }
}