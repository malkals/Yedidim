import { Component } from '@angular/core';
import { ServiceService } from './service.service';
import { NavComponent } from './nav/nav.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(){}
}
