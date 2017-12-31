import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../service/firebase/firebase.service' ;
import { Router } from "@angular/router";
import { Volunteer} from '../models/volunteer.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../message.service';
import { Data } from '@angular/router/src/config';

@Component({
  selector: 'app-request-help',
  templateUrl: './request-help.component.html',
  styleUrls: ['./request-help.component.css']
})
export class RequestHelpComponent implements OnInit {
  
  

  public firstname:string;
  public lastname:string;
   public phone:number;
   public adrress:string;
   public detailsEvent:string;
   public category:string;
 public message:string;
 public city1 :string;
 public date:Date=new Date();
 types: any[];

 


 
  constructor( public router:Router , private afs: AngularFirestore, public firebaseService: FirebaseService,private messageService: MessageService) {
   this.firstname="";
   this.lastname="";
   this.phone=null;
   this.adrress="";
   this.detailsEvent="";
   this.category="";
   this.message="";

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
 {value: "אלעד" , valueToShow: "אלעד" }];
  
  


   }

   sendCtegory(category):void
   {
     this.category=category;
    

   }

   

   format(curr){
    var dd = curr.getDate();
  var mm = curr.getMonth()+1; //January is 0!
  var yyyy =curr.getFullYear();
  var time=curr.getHours();
  if(dd<10){
      dd='0'+dd;
  } 
  if(mm<10){
      mm='0'+mm;
  } 
  var today = dd+'/'+mm+'/'+yyyy+"  "+curr.getHours()+":"+curr.getMinutes()+":"+curr.getSeconds();
  return today;
  }

  req_submit()
{
 this.messageService.add({

  name :this.firstname,
  lastname:this.lastname,
  phone: this.phone,
  category:this.category,
  address:this.adrress,
  details:this.detailsEvent,
  date: this.format(this.date),
  city:this.city1
  


 })
}


  ngOnInit() {
  }

}