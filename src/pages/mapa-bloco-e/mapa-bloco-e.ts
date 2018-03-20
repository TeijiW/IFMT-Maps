import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the MapaBlocoEPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa-bloco-e',
  templateUrl: 'mapa-bloco-e.html',
})
export class MapaBlocoEPage {

  constructor(public navCtrl: NavController, platform: Platform, public navParams: NavParams) {
    platform.registerBackButtonAction(() => {
      this.GoBackE();
    },1);
  }

  GoBackE() {
    this.navCtrl.setRoot('BlocoEPage');
  }

}
