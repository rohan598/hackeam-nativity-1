import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { } from 'googlemaps';
// import { MapsAPILoader } from '@agm/core';


@Component({
  selector: 'app-signup-user',
  templateUrl: './signup-user.component.html',
  styleUrls: ['./signup-user.component.css']
})

export class SignupUserComponent implements OnInit {

  userSignupForm: FormGroup;
  usernameIsValid: boolean;
  usernameVal: boolean = false;
  emailIsValid: boolean;
  emailVal: boolean= false;
  passwordIsValid: boolean;
  passwordVal: boolean= false;



  constructor() { }

  ngOnInit() {
    this.userSignupForm = new FormGroup({
      'important': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
        'password': new FormControl(null,Validators.required)
      })
    });

    this.userSignupForm.get('important.username').statusChanges.subscribe((status) => {
      this.usernameIsValid = (status === 'VALID' ? true : false);
    });
    this.userSignupForm.get('important.email').statusChanges.subscribe((status) => {
      this.emailIsValid = (status === 'VALID' ? true : false);
    });

    this.userSignupForm.get('important.password').statusChanges.subscribe((status) => {
      this.passwordIsValid = (status === 'VALID' ? true : false);
    });

    this.userSignupForm.get('important.username').valueChanges.subscribe((value) => {
      if (value === '' || value === null) {
        this.usernameVal = true;
      } else {
        this.usernameVal = false;
      }
    });
    this.userSignupForm.get('important.email').valueChanges.subscribe((value) => {
      if (value === '' || value === null) {
        this.emailVal = true;
      } else {
        this.emailVal = false;
      }
    });

    this.userSignupForm.get('important.password').valueChanges.subscribe((value) => {
      if (value === '' || value === null) {
        this.passwordVal = true;
      } else {
        this.passwordVal = false;
      }
    });

  }
  passwordValidator(control: FormControl):{[s: string]: boolean} {
    if (control.value === null || control.value.match('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$')) {
        return null;
    } else {
        return { 'invalidPassword': true };
    }
}

  onSubmit() {
    console.log(this.userSignupForm);
    this.userSignupForm.reset();
  }
}
