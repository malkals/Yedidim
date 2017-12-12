import { Component, OnInit } from '@angular/core';
import { Volunteer} from '../models/volunteer.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {FirebaseService} from '../service/firebase/firebase.service' ;
import { Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  firstname:string;
  lastname:string;
  phone:string;

  

  newVolunteer: Volunteer;
  city = ['','ירושלים', 'תל-אביב', 'חיפה','נתניה','אשדוד'];
  constructor( public router:Router , private afs: AngularFirestore, public firebaseService: FirebaseService,) {
    
   }
   submit()
   {
     this.newVolunteer= new Volunteer ();
     this.newVolunteer.name = this.firstname;
     this.newVolunteer.lastname=this.lastname;
     this.newVolunteer.phone=this.phone;
     //console.log(this.firstname);
     this.firebaseService.updateProfile(this.newVolunteer);
     this.router.navigate(["first-page"]);
   }



  ngOnInit() {
  }

}
