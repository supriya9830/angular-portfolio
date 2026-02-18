import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';

export const routes: Routes = [
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: '', redirectTo: 'home', pathMatch: 'full' },
    // { path: 'header', component: HeaderComponent },
    // { path: 'home', component: HomeComponent },
    // { path: 'about', component: AboutComponent },
    // , loadChildren: ()=>import('./about/about.component').then(n => n.AboutComponent) },
    // { path: 'experience', component: ExperienceComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RoutingModule { }