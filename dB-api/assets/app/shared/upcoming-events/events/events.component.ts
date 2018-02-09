import { Component } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
    var arr = [];

    var example = {
        image: 'abc',
        eventname: 'def',
        dateFrom: '2-3-5',
        dateTo: '8-5-5',
        venue: 'asdcwe'
    };
    arr.push(example);
    arr.push(example);
    console.log(arr);
}
