import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { AngularFirestoreDocument, AngularFirestore } from "angularfire2/firestore";
import { Volunteer} from '../../models/volunteer.model';

@Injectable()
export class FirebaseService {
  public auth;

  private _profile;
  private _id: string;
  volunteer: Observable <Volunteer>;
  constructor(public afAuth: AngularFireAuth, private afsDocument: AngularFirestore) { 

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



  updateProfile(obj) {
    this._profile = obj;
    this.update();
  }

  private update() {
    if( this.getid().length  > 0)
      this.afsDocument.doc("users/" + this._id).set(this._profile).then(res => {

      });
  }


}


