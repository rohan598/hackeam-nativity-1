import { Component, OnInit } from '@angular/core';
import { EventService } from '../event.service';
import { Create } from '../create/create.model';
import { FormGroup,FormControl,Validators } from '@angular/forms';
// import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.css']
})
export class UpcomingEventsComponent implements OnInit {

  creates: Create[];
  inputForm:FormGroup;
  inputIsValid:boolean;
  choice:number = 1;
  constructor(private eventService: EventService) { }

  ngOnInit() {
    // this.eventService.getAllEventsData()
    //   .subscribe((creates: Create[])=>{
    //     this.creates = creates;
    //     console.log("subsctibed");
    //     console.log(this.creates);
    //   });
      this.inputForm =new FormGroup({
        'input':new FormControl(null,Validators.required)
      });
      this.inputForm.get('input').statusChanges.subscribe((status) => {
        this.inputIsValid = (status === 'VALID' ? true : false);
      });
  }

  selectChange(args){
    if( args.target.value === 1 ){
        this.choice =1;
    }else if( args.target.value === 2){
      this.choice=2;
    }
  }
  onSubmit(){
    if(this.choice === 1){  this.eventService.getSocietyEventData(this.inputForm.get('input').value)
        .subscribe((creates: Create[])=>{
          this.creates = creates;
          console.log("subsctibed");
          console.log(this.creates);
        });
    }else{
            console.log("service unavailable");
    }
  }

}
