import { Component,Input } from '@angular/core';
import { Events } from '../../models/events.model';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
@Input('event') event:Events;
}
