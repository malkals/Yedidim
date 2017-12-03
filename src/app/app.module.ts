import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { RequestHelpComponent } from './request-help/request-help.component';
import { ProfileComponent } from './profile/profile.component';
import { FirstLoginComponent } from './first-login/first-login.component';



@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LoginComponent,
    RequestHelpComponent,
    ProfileComponent,
    FirstLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
