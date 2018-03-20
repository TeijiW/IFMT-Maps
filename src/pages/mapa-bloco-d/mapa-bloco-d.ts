import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the MapaBlocoDPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa-bloco-d',
  templateUrl: 'mapa-bloco-d.html',
})
export class MapaBlocoDPage {

  constructor(public navCtrl: NavController, platform: Platform, public navParams: NavParams) {
    platform.registerBackButtonAction(() => {
      this.GoBackD();
    },1);
  }

  GoBackD() {
    this.navCtrl.setRoot('BlocoDPage');
  }

}
