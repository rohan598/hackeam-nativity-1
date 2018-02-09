import { OnInit } from '@angular/core';

export class ToggleService {
  firedUp: boolean;
  firedIn: boolean;
  ngOnInit() {
    this.firedUp = false;
    this.firedIn = false;
  }
  truthyUp() {
    this.firedUp = true;
  }
  falsifyUp() {
    this.firedUp = false;
  }
  stateUp() {
    return this.firedUp;
  }
  truthyIn() {
    this.firedIn = true;
  }
  falsifyIn() {
    this.firedIn = false;
  }
  stateIn() {
    return this.firedIn;
  }
}
