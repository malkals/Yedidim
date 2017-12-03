import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(public ServiceService:ServiceService ) { }

  ngOnInit() {
  }

}
