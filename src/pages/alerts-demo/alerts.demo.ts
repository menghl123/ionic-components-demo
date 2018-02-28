import {Component} from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';

@Component({
  selector: 'alerts-demo-home',
  templateUrl: 'alerts.demo.html'
})
export class AlertsDemo {

  constructor(public navCtrl: NavController,
              private alertCtrl: AlertController) {

  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: '消息',
      subTitle: '登陆成功！',
      buttons: ['OK']
    });
    alert.present();
  }

}
