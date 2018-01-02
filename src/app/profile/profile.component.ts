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
 public category:string;
 public flag:number;
 types: any[];
 public categories:string[]=new Array();
  lat: number;
  lng: number;
  


  constructor( public router:Router , private afs: AngularFirestore, public firebaseService: FirebaseService, ) {

    this.types = [  {value: 0 , valueToShow: "" },
      {value: "אופקים" , valueToShow: "אופקים" },
    {value: "אור יהודה " , valueToShow: " אור יהודה" },
    {value: "אילת" , valueToShow: "אילת" },
    {value: "אפרת" , valueToShow: "אפרת" },
    {value: " אריאל" , valueToShow: "אריאל " },
    {value: "אשדוד" , valueToShow: "אשדוד" },
    {value: "אשקלון" , valueToShow: "אשקלון" },
    {value: " באר שבע" , valueToShow: "באר שבע " },
    {value: "בית שאן" , valueToShow: "בית שאן" },
    {value: "בית שמש" , valueToShow: "בית שמש" },
    {value: " בני ברק" , valueToShow: "בני ברק " },
    {value: "בת ים" , valueToShow: "בת ים" },
    {value: " גבעת שמואל" , valueToShow: " גבעת שמואל" },
    {value: "גדרה" , valueToShow: "גדרה" },
    {value: "הוד השרון" , valueToShow: "הוד השרון" },
    {value: " הרצליה" , valueToShow: "הרצליה " },
    {value: "חדרה" , valueToShow: "חדרה" },
    {value: "חולון" , valueToShow: "חולון" },
    {value: "חיפה " , valueToShow: "חיפה " },
    {value: "טבריה" , valueToShow: "טבריה" },
    {value: "יבנה" , valueToShow: "יבנה" },
    {value: "ירושלים" , valueToShow: "ירושלים" },
    {value: "אלעד" , valueToShow: "אלעד" }
  
  
  
  ];

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
   this.firebaseService.btn1Submit(this.firstname,this.lastname,this.phone,this.city,this.categories);
    
   }
  
  ngOnInit() {
  }

}
