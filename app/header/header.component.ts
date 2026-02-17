import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { HomeComponent } from '../home/home.component';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from '../contact-me/contact-me.component';
import { ServiceComponent } from '../service/service.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HomeComponent, RouterModule, CommonModule, AboutComponent, ContactMeComponent, ServiceComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(public router: Router) { }
  redirectHome() {
    this.router.navigate(['']);
  }
}
