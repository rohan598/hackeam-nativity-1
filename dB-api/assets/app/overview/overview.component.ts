import { Component, OnInit,ElementRef,ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class OverviewComponent implements OnInit {

  constructor(private elRef:ElementRef) { }

  ngOnInit() {
        console.log(this.elRef.nativeElement.innerHTML);
  }

}
