import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; // Pastikan impor telah dilakukan

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  username: string = '';
  email: string = '';
  showPassword: boolean = false;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {}

  async login() {
    // Reset error messages
    const errors: string[] = [];

    // Validate username
    if (!this.username || this.username.trim() === '') {
      errors.push('Username is required');
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.email || !emailRegex.test(this.email)) {
      errors.push('Invalid email address');
    }

    // Check for errors
    if (errors.length > 0) {
      // Display errors and prevent navigation
      for (const error of errors) {
        console.error(error);
      }

      // Menampilkan pemberitahuan (alert) dalam bahasa Indonesia
      const alert = await this.alertController.create({
        header: 'Kesalahan',
        message: 'Silakan isi semua kolom dengan benar.',
        buttons: ['OK'],
      });
      await alert.present();

      return;
    }

    // Log the username and email if validation passed
    console.log('Username:', this.username);
    console.log('Email:', this.email);

    // Navigate to the desired route
    this.router.navigateByUrl('/tabs/tab1');
  }
}
