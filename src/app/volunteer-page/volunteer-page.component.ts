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
 private messages: any[];
 private messageArray:any[]=new Array();
  private city;
  private categories:string[]=new Array();
  private itemdoc:AngularFirestoreDocument<any>;
  private flag:number;

  constructor(public router: Router, public messageService: MessageService,private afsDocument: AngularFirestore,public afAuth: AngularFireAuth, public firebaseService: FirebaseService) { 
    this.itemdoc=this.afsDocument.doc("volunteers/" +this.firebaseService.getEmail()); 
    this.getPicture();

    this.itemdoc.valueChanges().subscribe(res=>{
      
      this.city=res.city;
      this.categories=res.helpCategory;
  
    
   
  
  console.log(this.city);
   this.col=this.afsDocument.collection("messages"); 
    this.col.valueChanges().subscribe(mess=>{
//this.play();
      this.messages=mess;
      
      
      if(this.messages!=null)
      {
      this.messages.forEach(element => {
        this.flag=0;
         
        this.categories.forEach(Celement => {
          if(Celement==element.category||Celement=="אחר")
          { 
             this.flag=1;
            
           }
           
            
         });

       
        if(element.city==this.city&&this.flag==1)
        {  
          
         this.messageArray.push(element);
  
       }
        
         
       });
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
/*play()
{
var audio = new Audio('assets/2.mp3');
audio.play();
}*/
ok()
{

  this.router.navigate(["ok"]);
}

  ngOnInit() {
  }

}
