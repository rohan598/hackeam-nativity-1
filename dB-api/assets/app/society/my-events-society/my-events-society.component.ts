import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/services/event.service';
import { Events } from '../../shared/models/events.model';
// import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-my-events-society',
  templateUrl: './my-events-society.component.html',
  styleUrls: ['./my-events-society.component.css']
})
export class MyEventsSocietyComponent implements OnInit {

  events: Events[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getEventsDataSociety()
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
  }

}
