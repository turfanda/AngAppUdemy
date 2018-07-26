import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '../../../../node_modules/@angular/forms';
import { Observable } from '../../../../node_modules/rxjs';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styles: [`
  input.ng-invalid.ng-touched{
    border:1px solid red;
  }
  `]
})
export class ReactiveFromComponent implements OnInit {

  reactiveForm: FormGroup;
  status = ['Stable', 'Critical', 'Finished'];
  constructor() { }

  ngOnInit() {
    this.reactiveForm = new FormGroup({
      'projectName': new FormControl(null, Validators.required, this.testValidatorAsync),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('Stable', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.reactiveForm.value);
  }

  testValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === 'test') {
      return { testValidator: true };
    }
    return null;
  }
  testValidatorAsync(control: FormControl): Promise<any> | Observable<any> {
    const asd = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test') {
          resolve({ testValidator: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });

    return asd;
  }

}
