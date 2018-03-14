import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';

import { ToggleService } from '../../shared/services/toggle.service';
import { AuthService } from '../../shared/services/auth.service';
import { Society } from '../../shared/models/societies.model';

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



  constructor(private authService: AuthService,private router: Router,private toggle: ToggleService) { }


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

  onSubmit() {
    const society = new Society(
      '',
      this.societySigninForm.get('email').value,
      this.societySigninForm.get('password').value,
      ''
    );
    console.log(this.societySigninForm + "\n");
    this.authService.signinSociety(society)
      .subscribe(
        (data) => {
        localStorage.setItem('token',data.token);
        localStorage.setItem('societyId',data.societyId);
        },
        error => console.error(error),
        ()=>  {
            this.societySigninForm.reset();
            this.authService.truthySociety();
                      console.log('here');
                      this.router.navigate(['show','society',localStorage.getItem('societyId')]);
          });


  }

      goBack(){
          this.router.navigate(['auth']);
      }
}
