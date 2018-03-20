import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the MapaQuadraPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa-quadra',
  templateUrl: 'mapa-quadra.html',
})
export class MapaQuadraPage {

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.registerBackButtonAction(() => {
      this.GoBack();
    },1);
  }

  GoBack() {
    this.navCtrl.setRoot('HomePage');
  }
}