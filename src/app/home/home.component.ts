import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { RouterLink } from '@angular/router';
import { AboutComponent } from '../about/about.component';
// import { RoutingModule } from '../app.routes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  cvBtn: boolean = false; homeBtn: boolean = true;
  constructor(public router: Router, public activatedRoute: ActivatedRoute) {
  }

}
