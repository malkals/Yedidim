import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { AngularFireAuth } from 'angularfire2/auth';
import {FirebaseService} from './service/firebase/firebase.service' ;
@Injectable()
export class MessageService {
 private messageRef: AngularFirestoreCollection<any>;
  public auth;
  private myMessage:any[];
  private messages: any[];
  private messageArray:any[]=new Array();
   private city;
   private categories:string[]=new Array();
   private itemdoc:AngularFirestoreDocument<any>;
   private flag:number;
   private col:AngularFirestoreCollection<any>;
  

  constructor(private afsDocument: AngularFirestore,public afAuth: AngularFireAuth, public firebaseService: FirebaseService) { 
    this.itemdoc=this.afsDocument.doc("volunteers/" +this.firebaseService.getEmail()); 
    //this.getPicture();

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
 

  add(message: any) :void{
    this.messageRef.add(message).then(res=>{

    })
  }
  
  
  public get allMessage()
  {
    return this.myMessage ? this.myMessage :[]
  }

}
