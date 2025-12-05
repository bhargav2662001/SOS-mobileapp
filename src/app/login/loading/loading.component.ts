import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
  standalone:false
})
export class LoadingComponent implements OnInit {
  @Input() progress: number = 100;
  @Input() redirectUrl: string = '/login-ui';
  currentProgress: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {

    this.animateProgress();
    
  }

  animateProgress() {

    this.currentProgress = 0;


    const totalSteps = 50;
    const stepValue = this.progress / totalSteps;
    const stepDuration = 2000 / totalSteps;


    const interval = setInterval(() => {
      if (this.currentProgress < this.progress) {
        this.currentProgress = Math.min(this.progress, this.currentProgress + stepValue);

        this.currentProgress = Math.round(this.currentProgress);


        if (this.currentProgress >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            this.router.navigate(['/auth/login-ui']);
          }, 300);
        }
      } else {
        clearInterval(interval);
        // Navigate to login-ui after loading completes
        setTimeout(() => {
          this.router.navigate(['/auth/login-ui']);
        }, 300);
      }
    }, stepDuration);
  }
 
}