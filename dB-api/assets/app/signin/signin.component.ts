import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToggleService } from '../shared/services/toggle.service';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  // fired:boolean = false;
  constructor(private router: Router,
              private route: ActivatedRoute,
            private toggle: ToggleService) { }

  ngOnInit() {

  }
    onSelect(bool: boolean){
        // this.fired =true;
        this.toggle.truthyIn();
        if(bool){
          this.router.navigate(['society'],{relativeTo: this.route});
        }else{
            this.router.navigate(['user'],{relativeTo: this.route});
        }
    }


}
