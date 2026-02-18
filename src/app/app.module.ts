import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [BrowserModule, CommonModule, RouterModule],
    declarations: [ ],
    // bootstrap: [AppComponent]
})
export class AppModule { }
bootstrapApplication(AppComponent);