import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { AsideComponent } from './aside/aside.component';
import { NavComponent } from './nav/nav.component';
import { ServiceService } from './service.service';;

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    AsideComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
