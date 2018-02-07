import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styleUrls: ['./signin-user.component.css']
})
export class SigninUserComponent implements OnInit {


  userSigninForm: FormGroup;
  emailIsValid: boolean;
  emailVal: boolean;
  passwordIsValid: boolean;
  passwordVal: boolean;


  constructor() { }

  ngOnInit() {
    this.userSigninForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
      'password': new FormControl(null, Validators.required)
    });

    this.userSigninForm.get('email').statusChanges.subscribe((status) => {
      this.emailIsValid = (status === 'VALID' ? true : false);
    });

    this.userSigninForm.get('password').statusChanges.subscribe((status) => {
      this.passwordIsValid = (status === 'VALID' ? true : false);
    });

    this.userSigninForm.get('email').valueChanges.subscribe((value) => {
      if (value === '' || value === null) {
        this.emailVal = true;
      } else {
        this.emailVal = false;
      }
    });

    this.userSigninForm.get('password').valueChanges.subscribe((value) => {
      if (value === '' || value === null) {
        this.passwordVal = true;
      } else {
        this.passwordVal = false;
      }
    });

  }

}
