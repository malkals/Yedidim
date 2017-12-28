import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../service/firebase/firebase.service' ;
import { Router } from "@angular/router";
import { Volunteer} from '../models/volunteer.model';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-request-help',
  templateUrl: './request-help.component.html',
  styleUrls: ['./request-help.component.css']
})
export class RequestHelpComponent implements OnInit {
  city = ['','ירושלים', 'תל-אביב', 'חיפה','נתניה','אשדוד'];
    

  public firstname:string;
  public lastname:string;
   public phone:number;
   public adrress:string;
   public detailsEvent:string;
   public category:string;
 public message:string;
 
  constructor( public router:Router , private afs: AngularFirestore, public firebaseService: FirebaseService,private messageService: MessageService) {
   this.firstname="";
   this.lastname="";
   this.phone=null;
   this.adrress="";
   this.detailsEvent="";
   this.category="";
   this.message="";



   }

   sendCtegory(category):void
   {
     this.category=category;
    

   }

   req_submit()
   {
     this.message="שם : "+this.firstname+" "+this.lastname +" "+"מס  פאלאפון"+this.phone+" " +"קטגורית סיוע:  "+this.category+"פרטי האירוע:  "+this.detailsEvent;

  this.add();
   }
add()
{
 this.messageService.add({

  message :this.message

 })
}


  ngOnInit() {
  }

}