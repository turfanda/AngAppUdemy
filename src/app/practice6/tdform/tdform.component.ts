import { Component, OnInit } from '@angular/core';
import { NgForm } from '../../../../node_modules/@angular/forms';

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
    console.log(f);
    this.submitted = true;
  }

}
