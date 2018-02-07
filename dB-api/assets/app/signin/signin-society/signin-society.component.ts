import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-signin-society',
  templateUrl: './signin-society.component.html',
  styleUrls: ['./signin-society.component.css']
})
export class SigninSocietyComponent implements OnInit {


  societySigninForm: FormGroup;
  emailIsValid: boolean;
  emailVal: boolean;
  passwordIsValid: boolean;
  passwordVal: boolean;



  constructor() { }

  ngOnInit() {
    this.societySigninForm = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
      'password': new FormControl(null, Validators.required)
    });

    this.societySigninForm.get('email').statusChanges.subscribe((status) => {
      this.emailIsValid = (status === 'VALID' ? true : false);
    });

    this.societySigninForm.get('password').statusChanges.subscribe((status) => {
      this.passwordIsValid = (status === 'VALID' ? true : false);
    });

    this.societySigninForm.get('email').valueChanges.subscribe((value) => {
      if (value === '' || value === null) {
        this.emailVal = true;
      } else {
        this.emailVal = false;
      }
    });

    this.societySigninForm.get('password').valueChanges.subscribe((value) => {
      if (value === '' || value === null) {
        this.passwordVal = true;
      } else {
        this.passwordVal = false;
      }
    });

  }

}
