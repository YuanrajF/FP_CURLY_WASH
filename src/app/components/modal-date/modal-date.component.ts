import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-date',
  templateUrl: './modal-date.component.html',
  styleUrls: ['./modal-date.component.scss'],
})
export class ModalDateComponent implements OnInit {

  @Input() modalVisible: boolean = false;
  @Output() modalClosed = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {}

  closeModal() {
    this.modalClosed.emit();
  }

  submitModal() {
    
    this.closeModal(); 
  }

}
