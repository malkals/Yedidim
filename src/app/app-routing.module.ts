import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { ProfileComponent } from './profile/profile.component'
import {RequestHelpComponent} from './request-help/request-help.component';
import { VolunteerPageComponent } from './volunteer-page/volunteer-page.component';



const routes: Routes = [
  { path: "", redirectTo: "first-page", pathMatch: "full" },
  { path:'first-page', component: FirstPageComponent },
  { path:'volunteer-page', component: VolunteerPageComponent },
  { path: 'profile' , component: ProfileComponent},
  { path: 'request' , component: RequestHelpComponent},
  

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
