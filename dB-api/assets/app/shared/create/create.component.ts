
import { Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms'
import { CustomValidators } from 'ng2-validation';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  pageNum: number;
  createForm: FormGroup;
  societyNameIsValid: boolean;
  societyNameVal: boolean;
  eventNameIsValid: boolean;
  eventNameVal: boolean;
  eventDateFromIsValid: boolean;
  eventDateFromVal: boolean;
  eventDateToIsValid: boolean;
  eventDateToVal: boolean;
  eventIdeaIsValid: boolean;
  eventIdeaVal: boolean;
  aboutEventIsValid: boolean;
  aboutEventVal: boolean;
  min: string;
  max: string;
  date: Date;
  constructor(private datePipe: DatePipe) { }
  transformDate(date) {
    this.date = new Date(Date.now());
    this.date.setDate(this.date.getDate() + 7);
    this.min = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
    this.date.setDate(this.date.getDate() + 113);
    this.max = this.datePipe.transform(Date.now(), 'yyyy-MM-dd');
  }
  ngOnInit() {

    this.createForm = new FormGroup({
      'pg1':new FormGroup({
        'societyName': new FormControl(null, Validators.required),
        'eventName': new FormControl(null, Validators.required),
        'eventDateFrom': new FormControl(null, [Validators.required, CustomValidators.minDate(this.min), CustomValidators.maxDate(this.max)]),
        'eventDateTo': new FormControl(null, [Validators.required, CustomValidators.minDate(this.min), CustomValidators.maxDate(this.max)]),
        'aboutEvent': new FormControl(null, Validators.required),
        'background': new FormControl(null, [Validators.required, CustomValidators.url])
      }),

      'pg2': new FormGroup({
        'hastags': new FormControl(null),
        'events': new FormArray([])
      }),

      'pg3': new FormGroup({
        'register': new FormControl(null, CustomValidators.url),
        'links': new FormGroup({
          'github': new FormControl(null, CustomValidators.url),
          'googlep': new FormControl(null, CustomValidators.url),
          'facebook': new FormControl(null, CustomValidators.url),
          'twitter': new FormControl(null, CustomValidators.url),
          'linkedin': new FormControl(null, CustomValidators.url),
          'instagram': new FormControl(null, CustomValidators.url)
        })
      }),

      'pg4':new FormGroup({
        'speakers': new FormArray([])
      }),
      'pg5': new FormGroup({
          'sponsors': new FormArray([])
      })
  });

    this.createForm.get('important.societyName').statusChanges.subscribe((status) => {
      this.societyNameIsValid = (status === 'VALID' ? true : false);
    });
    this.createForm.get('important.eventName').statusChanges.subscribe((status) => {
      this.eventNameIsValid = (status === 'VALID' ? true : false);
    });

    this.createForm.get('important.societyName').valueChanges.subscribe((value) => {
      this.societyNameVal = (value === '' || value === null) ? false : true;
    });
    this.createForm.get('important.eventName').valueChanges.subscribe((value) => {
      this.eventNameVal = (value === '' || value === null) ? false : true;
    });
    this.createForm.get('important.eventDateFrom').valueChanges.subscribe((value) => {
      this.eventDateFromVal = (value === '' || value === null) ? false : true;
    });
    this.createForm.get('important.eventDateTo').valueChanges.subscribe((value) => {
      this.eventDateToVal = (value === '' || value === null) ? false : true;
    });
    this.createForm.get('important.eventIdea').valueChanges.subscribe((value) => {
      this.eventIdeaVal = (value === '' || value === null) ? false : true;
    });
    this.createForm.get('important.aboutEvent').valueChanges.subscribe((value) => {
      this.aboutEventVal = (value === '' || value === null) ? false : true;
    });
  }

  onAddEvents(){
    const group = new FormGroup({
      'name': new FormControl(null, Validators.required),
      'from': new FormControl(null, Validators.required),
      'to': new FormControl(null, Validators.required),
      'venue': new FormControl(null, Validators.required),
      'decription': new FormControl(null, Validators.required)
    });
    (<FormArray>this.createForm.get('events')).push(group);
  }

  onAddSpeakers(){
      const group = new FormGroup({
        'name': new FormControl(null),
        'description': new FormControl(null),
        'avatar': new FormControl(null, CustomValidators.url),

        'links': new FormGroup({
          'github': new FormControl(null, CustomValidators.url),
          'googlep': new FormControl(null, CustomValidators.url),
          'facebook': new FormControl(null, CustomValidators.url),
          'twitter': new FormControl(null, CustomValidators.url),
          'linkedin': new FormControl(null, CustomValidators.url),
          'instagram': new FormControl(null, CustomValidators.url)
        })
      });
      (<FormArray>this.createForm.get('events')).push(group);
  }

  onAddSponsors(){
      const group = new FormGroup({
        'logo': new FormControl(null, CustomValidators.url),
        'link': new FormControl(null, CustomValidators.url)
      });
      (<FormArray>this.createForm.get('events')).push(group);
  }

  toggleNext(){

  }
  onSubmit() {
    console.log(this.createForm);
  }
}
