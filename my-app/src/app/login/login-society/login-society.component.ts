import { Component,ElementRef, NgZone, OnInit, ViewChild  } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms'
import { } from 'googlemaps';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-login-society',
  templateUrl: './login-society.component.html',
  styleUrls: ['./login-society.component.css']
})
export class LoginSocietyComponent implements OnInit {

  societySignupForm: FormGroup;
  usernameIsValid: boolean;
  usernameVal: boolean;
  emailIsValid: boolean;
  emailVal:boolean;
  passwordIsValid: boolean;
  passwordVal: boolean;
  nameIsValid: boolean;
  nameVal: boolean;
  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;


    @ViewChild("search")
    public searchElementRef: ElementRef;

    constructor(
      private mapsAPILoader: MapsAPILoader,
      private ngZone: NgZone
    ) {}

  ngOnInit() {
    this.societySignupForm =  new FormGroup({
      'important': new FormGroup({
        'username': new FormControl(null,Validators.required),
        'email': new FormControl(null,[Validators.required,Validators.email]),
        'password': new FormControl(null,Validators.required)
      }),
      'additional': new FormGroup({
          'name': new FormControl(null,Validators.required),
          'description': new FormControl(null)
        }),
        'logo': new FormControl(null,Validators.required),
      'contactDetails':new FormGroup({
          'address': new FormControl(null),
          'telephone':new FormControl(null)
      })
    });
    //set google maps defaults
    this.zoom = 4;
    this.latitude = 39.8282;
    this.longitude = -98.5795;

    //create search FormControl
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });

      this.societySignupForm.get('important.username').statusChanges.subscribe((status)=>{
        this.usernameIsValid = (status ===  'VALID' ? true:false);
      });
      this.societySignupForm.get('important.email').statusChanges.subscribe((status)=>{
        this.emailIsValid = (status ===  'VALID' ? true:false);
      });

      this.societySignupForm.get('important.password').statusChanges.subscribe((status)=>{
        this.passwordIsValid = (status ===  'VALID' ? true:false);
      });

      this.societySignupForm.get('additional.name').statusChanges.subscribe((status)=>{
        this.nameIsValid = (status ===  'VALID' ? true:false);
      });

      this.societySignupForm.get('important.username').valueChanges.subscribe((value)=>{
        if(value ===  '' || value ===null){
          this.usernameVal = true;
        }else{
          this.usernameVal = false;
        }
      });
      this.societySignupForm.get('important.email').valueChanges.subscribe((value)=>{
        if(value ===  '' || value ===null){
          this.emailVal= true;
        }else{
          this.emailVal = false;
        }
      });

      this.societySignupForm.get('important.password').valueChanges.subscribe((value)=>{
        if(value ===  '' || value ===null){
          this.passwordVal = true;
        }else{
          this.passwordVal= false;
        }
      });

      this.societySignupForm.get('additional.name').valueChanges.subscribe((value)=>{
             if(value ===  '' || value ===null){
                  this.nameVal = true;
                }else{
                  this.nameVal = false;
                }
      });
  }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }

  onSubmit(){
    console.log(this.societySignupForm);
  }
}
