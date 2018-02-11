import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Create } from '../create/create.model';
// import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {

  creates: Create[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getAllEventsData()
      .subscribe((creates: Create[])=>{
        this.creates = creates;
        console.log("subsctibed");
        console.log(this.creates);
      });
  }

}
