import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {FirebaseService} from '../service/firebase/firebase.service' ; 
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-first-page',
  templateUrl: './first-page.component.html',
  styleUrls: ['./first-page.component.css']
})
export class FirstPageComponent implements OnInit {

  constructor( public router:Router ,public firebaseService: FirebaseService, afAuth:AngularFireAuth  ) {
  
  }
    login() : void
    {
      this.firebaseService.login().then(user=>
        {
          this.router.navigate(["main-volunteer"]);
        })
    }

   request_help(): void
   {
     this.router.navigate(["request"]);
   }
new_volun(): void{
  this.firebaseService.login().then(user=>
    {
      this.router.navigate(["profile"]);
    })
}
   

  ngOnInit() {
  }

}
