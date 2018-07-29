import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styles: []
})
export class SigninComponent implements OnInit {

  constructor(private authService:AuthService) { }

  ngOnInit() {
  }
  onSignIn(f:NgForm){
    this.authService.signIn(f.value.email,f.value.password);
  }

}
