import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginComponent } from './login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { RequestHelpComponent } from './request-help/request-help.component';
import { ProfileComponent } from './profile/profile.component';

import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import {AngularFirestoreModule } from "angularfire2/firestore";
import {FirebaseService} from './service/firebase/firebase.service' ; 
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyDgF3i3um5QkpvlEB6ZBOYP35OB419fTow",
    authDomain: "yedidim-project.firebaseapp.com",
    databaseURL: "https://yedidim-project.firebaseio.com",
    projectId: "yedidim-project",
    storageBucket: "yedidim-project.appspot.com",
    messagingSenderId: "332505901"
  }
};

@NgModule({
  declarations: [
    AppComponent,
    FirstPageComponent,
    LoginComponent,
    RequestHelpComponent,
    ProfileComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    AngularFirestoreModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
     MatCheckboxModule,
     FormsModule, 
     ReactiveFormsModule,
     

   
  ],
  providers: [
    FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
