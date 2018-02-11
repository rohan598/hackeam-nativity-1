import { Component, OnInit } from '@angular/core';
import { EventService } from '../../shared/event.service';
import { Create } from '../../shared/create/create.model';
// import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-my-events-society',
  templateUrl: './my-events-society.component.html',
  styleUrls: ['./my-events-society.component.css']
})
export class MyEventsSocietyComponent implements OnInit {

  creates: Create[];
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.eventService.getSocietyEventData().subscribe((creates: Create[])=>{
        this.creates = creates;
        console.log("subsctibed");
        console.log(this.creates);
      });
  }

}
