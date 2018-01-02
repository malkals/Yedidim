import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Volunteer} from '../models/volunteer.model';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-ok',
  templateUrl: './ok.component.html',
  styleUrls: ['./ok.component.css']
})
export class OkComponent implements OnInit {

  constructor( public router:Router ) { }
  back():void
  {
    this.router.navigate(["volnunteer-page"]);
  }
 
  ngOnInit() {
  }
}
