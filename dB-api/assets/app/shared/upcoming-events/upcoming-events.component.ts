import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Events } from '../models/events.model';
import { FormGroup,FormControl,Validators } from '@angular/forms';
// import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {

  specific:boolean;
  events:Events[];
  inputForm:FormGroup;
  inputIsValid:boolean;
  choice:number = 1;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    console.log("here");
    this.eventService.getAllEventsData()
    .subscribe((events)=>{
        console.log("in map");
        let tempObj = JSON.parse((JSON.stringify(events.body)));
        let temp = Array.prototype.slice.call(tempObj.obj);
        console.log(JSON.parse(JSON.stringify(temp)));
                let arr = [];
        temp.forEach((event)=>{
          console.log("in each");
            arr.push({
              name:event.name,
               from:event.from,
               to:event.to,
               description:event.description,
               background:event.background ,
               hashtags:event.hashtags,
               events:event.events,
               register:event.register,
               links: event.profile,
               speakers:event.speakers,
               sponsors:event.sponsors,
               phone1:event.phone1,
               phone2:event.phone2,
               address:event.address,
               id:event.id
            });
            console.log('loop');
        });
              this.events = arr;
      });
    console.log(this.events);
      // .subscribe((eventsData)=>{
      //   this.events = Array.prototype.slice.call(eventsData);
      //   console.log("subscribed");
      //   console.log(this.events);
      // });
      // this.inputForm =new FormGroup({
      //   'input':new FormControl(null,Validators.required)
      // });
      // this.inputForm.get('input').statusChanges.subscribe((status) => {
      //   this.inputIsValid = (status === 'VALID' ? true : false);
      // });
  }

  // selectChange(args){
  //   if( args.target.value === 1 ){
  //       this.choice =1;
  //   }else if( args.target.value === 2){
  //     this.choice=2;
  //   }
  // }
//   onSubmit(){
//
//       console.log(this.inputForm.get('input').value);
//        this.eventService.getEventData(this.inputForm.get('input').value)
//         .subscribe((creates: Create[])=>{
//           this.creates = creates;
//           console.log("subsctibed");
//           console.log(this.creates);
//         });
//
//     this.specific = true;
//   }
//
}
