
import { Component, ElementRef, NgZone,OnChanges, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray ,FormBuilder} from '@angular/forms'
import { CustomValidators } from 'ng2-validation';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { CreateService } from '../create.service';
import { Create } from './create.model';
import { MapsAPILoader } from '@agm/core';
import { } from '@types/googlemaps';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  pageNum: number = 1;

  createForm: FormGroup;
  eventNameIsValid: boolean;
  eventNameVal: boolean;
  eventDateFromIsValid: boolean;
  eventDateFromVal: boolean;
  eventDateToIsValid: boolean;
  eventDateToVal: boolean;
  descriptionValid: boolean;
  descriptionVal: boolean;
  min: string;
  max: string;
  date: Date;


  public latitude: number;
  public longitude: number;
  public searchControl: FormControl;
  public zoom: number;
  // autocomplete: any;

  @ViewChild("search")
  public searchElementRef: ElementRef;


  constructor(private datePipe: DatePipe,private fb:FormBuilder,private createService:CreateService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private router:Router,
    private authService:AuthService
  ) { }


  // transformDate(date) {
  //   this.date = new Date(Date.now());
  //   this.date.setDate(this.date.getDate() + 7);
  //   this.min = this.datePipe.transform(Date.now(),'yyyy-MM-dd');
  //   this.date.setDate(this.date.getDate() + 113);
  //   this.max = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
  // }
  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
  }
  ngOnInit() {

    this.createForm = this.fb.group({
      'pg1': this.fb.group({

        'eventName': ['', Validators.required],
        'eventDateFrom': ['',Validators.required],
        'eventDateTo':['', Validators.required],
        'description': ['',Validators.required],
        'background': ['',[Validators.required, CustomValidators.url]]
      }),
        'pg2':this.fb.group({
        'hashtags': [''],
        'events': this.fb.array([])
      }),


      'pg3': this.fb.group({
        'register': ['',CustomValidators.url],
        'links': this.fb.group({
          'github': ['',CustomValidators.url],
          'googlep': ['',CustomValidators.url],
          'facebook': ['',CustomValidators.url],
          'twitter': ['',CustomValidators.url],
          'linkedin': ['',CustomValidators.url],
          'instagram': ['',CustomValidators.url]
        })
      }),

      'pg4':this.fb.group({
        'speakers': this.fb.array([])
      }),
      'pg5': this.fb.group({
          'sponsors': this.fb.array([])
      }),
      'pg6':this.fb.group({
          'phone1':[''],
          'phone2':[''],
          'address':['']
      })
  });
  //set google maps defaults
  this.zoom = 4;
  this.latitude = 39.8282;
  this.longitude = -98.5795;

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

    this.createForm.get('pg1.eventName').statusChanges.subscribe((status) => {
      this.eventNameIsValid = (status === 'VALID' ? true : false);
    });

    this.createForm.get('pg1.eventName').valueChanges.subscribe((value) => {
      this.eventNameVal = (value === '' || value === null) ? false : true;
    });
    this.createForm.get('pg1.eventDateFrom').valueChanges.subscribe((value) => {
      this.eventDateFromVal = (value === '' || value === null) ? false : true;
    });
    this.createForm.get('pg1.eventDateTo').valueChanges.subscribe((value) => {
      this.eventDateToVal = (value === '' || value === null) ? false : true;
    });
    this.createForm.get('pg1.description').valueChanges.subscribe((value) => {
      this.descriptionVal = (value === '' || value === null) ? false : true;
    });
    this.createForm.get('pg6.address').valueChanges.subscribe((value:string) => {
      this.createForm.patchValue({
        'pg6.address':value
      })
    });
  }


  onAddEvents(){
    const group = this.fb.group({
      'name': ['',Validators.required],
      'from': ['',Validators.required],
      'to': ['',Validators.required],
      'venue': ['',Validators.required],
      'description': ['',Validators.required]
    });
    (<FormArray>this.createForm.get('pg2.events')).push(group);
  }

  onAddSpeakers(){
      const group = this.fb.group({
        'name': [''],
        'description': [''],
        'avatar': ['',CustomValidators.url],

        'links': this.fb.group({
          'github': ['',CustomValidators.url],
          'googlep': ['',CustomValidators.url],
          'facebook': ['',CustomValidators.url],
          'twitter': ['',CustomValidators.url],
          'linkedin': ['',CustomValidators.url],
          'instagram': ['',CustomValidators.url]
        })
      });
      (<FormArray>this.createForm.get('pg4.speakers')).push(group);
  }

  onAddSponsors(){
      const group = this.fb.group({
        'logo': ['',CustomValidators.url],
        'link': ['',CustomValidators.url]
      });
      (<FormArray>this.createForm.get('pg5.sponsors')).push(group);
  }

  toggleNext(){

  }

  onSubmit() {
    const create = new Create(
      this.createForm.get('pg1.eventName').value,
      this.createForm.get('pg1.eventDateFrom').value,
      this.createForm.get('pg1.eventDateTo').value,
      this.createForm.get('pg1.description').value,
      this.createForm.get('pg1.background').value,
      this.createForm.get('pg2.hashtags').value,
      (<FormArray>this.createForm.get('pg2.events')).value,
      this.createForm.get('pg3.register').value,
      this.createForm.get('pg3.links').value,
      (<FormArray>this.createForm.get('pg4.speakers')).value,
      (<FormArray>this.createForm.get('pg5.sponsors')).value,
      this.createForm.get('pg6.phone1').value,
      this.createForm.get('pg6.phone2').value,
      this.createForm.get('pg6.address').value,
      localStorage.getItem('societyId')
    );
    console.log(this.createForm.value + "\n" +create);
    this.createService.createEvent(create)
      .subscribe(
        data => console.log(data),
        error => console.error(error)
      );
    this.createForm.reset();
  }
  nextPage(){
    this.pageNum++;
  }
  prevPage(){
    this.pageNum--;
  }
}
