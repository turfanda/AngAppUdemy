import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService){}
  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyAcd9lmMRdPjTCR9kCohn3_G-CAwJ3OtZQ",
      authDomain: "trf-recipe-book.firebaseapp.com",
      databaseURL: "https://trf-recipe-book.firebaseio.com",
      projectId: "trf-recipe-book"
    })
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        user.getIdToken().then(
          (token: string) => this.authService.setToken(token)
        );
      }
    });
  }
}
