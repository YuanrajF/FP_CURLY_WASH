import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-laporan',
  templateUrl: './laporan.page.html',
  styleUrls: ['./laporan.page.scss'],
})
export class LaporanPage implements OnInit {

  constructor() { }
  ngOnInit() {
  }

  modalVisible: boolean = false;

  toggleModal() {
    this.modalVisible = !this.modalVisible;
  }

  closeModal() {
    this.modalVisible = false;
  }
}
