import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, LoginRequest } from 'src/app/services/auth';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.scss'],
  standalone: false,
})
export class LoginUiComponent implements OnInit {

  loginData: LoginRequest = {
    email: '',
    password: ''
  };

  loading = false;
  errorMsg = '';
  showPassword = false;

  constructor(private router: Router, private authService: Auth) {

  }

  ngOnInit() { }

  loginpage(): void {
    this.loading = true;
    this.errorMsg = '';
    this.authService.login(this.loginData).subscribe({
      next: (loginRes) => {
        const token = loginRes?.token;

        if (!token) {
          this.errorMsg = 'Invalid credentials';
          this.loading = false;
          return;
        }


        localStorage.setItem('token', token);

        this.authService.validateToken(token).subscribe({
          next: () => {
            this.loading = false;
            this.router.navigate(['/landing-page']);
          },
          error: () => {
            localStorage.removeItem('token');
            this.errorMsg = 'Invalid credentials';
            this.loading = false;
          }
        });
      },
      error: () => {
        this.errorMsg = 'Invalid email or password';
        this.loading = false;
      }
    });
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
  }
  
  goToRegister() {
    this.router.navigate(['/auth/register']);
  }

  // loginpage() {
  //   this.router.navigate(['/landing-page']);
  // }
}

