import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MessageService } from '../message.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Url } from 'url';
import { forEach } from '@angular/router/src/utils/collection';
import {FirebaseService} from '../service/firebase/firebase.service' ;
@Component({
  selector: 'app-volunteer-page',
  templateUrl: './volunteer-page.component.html',
  styleUrls: ['./volunteer-page.component.css']
})
export class VolunteerPageComponent implements OnInit {
  private col:AngularFirestoreCollection<any>;
  public auth;
  public picture:any;
  messages: any[];
  public city;
  private itemdoc:AngularFirestoreDocument<any>;

  constructor(public router: Router, public messageService: MessageService,private afsDocument: AngularFirestore,public afAuth: AngularFireAuth, public firebaseService: FirebaseService) { 
    this.itemdoc=this.afsDocument.doc("volunteers/" +this.firebaseService.getEmail()); 
    this.itemdoc.valueChanges().subscribe(res=>{
      
      this.city=res.city;
      
  
    
    });

    console.log(this.city);
    this.col=this.afsDocument.collection("messages"); 
    this.col.valueChanges().subscribe(res=>{
      this.messages=res;
      this.messages.forEach(element => {
       // console.log(element);
        if(element.city!=this.city)
        { 
          var index = this.messages.indexOf(element);

            this.messages.splice(index, 1);
        }
        
         
       });
     
    });
   
  }

  edit_profile()
  {
    this.router.navigate(["edit-profile"]);
  }
getPicture()
{
  if (this.afAuth.auth.currentUser)
  this.picture = this.afAuth.auth.currentUser.photoURL;
else
  this.picture = "";
//return this.picture;

}
ok()
{
  this.router.navigate(["ok"]);
}

  ngOnInit() {
  }

}
