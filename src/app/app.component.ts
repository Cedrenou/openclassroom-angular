import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, interval, Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  seconds: number;
  counterSubcription: Subscription;

  constructor() {
  }

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubcription = counter.subscribe(
      (value: number) => {
        this.seconds = value;
      }
    );
  }

  ngOnDestroy() {
    this.counterSubcription.unsubscribe();
  }
}
