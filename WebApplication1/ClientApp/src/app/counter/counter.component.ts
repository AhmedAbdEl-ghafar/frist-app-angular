import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  templateUrl: './counter.component.html'
})
export class CounterComponent {
  public currentCount = 0;
  public myname ="Ahmed Abd El-Ghafar"

  public incrementCounter() {
    this.currentCount++;
  }

  public myName() {
    this.myname;
  }
}
