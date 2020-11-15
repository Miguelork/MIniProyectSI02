import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument, } from '@angular/fire/firestore';
import firebase from 'firebase/app';
import auth from 'firebase/app';
import { User } from "../models/user";
import {switchMap} from 'rxjs/operators';
import { Observable , of} from 'rxjs';


@Injectable()
export class AuthService {
  
  User: Observable<User>;
  
  constructor (public afAuth: AngularFireAuth,private firestore: AngularFirestore,private router: Router) 
  {
    this.User = this.afAuth.authState.pipe(switchMap(User => 
    {
      if( User )
      {
        return this.firestore.doc<User>(`users/${User.uid}`).valueChanges();
      }
      else 
      {
        return of(null);
      }
    }))
  }

  public googleLogin() 
  {
    var provider = new firebase.auth.GoogleAuthProvider();

    return this.oAuthLogin(provider);
  }

  private oAuthLogin(provider) 
  {
    return this.afAuth.signInWithPopup(provider).then(credentials => {
      const user = credentials.user;
      this.firestore.collection<User>('users', ref => ref.where('email', '==', user.email)).snapshotChanges()
      .subscribe(data => {
        if(!data.length)
        {
          const newUser = 
          {
            uid: user.uid,
            email: user.email,
            name: user.displayName
          }
          this.firestore.collection('users').doc(user.uid).set(newUser).then(() => {
            this.router.navigate(['/personajes'])
            return;
          })
        }
      })
      this.router.navigate(['/personajes']);
    })
  }

  public emailAndPassword(email, password)
  {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

  public signUp(email, password)
  {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  public signOut() 
  {
    this.afAuth.signOut().then(() => 
    this.router.navigate(['/login']));
  }

  public ForgotPassword(email)
  {
    this.afAuth.sendPasswordResetEmail(email).then(function() {
      alert("email sent")
    }).catch(function(error) {
      alert(error.message);
    });
  }
}