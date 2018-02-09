import { Component} from '@angular/core';
import { ToggleService } from '../../shared/toggle.service';

@Component({
  selector: 'app-navbar-in',
  templateUrl: './navbar-in.component.html',
  styleUrls: ['./navbar-in.component.css']
})
export class NavbarInComponent {


  constructor(private toggle: ToggleService) { }

}
