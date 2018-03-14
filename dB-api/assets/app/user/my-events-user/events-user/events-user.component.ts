import { Component,Input } from '@angular/core';
import { Events } from '../../../shared/models/events.model';
@Component({
  selector: 'app-events-user',
  templateUrl: './events-user.component.html',
  styleUrls: ['./events-user.component.css']
})
export class EventsUserComponent {
@Input('event') event:Events;
}
