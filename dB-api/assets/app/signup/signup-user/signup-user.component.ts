import { Component,OnInit,ElementRef,ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../shared/services/auth.service';
import { ToggleService } from '../../shared/services/toggle.service';
import { User } from '../../shared/models/users.model';
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
  profile: {
    github:string,
    linkedin:string,
    facebook:string,
    googleplus:string,
    twitter:string,
    instagram:string
  } ;

  @ViewChild('fileInput') fileInput: ElementRef;

  constructor(private authService:AuthService,private router:Router,private toggle: ToggleService) { }

  ngOnInit() {
    this.userSignupForm = new FormGroup({
      'important': new FormGroup({
        'username': new FormControl(null, Validators.required),
        'email': new FormControl(null,[Validators.required,Validators.pattern('[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}')]),
        'password': new FormControl(null,Validators.required)
      }),
      'avatar': new FormControl(null)
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
    const user = new User(
      this.userSignupForm.get('important.username').value,
      this.userSignupForm.get('important.email').value,
      this.userSignupForm.get('important.password').value,
      this.userSignupForm.get('avatar').value,
      this.profile
    );
    console.log(this.userSignupForm + "\n");
    this.authService.signupUser(user)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.userSignupForm.reset();
    this.router.navigate(['/auth']);
  }

  goBack(){
      this.router.navigate(['/register']);
  }

  // onFileChange(event) {
  //   let reader = new FileReader();
  //   if(event.target.files && event.target.files.length > 0) {
  //     let file = event.target.files[0];
  //     reader.readAsDataURL(file);
  //     reader.onload = () => {
  //       this.userSignupForm.get('avatar').setValue({
  //         filename: file.name,
  //         filetype: file.type,
  //         value: reader.result.split(',')[1]
  //       })
  //     };
  //   }
  // }

}
