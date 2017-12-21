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

public firstname:string;
public lastname:string;
 public phone:number;
 public _city:string;
 public exsist:boolean;
 public category:string;
 types: any[];
 type:string;
  categories:string[]=new Array(8);
  i:number;
  

  newVolunteer: Volunteer;
  //city = ['','ירושלים', 'תל-אביב', 'חיפה','נתניה','אשדוד'];
  constructor( public router:Router , private afs: AngularFirestore, public firebaseService: FirebaseService, ) {

    this.types = [{value: 1 , valueToShow: "צוות סיור" },
    {value: 2 , valueToShow: "רכז אזור" },
    {value: 3 , valueToShow: "מנהל כללי" }];

    this.firstname="";
    this.lastname="";
    this.category="";
    this.phone=null;
    this.i=0;

    


    
    //this._city =this.type[this.types.values].text;
    
   }

   sendCtegory(category):void
   {
     this.category=category;
    

   }
   
   btnSubmit()
   {
   this.firebaseService.btn1Submit(this.firstname,this.lastname,this.phone,this.category);
    
   }
  // submit()
  // {
    
   //  this.newVolunteer= new Volunteer ();
   //  this.newVolunteer.name = this.firstname;
    // this.newVolunteer.lastname=this.lastname;
    // this.newVolunteer.phone=this.phone;
     //console.log(this.firstname);
    // this.firebaseService.updateProfile(this.newVolunteer);
    // this.router.navigate(["first-page"]);
  // }

 // public router:Router , private afs: AngularFirestore, public firebaseService: FirebaseService,

  ngOnInit() {
  }

}
