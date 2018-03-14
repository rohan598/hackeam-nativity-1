import { Component, OnInit } from '@angular/core';
import { SocietyService } from '../../shared/services/society.service';
import { Society } from '../../shared/models/societies.model';
@Component({
  selector: 'app-side-bar-society',
  templateUrl: './side-bar-society.component.html',
  styleUrls: ['./side-bar-society.component.css']
})
export class SideBarSocietyComponent implements OnInit {

  society:Society;
  constructor(private societyService:SocietyService) { }

  ngOnInit() {
    this.societyService.getData()
      .subscribe(
        (society)=>{
          this.society = society;
          console.log("data: " + society);
        },
        (error)=>{
          console.log(JSON.parse(JSON.stringify(error)));
        }
      )
  }

}
