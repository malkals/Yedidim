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
  public temp:number;
   private city;
   private categories:string[]=new Array();
   private itemdoc:AngularFirestoreDocument<any>;
   private flag:number;
   private col:AngularFirestoreCollection<any>;
   private firstTime=true;
   private returnMessageRef: AngularFirestoreCollection<any>;
   private _id:string;
   public id: string;
  

  constructor(private afsDocument: AngularFirestore,public afAuth: AngularFireAuth, public firebaseService: FirebaseService) { 
    this.returnMessageRef = this.afsDocument.collection("return_messages");
    this._id="";
    this.itemdoc=this.afsDocument.doc("volunteers/" +this.firebaseService.getEmail()); 
   

    this.itemdoc.valueChanges().subscribe(res=>{
      
      this.city=res.city;
      this.categories=res.helpCategory;
  
    });
   
  
  console.log(this.city);
   this.col=this.afsDocument.collection("messages"); 
    this.col.valueChanges().subscribe(mess=>{
      this.messages=mess;
      
     
      
      
      if(this.messages!=null)
      {
        this.temp=this.messages.length;
       this.messageArray=[];
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


       var date_sort_desc = 
      
     
      this.messageArray.sort(function(a, b) {
        a = new Date(a.date);
        b = new Date(b.date);
        return a>b ? -1 : a<b ? 1 : 0;
    });
        
           
    //  this.messageArray.sort(function(a, b){
        
      //  return a.date-b.date ;//sort by date ascending
   // });
          //let audio=new Audio('assets/2.mp3');
         // audio.play();
       

         
       });
      }
      
    
    });
 
   
  }
 

  add(message: any) :void{
    this.col.add(message).then(res=>{

    });
  }

  addReturnMessages(return_message: any): void {
    this.returnMessageRef.add(return_message).then(res => {



    })

  }

  public get_id_message() {
    this.id = this.afsDocument.createId();
    return this.id;
  }


  
  
  public get allMessage()
  {
    return this.myMessage ? this.myMessage :[]
  }

 

}
