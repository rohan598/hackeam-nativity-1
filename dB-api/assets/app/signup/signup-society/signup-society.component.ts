import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';

import { AuthService } from '../../shared/auth.service';
import { ToggleService } from '../../shared/toggle.service';
import { Society } from '../../society/societies.model';

@Component({
  selector: 'app-signup-society',
  templateUrl: './signup-society.component.html',
  styleUrls: ['./signup-society.component.css']
})
export class SignupSocietyComponent implements OnInit {

  societySignupForm: FormGroup;
  societynameIsValid: boolean;
  societynameVal: boolean;
  emailIsValid: boolean;
  emailVal: boolean;
  passwordIsValid: boolean;
  passwordVal: boolean;
  descriptionVal: boolean;
  // nameIsValid: boolean;
  // nameVal: boolean;
  constructor(private authService:AuthService,private router:Router){}
  ngOnInit() {
    this.societySignupForm = new FormGroup({
      'important': new FormGroup({
        'societyname': new FormControl(null, Validators.required),
        'email': new FormControl(null, [Validators.required, Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
        'password': new FormControl(null, Validators.required)
      }),
      'additional': new FormGroup({
        // 'name': new FormControl(null,Validators.required),
        'description': new FormControl(null)
        // 'logo': new FormControl(null,Validators.required)
      })
      // 'logo': new FormControl(null,Validators.required)
    });

    //create search FormControl
    // this.societySignupForm.get('important.societyname').statusChanges.subscribe((status) => {
    //   this.societynameIsValid = (status === 'VALID' ? true : false);
    // });
    this.societySignupForm.get('important.email').statusChanges.subscribe((status) => {
      this.emailIsValid = (status === 'VALID' ? true : false);
    });

    // this.societySignupForm.get('important.password').statusChanges.subscribe((status) => {
    //   this.passwordIsValid = (status === 'VALID' ? true : false);
    // });
    // this.societySignupForm.get('additiona').statusChanges.subscribe((status) => {
    //   this.passwordIsValid = (status === 'VALID' ? true : false);
    // });
    // this.societySignupForm.get('additional.name').statusChanges.subscribe((status) => {
    //   this.nameIsValid = (status === 'VALID' ? true : false);
    // });


    this.societySignupForm.get('important.societyname').valueChanges.subscribe((value) => {
      if (value === '' || value === null) {
        this.societynameVal = false;
      } else {
        this.societynameVal = true;
      }
    });
    this.societySignupForm.get('important.email').valueChanges.subscribe((value) => {
      if (value === '' || value === null) {
        this.emailVal = false;
      } else {
        this.emailVal = true;
      }
    });

    this.societySignupForm.get('important.password').valueChanges.subscribe((value) => {
      if (value === '' || value === null) {
        this.passwordVal = false;
      } else {
        this.passwordVal = true;
      }
    });
    this.societySignupForm.get('additional.description').valueChanges.subscribe((value) => {
      if (value === '' || value === null) {
        this.descriptionVal = false;
      } else {
        this.descriptionVal = true;
      }
    });
    // this.societySignupForm.get('additional.name').valueChanges.subscribe((value) => {
    //   if (value === '' || value === null) {
    //     this.nameVal = true;
    //   } else {
    //     this.nameVal = false;
    //   }
    // });
  }
  passwordValidator(control: FormControl): { [s: string]: boolean } {
    if (control.value === null || control.value.match('/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/')) {
      return null;
    } else {
      return { 'invalidPassword': true };
    }
  }
  onSubmit() {
    const society = new Society(
      this.societySignupForm.get('important.societyname').value,
      this.societySignupForm.get('important.email').value,
      this.societySignupForm.get('important.password').value,
      this.societySignupForm.get('additional.description').value
    );
    console.log(this.societySignupForm + "\n");
    this.authService.signupSociety(society)
      .subscribe(
      data => console.log(data),
      error => console.error(error)
      );
    this.societySignupForm.reset();
  }
  goBack(){
      this.router.navigate(['/signup']);
  }
}
