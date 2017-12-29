import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MessageService } from '../message.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Url } from 'url';
@Component({
  selector: 'app-volunteer-page',
  templateUrl: './volunteer-page.component.html',
  styleUrls: ['./volunteer-page.component.css']
})
export class VolunteerPageComponent implements OnInit {
  private col:AngularFirestoreCollection<any>;
  public auth;
  public picture:any;
  messages: string[];
  constructor(public router: Router, public messageService: MessageService,private afsDocument: AngularFirestore,public afAuth: AngularFireAuth,) { 
    this.col=this.afsDocument.collection("messages"); 
    this.col.valueChanges().subscribe(res=>{
      this.messages=res;
     
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


  ngOnInit() {
  }

}
