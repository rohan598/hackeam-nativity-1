import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

import { ToggleService } from '../../shared/toggle.service';
import { AuthService } from '../../shared/auth.service';
import { User } from '../../user/users.model';

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


  constructor(private authService: AuthService,private router: Router,private toggle: ToggleService) { }

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
  onSubmit() {
          console.log('here4');
    const user = new User(
      '',
      this.userSigninForm.get('email').value,
      this.userSigninForm.get('password').value
    );
    console.log(this.userSigninForm + "\n");
    this.authService.signinUser(user)
      .subscribe(
        (data) => {
        localStorage.setItem('token',data.token);
        localStorage.setItem('userId',data.userId);
        this.router.navigateByUrl('/user');
        },
        error => console.error(error),
        ()=> {this.authService.truthyUser();}
      );
    this.userSigninForm.reset();
  }

      goBack(){
          this.router.navigate(['/signin']);
      }
}
