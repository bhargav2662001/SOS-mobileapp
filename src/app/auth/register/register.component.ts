import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, RegisterRequest } from 'src/app/services/auth';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: false,
})
export class RegisterComponent implements OnInit {

  registerData: RegisterRequest = {
    email: '',
    fullName: '',
    username: '',
    phoneNumber: '',
    password: ''
  };

  loading = false;
  successMsg = '';
  errorMsg = '';

  constructor(private router: Router, private authService: Auth) { }

  ngOnInit() { }
  register(): void {
    this.loading = true;
    this.errorMsg = '';
    this.successMsg = '';

    this.authService.register(this.registerData).subscribe({
      next: (res) => {
        this.successMsg = res?.message || 'Registration successful';
        this.loading = false;

        // Optional auto-redirect to login
        setTimeout(() => {
          this.router.navigate(['/auth/login-ui']);
        }, 1500);
      },
      error: (err) => {
        this.errorMsg = err.error?.message || 'Registration failed';
        this.loading = false;
      }
    });
  }
  goTologin() {
    this.router.navigate(['/auth/login-ui']);
  }

}
