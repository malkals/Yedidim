import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-ok',
  templateUrl: './ok.component.html',
  styleUrls: ['./ok.component.css']
})
export class OkComponent implements OnInit {

  constructor( public router:Router ) { }
  back()
  {
    this.router.navigate(["volnunteer-page"]);
  }
 
  ngOnInit() {
  }
}
