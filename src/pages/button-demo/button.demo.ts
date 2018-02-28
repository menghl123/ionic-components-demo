import {Component} from '@angular/core';
import {ActionSheetController, NavController} from 'ionic-angular';

@Component({
  selector: 'badge-demo-home',
  templateUrl: 'button.demo.html'
})
export class ButtonDemo {

  constructor(public navCtrl: NavController,
              public actionSheetCtrl: ActionSheetController) {

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: '操作',
      buttons: [
        {
          text: '保存到手机',
          role: 'save to local',
          handler: () => {
            console.log('save to local');
          }
        },
        {
          text: '保存到应用',
          role: 'save to app',
          handler: () => {
            console.log('save to app');
          }
        }
      ]
    });
    actionSheet.present();
  }

}
