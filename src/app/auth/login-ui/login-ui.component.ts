import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-ui',
  templateUrl: './login-ui.component.html',
  styleUrls: ['./login-ui.component.scss'],
  standalone: false,
})
export class LoginUiComponent  implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit() {}

  goToRegister() {
    this.router.navigate(['/auth/register']);
  }
  
  login() {
    this.router.navigate(['/landing-page']);
  }
}
