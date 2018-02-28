import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'loading.demo.html'
})
export class LoadingDemo {

  constructor(public loadingCtrl: LoadingController) {

  }

  presentLoading() {
    let loader = this.loadingCtrl.create({
      content: "加载中...",
      duration: 3000
    });
    loader.present();
  }

}
