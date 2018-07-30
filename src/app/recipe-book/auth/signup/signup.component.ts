import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styles: []
})
export class SignupComponent implements OnInit {

  constructor(private authSerivce:AuthService) { }

  ngOnInit() {
  }

  onSignUp(f:NgForm){
    this.authSerivce.signUp(f.value.email,f.value.password);
  }

}
