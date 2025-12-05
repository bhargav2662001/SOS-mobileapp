import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone:false,
})
export class RegisterComponent  implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  goTologin() {
    this.router.navigate(['/auth/login-ui']);
  }
  
}
