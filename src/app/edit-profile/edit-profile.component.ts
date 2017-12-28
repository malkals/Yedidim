import { Component, OnInit } from '@angular/core';
import { Volunteer} from '../models/volunteer.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import {FirebaseService} from '../service/firebase/firebase.service' ;
import { Router } from "@angular/router";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  public firstname:string;
  public lastname:string;
   public phone:number;
   public city:string;
   public exsist:boolean;
   public category:string;
   types: any[];
   type:string;
    categories:string[]=new Array(8);
    i:number;
    lat: number;
    lng: number;
    private itemdoc:AngularFirestoreDocument<any>;


  constructor( public router:Router , private afs: AngularFirestore, public firebaseService: FirebaseService) {
    this.types = [  {value: 0 , valueToShow: "" },
    {value: "ירושלים" , valueToShow: "ירושלים" },
  {value: "תל אביב" , valueToShow: "תל אביב" },
  {value: "חיפה" , valueToShow: "חיפה" }];

 

  this.itemdoc=this.afs.doc("volunteers/" +this.firebaseService.getEmail()); 
  this.itemdoc.valueChanges().subscribe(res=>{
    
    this.firstname=res.firstname;
    this.lastname=res.lastname;
    this.phone=res.phone;
    this.city=res.city;

  
  });


  this.i=0;
   }

   sendCtegory(category):void
   {
     this.category=category;
    

   }

  btnSubmit()
  {
  this.firebaseService.btn1Submit(this.firstname,this.lastname,this.phone,this.category,this.city);
   
  }

  ngOnInit() {
  }

}
