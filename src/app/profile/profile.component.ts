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
 public city:string;
 public exsist:boolean;
 public category:string;
 public flag:number;
 types: any[];
 public categories:string[]=new Array();
  lat: number;
  lng: number;
  

  newVolunteer: Volunteer;

  constructor( public router:Router , private afs: AngularFirestore, public firebaseService: FirebaseService, ) {

    this.types = [  {value: 0 , valueToShow: "" },
      {value: "ירושלים" , valueToShow: "ירושלים" },
    {value: "תל אביב" , valueToShow: "תל אביב" },
    {value: "חיפה" , valueToShow: "חיפה" }];

    this.firstname="";
    this.lastname="";
    this.category="";
    this.phone=null;
    

   }

   sendCtegory(category):void
   {
    this.flag=0;
     this.category=category;
    this.categories.forEach(element => {
      if(element==this.category)
      { this.flag=1;
        var index = this.categories.indexOf(element);
        if (index > -1) 
        {
          this.categories.splice(index, 1);
         }
      }
      
       
     });
     if(this.flag==0)
     {
      this.categories.push(category);
     }
    
    
    console.log(this.categories);

   }
   
   btnSubmit()
   {
   this.firebaseService.btn1Submit(this.firstname,this.lastname,this.phone,this.category,this.categories);
    
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
