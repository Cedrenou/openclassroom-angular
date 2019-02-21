import {Component, OnInit} from '@angular/core';
import {AppareilService} from '../services/appareil.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: ['./appareil-view.component.scss']
})
export class AppareilViewComponent implements OnInit {

  isAuth = false;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => resolve(date), 2000);
    });

  appareils: any[];
  appareilSubscritption: Subscription;

  constructor(private appareilService: AppareilService) {
    setTimeout(() => this.isAuth = true, 4000);
  }

  ngOnInit() {
    this.appareilSubscritption = this.appareilService.appareilSubject.subscribe(
      (appareils: any[]) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  onSwitchOn() {
    this.appareilService.switchOnAll();
  }

  onSwitchOff() {
    this.appareilService.switchOffAll();
  }
}
