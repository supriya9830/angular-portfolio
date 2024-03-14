import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
// import {SupriyaMoh}

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  constructor() { }
  showSkills = false; showExperience = true; showEducation = false;

  showContent(event: any) {
    switch (event) {
      case 'skills': this.showSkills = true; this.showEducation = false; this.showExperience = false;
        break;
      case 'experience': this.showExperience = true; this.showSkills = false; this.showEducation = false;
        break;
      case 'education': this.showEducation = true; this.showSkills = false; this.showExperience = false;
        break;
    }
    console.log("hii");
  }
  // dowloadResume() {
  //   // this.http.get('/SupriyaMohan_CV.pdf').subscribe((response: any) => {
  //   //   let value = (response);
  //   //   var blob = new Blob([response], { type: 'application/pdf' });
  //   //   const url = window.URL.createObjectURL(blob);
  //   //   const link = document.createElement('a');
  //   //   link.href = url; link.click();
  //   // })
  //   let data = 'SupriyaMohan_CV.pdf';
  //   const blob = new Blob([data],{ type: 'application/pdf' });
  //   const url = window.URL.createObjectURL(blob);
  //   const link = document.createElement('a');
  //   link.href = url;
  //   link.download = 'SupriyaMohan_CV.pdf';
  //   link.click();
  // }
}
