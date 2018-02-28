import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'datetime-home',
  templateUrl: 'datetime.demo.html'
})
export class DatetimeDemo {
  timeStarts: any;
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public navCtrl: NavController) {

  }

}
