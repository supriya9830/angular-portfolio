import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']   
})
export class AboutComponent {

  activeTab: 'experience' | 'skills' | 'education' = 'experience';

  constructor() {}

  showContent(tab: 'experience' | 'skills' | 'education') {
    this.activeTab = tab;
  }

  downloadResume() {
    window.open('/assets/SupriyaMohan_Resume.pdf', '_blank');
  }

}
