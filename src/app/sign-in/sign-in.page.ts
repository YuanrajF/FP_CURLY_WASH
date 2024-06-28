import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage {
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  username: string = '';
  passwordType: string = 'password';
  confirmPasswordType: string = 'password';

  constructor() {}

  togglePasswordVisibility() {
    this.passwordType = this.passwordType === 'password' ? 'text' : 'password';
  }

  toggleConfirmPasswordVisibility() {
    this.confirmPasswordType = this.confirmPasswordType === 'password' ? 'text' : 'password';
  }

  onSubmit() {
    // Handle sign-up logic here
    console.log('No HP:', this.email);
    console.log('Password:', this.password);
    console.log('Confirm Password:', this.confirmPassword);
    console.log('Username:', this.username);
  }

}
