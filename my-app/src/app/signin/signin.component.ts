import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  fired:boolean = false;
  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {

  }
    onSelect(bool: boolean){
        this.fired =true;
        if(bool){
          this.router.navigate(['society',1],{relativeTo: this.route});
        }else{
            this.router.navigate(['user',1],{relativeTo: this.route});
        }
    }

    goBack(){
        this.router.navigate(['/signin']);
        this.fired =false;
    }

}
