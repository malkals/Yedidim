import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent }  from './login/login.component';
import { ProfileComponent } from './profile/profile.component'
import {RequestHelpComponent} from './request-help/request-help.component';
import { FirstLoginComponent } from './first-login/first-login.component';



const routes: Routes = [
  { path: "", redirectTo: "first-page", pathMatch: "full" },
  { path:'first-page', component: FirstPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile' , component: ProfileComponent},
  { path: 'request' , component: RequestHelpComponent},
  { path: 'first-login' , component: FirstLoginComponent}

];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule { }
