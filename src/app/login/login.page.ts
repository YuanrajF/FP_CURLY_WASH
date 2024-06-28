import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';

  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';

  constructor(private router: Router, private toastController: ToastController) { }

  ngOnInit() { }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'top'
    });
    toast.present();
  }
  onSubmit() {
    const adminCredentials = { email: 'admin@example.com', password: 'admin123' };
    const userCredentials = { email: 'user@example.com', password: 'user123' };

    if (this.email === adminCredentials.email && this.password === adminCredentials.password) {
      this.router.navigate(['/home']);
    } else if (this.email === userCredentials.email && this.password === userCredentials.password) {
      this.router.navigate(['/home/dashboard-pelanggan']);
    } else {
      this.presentToast('email atau password salah');
    }
  }

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
    this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
  }
}
