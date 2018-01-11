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
   public flag:number;
   types: any[];
   type:string;
   public categories:string[]=new Array();
    lat: number;
    lng: number;
    private itemdoc:AngularFirestoreDocument<any>;


  constructor( public router:Router , private afs: AngularFirestore, public firebaseService: FirebaseService) {
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
 

  this.itemdoc=this.afs.doc("volunteers/" +this.firebaseService.getEmail()); 
  this.itemdoc.valueChanges().subscribe(res=>{
    
    this.firstname=res.firstname;
    this.lastname=res.lastname;
    this.phone=res.phone;
    this.city=res.city;

  
  });


  
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
    if(this.firstname==""||this.lastname==""||this.phone==null)
     {
      document.getElementById("firstname").style.display="none";
      document.getElementById("lastname").style.display="none";
      document.getElementById("phone").style.display="none";

      if(this.firstname=="")
      {
       document.getElementById("firstname").style.display="block";
      }
      if(this.lastname=="")
      {
       document.getElementById("lastname").style.display="block";
      }
      if(this.phone==null)
      {
       document.getElementById("phone").style.display="block";
      }


     }
     
   else
   {

     this.firebaseService.btn1Submit(this.firstname,this.lastname,this.phone,this.city,this.categories);
   }
  }


  a(){
    document.getElementById("a").style.backgroundColor="rgb(131, 88, 172)";
  }
  b(){
   document.getElementById("b").style.backgroundColor="rgb(131, 88, 172)";
 }
 c(){
   document.getElementById("c").style.backgroundColor="rgb(131, 88, 172)";
 }
 d(){
   document.getElementById("d").style.backgroundColor="rgb(131, 88, 172)";
 }
 e(){
   document.getElementById("e").style.backgroundColor="rgb(131, 88, 172)";
 }
f(){
   document.getElementById("f").style.backgroundColor="rgb(131, 88, 172)";
 }
 g(){
   document.getElementById("g").style.backgroundColor="rgb(131, 88, 172)";
 }
 h(){
   document.getElementById("h").style.backgroundColor="rgb(131, 88, 172)";
 }


  ngOnInit() {
  }

}
