import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore, AngularFirestoreCollection } from "angularfire2/firestore";
import { Volunteer} from '../../models/volunteer.model';

@Injectable()
export class FirebaseService {
  public auth;

  private _profile;
  private _id: string;
  private _email:string;

 

public volunteerRef;
  


  constructor(public afAuth: AngularFireAuth, private afsDocument: AngularFirestore) { 
   this.volunteerRef=this.afsDocument.collection("volunteers");
  }

  

  login() {
    return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());

  }
  logout() {
    this.afAuth.auth.signOut();
  }

  private getUserData(id: string) {
    this.afsDocument.doc("users/" + id).valueChanges().subscribe(user => {
      this._profile = user;
    });
  }

  private getid() {
    if (this.afAuth.auth.currentUser)
      this._id = this.afAuth.auth.currentUser.uid;
    else
      this._id = "";
    return this._id;
  }
  private getEmail() {
    if (this.afAuth.auth.currentUser)
      this._email=this.afAuth.auth.currentUser.email;
    else
      this._email = "";
    return this._email;



  }



  updateProfile(obj) {
    this._profile = obj;
    this.update();
  }

  private update() {
    if( this.getid().length  > 0)
      this.afsDocument.doc("users/" + this._id).set(this._profile).then(res => {

      });
  }

   public btn1Submit(firstname,lastname,phone)
  {
    this.volunteerRef.doc(this.getEmail()).set({
     firstname:firstname,
     lastname:lastname,
     phone:phone
    
      
    });
  }


}


