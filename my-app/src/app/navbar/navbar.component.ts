import { Component, OnInit,EventEmitter, Output, ViewChild,
         ComponentFactoryResolver,
         ViewContainerRef } from '@angular/core';
// import { SignupComponent } from '../signup/signup.component';
// import { SigninComponent } from '../signin/signin.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  // 
  // @Output() onClickSignin = new EventEmitter<boolean>();
  //   @Output() onClickSignup = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  // onClickIn(){
  // this.onClickSignin.emit(true);
  // }
  // onClickUp(){
  // this.onClickSignup.emit(true);
  // }
  //
  // @ViewChild('', { read: ViewContainerRef }) container: ViewContainerRef;
  //
  //  constructor(private _cfr: ComponentFactoryResolver) { }
  //  ngOnInit(){ }
  //
  // addComponent(){
  //     var comp = this._cfr.resolveComponentFactory(ExpComponent);
  //     var expComponent = this.container.createComponent(comp);
  //     expComponent.instance._ref = expComponent;
  // }
}
