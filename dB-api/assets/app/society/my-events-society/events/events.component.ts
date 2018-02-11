import { Component,Input } from '@angular/core';
import { Create } from '../../create/create.model';
@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {
@Input('event') event:Create;
}
