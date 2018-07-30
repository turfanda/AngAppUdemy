import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  token: string;
  constructor(private router:Router) {
  }

  signUp(mail: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(mail, password).catch((error) => console.log(error));
  }

  signIn(mail: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(mail, password).
      then((response) => {
        this.router.navigate(['/']);
        firebase.auth().currentUser.getIdToken().
        then(token => this.token = token);
  
      });
  }

  getToken() {
    firebase.auth().currentUser.getIdToken().then(
      response => this.token = response
    );
    return this.token;
  }

  isAuth() {
    return this.token != null;
  }

  setToken(token:string){
    this.token = token;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
    this.router.navigate(['/']);
  }

}
