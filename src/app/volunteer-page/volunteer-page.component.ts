import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MessageService } from '../message.service';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
@Component({
  selector: 'app-volunteer-page',
  templateUrl: './volunteer-page.component.html',
  styleUrls: ['./volunteer-page.component.css']
})
export class VolunteerPageComponent implements OnInit {
  private col:AngularFirestoreCollection<any>;

  messages: string[];
  constructor(public messageService: MessageService,private afsDocument: AngularFirestore) { 
    this.col=this.afsDocument.collection("messages"); 
    this.col.valueChanges().subscribe(res=>{
      this.messages=res;
    });
   
  }

  ngOnInit() {
  }

}
