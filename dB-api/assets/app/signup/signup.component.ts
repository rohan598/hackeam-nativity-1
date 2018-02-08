import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  fired:boolean = false;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onSelect(bool: boolean){
      this.fired =true;
      if(bool){
        this.router.navigate(['society','new'],{relativeTo: this.route});
      }else{
          this.router.navigate(['user','new'],{relativeTo: this.route});
      }
  }

  goBack(){
      this.router.navigate(['/signup']);
      this.fired =false;
  }
}
