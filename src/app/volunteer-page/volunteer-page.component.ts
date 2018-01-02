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
  private city;
  private categories:string[]=new Array();
  private itemdoc:AngularFirestoreDocument<any>;
  private flag:number;

  constructor(public router: Router, public messageService: MessageService,private afsDocument: AngularFirestore,public afAuth: AngularFireAuth, public firebaseService: FirebaseService) { 
    this.itemdoc=this.afsDocument.doc("volunteers/" +this.firebaseService.getEmail()); 

    this.itemdoc.valueChanges().subscribe(res=>{
      
      this.city=res.city;
      this.categories=res.helpCategory;
  
    
   
  
  console.log(this.city);
   this.col=this.afsDocument.collection("messages"); 
    this.col.valueChanges().subscribe(mess=>{
      this.messages=mess;
      
      
      if(this.messages!=null)
      {
      this.messages.forEach(element => {
       
        if(element.city!=this.city)
        {  
          console.log("***********");
          console.log(element);
          var index = this.messages.indexOf(element);
          console.log("***********");
          console.log(index);
          if(index>-1)
          {
           this.messages.splice(index, 1);

         }

           
       }
        
         
       });
       this.messages.forEach(element => {
        
         
           console.log("after");
           var index = this.messages.indexOf(element);
           console.log("***********");
           console.log(index);
           console.log(element);
          
            
          
        });

      }
       console.log("######################");
      
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
        if(this.flag==0)
        {
         var index = this.messages.indexOf(element);
          
         if(index>-1)
          {
          this.messages.splice(index, 1);

          }

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
ok()
{
  this.router.navigate(["ok"]);
}

  ngOnInit() {
  }

}
