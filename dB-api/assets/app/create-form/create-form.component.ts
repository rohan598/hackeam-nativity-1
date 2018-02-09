import { Component,ElementRef, NgZone, OnInit, ViewChild  } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms'

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})

export class CreateFormComponent implements OnInit {

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

    constructor() { }

    ngOnInit() {

        this.createForm = new FormGroup({
            'important': new FormGroup({
                'societyName': new FormControl(null, Validators.required),
                'eventName': new FormControl(null, Validators.required),
                'eventDateFrom': new FormControl(null, Validators.required),
                'eventDateTo': new FormControl(null, Validators.required),
                'eventIdea': new FormControl(null, Validators.required),
                'aboutEvent': new FormControl(null, Validators.required)
            }),
            'images': new FormGroup({
                'logo': new FormControl(null),
                'background': new FormControl(null)
            }),
            'links': new FormGroup({
                'register': new FormControl(null),
                'github': new FormControl(null),
                'googlep': new FormControl(null),
                'facebook': new FormControl(null),
                'twitter': new FormControl(null),
                'linkedin': new FormControl(null),
                'instagram': new FormControl(null)
            })
        });

        this.createForm.get('important.societyName').statusChanges.subscribe((status)=>{
            this.societyNameIsValid = (status ===  'VALID' ? true:false);
        });
        this.createForm.get('important.eventName').statusChanges.subscribe((status)=>{
            this.eventNameIsValid = (status ===  'VALID' ? true:false);
        });

        this.createForm.get('important.societyName').valueChanges.subscribe((value)=>{
            this.societyNameVal = (value==='' || value===null) ? true : false;
        });
        this.createForm.get('important.eventName').valueChanges.subscribe((value)=>{
            this.eventNameVal = (value==='' || value===null) ? true : false;
        });
        this.createForm.get('important.eventDateFrom').valueChanges.subscribe((value)=>{
            this.eventDateFromVal = (value==='' || value===null) ? true : false;
        });
        this.createForm.get('important.eventDateTo').valueChanges.subscribe((value)=>{
            this.eventDateToVal = (value==='' || value===null) ? true : false;
        });
        this.createForm.get('important.eventIdea').valueChanges.subscribe((value)=>{
            this.eventIdeaVal = (value==='' || value===null) ? true : false;
        });
        this.createForm.get('important.aboutEvent').valueChanges.subscribe((value)=>{
            this.aboutEventVal = (value==='' || value===null) ? true : false;
        });
    }

    onSubmit(){
        console.log(this.createForm);
    }
}
