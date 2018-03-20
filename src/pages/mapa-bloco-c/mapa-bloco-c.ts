import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the MapaBlocoCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa-bloco-c',
  templateUrl: 'mapa-bloco-c.html',
})
export class MapaBlocoCPage {

  constructor(public navCtrl: NavController, platform: Platform, public navParams: NavParams) {
    platform.registerBackButtonAction(() => {
      this.GoBackC();
    },1);
  }

  GoBackC() {
    this.navCtrl.setRoot('BlocoCPage');
  }

}
