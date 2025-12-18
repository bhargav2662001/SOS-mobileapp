import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss'],
  standalone:false
})
export class LandingPageComponent  implements OnInit {
 username = '';
  fullName = '';
  constructor() { }

  ngOnInit() {
      const token = localStorage.getItem('token');

      if (token) {
        const payload = token.split('.')[1];
        const decoded = JSON.parse(atob(payload));

        // Prefer fullName, fallback to username
        this.fullName = decoded.fullName;
        this.username = decoded.username;
      }
    }
  }
