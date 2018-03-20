import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mapa-bloco-f',
  templateUrl: 'mapa-bloco-f.html',
})
export class MapaBlocoFPage {

  constructor(public navCtrl: NavController, platform: Platform, public navParams: NavParams) {
    platform.registerBackButtonAction(() => {
      this.GoBackF();
    },1);
  }

  GoBackF() {
    this.navCtrl.setRoot('BlocoFPage');
  }

}