import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router: Router) {}

  goToProjects() {
    this.router.navigate(['/projects']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  downloadCV() {
    window.open('/assets/Supriya_CV.pdf', '_blank');
  }

}
