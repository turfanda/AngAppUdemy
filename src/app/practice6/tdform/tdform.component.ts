import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styles: [`
  input.ng-invalid.ng-touched{
    border:1px solid red;
  }
  `]
})
export class TDFormComponent implements OnInit {

  subs = ['Basic', 'Advanced', 'Pro'];
  submitted = false;

  constructor() { }

  ngOnInit() {
  }

  submitForm(f: NgForm) {
    this.submitted = true;
  }

}
