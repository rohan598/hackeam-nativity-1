import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ToggleService } from '../shared/toggle.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // fired:boolean = false;
  constructor(private router: Router,
              private route: ActivatedRoute,
            private toggle: ToggleService) { }

  ngOnInit() {
  }
  onSelect(bool: boolean){
      // this.fired =true;
      this.toggle.truthyUp()
      if(bool){
        this.router.navigate(['society'],{relativeTo: this.route});
      }else{
          this.router.navigate(['user'],{relativeTo: this.route});
      }
  }
  // getState(){
  //   return !this.toggle.st
  // }

}
