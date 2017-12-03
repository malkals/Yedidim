import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor( public router:Router ) {
  
  }
    login() : void
    {
      this.router.navigate(["login"]);
    }

   request_help(): void
   {
     this.router.navigate(["request"]);
   }
new_volun(): void{
  this.router.navigate(["first-login"]);
}
   

  ngOnInit() {
  }

}
