import { Component,Input } from '@angular/core';
import { Events } from '../../../shared/models/events.model';
@Component({
  selector: 'app-events-society',
  templateUrl: './events-society.component.html',
  styleUrls: ['./events-society.component.css']
})
export class EventsSocietyComponent {
@Input('event') event:Events;
}
