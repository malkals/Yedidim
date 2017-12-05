import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-first-login',
  templateUrl: './first-login.component.html',
  styleUrls: ['./first-login.component.css']
})
export class FirstLoginComponent implements OnInit {

  constructor( public router:Router ) {}
  signup() : void
  {
    this.router.navigate(["profile"]);
  }

  ngOnInit() {
  }

}
