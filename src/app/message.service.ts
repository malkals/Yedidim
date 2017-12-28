import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class MessageService {
 private messageRef: AngularFirestoreCollection<any>;
  public auth;
  private myMessage:any[];
  
  
  

  constructor(private afsDocument: AngularFirestore,public afAuth: AngularFireAuth) { 
    this.messageRef=this.afsDocument.collection("messages");  
    this.messageRef.valueChanges().subscribe(res =>{
      console.log(res);
         this.myMessage=res;
         
            
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
