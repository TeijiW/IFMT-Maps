import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-bloco-f',
  templateUrl: 'bloco-f.html',
})
export class BlocoFPage {

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.registerBackButtonAction(() => {
      this.GoBack();
    },1);
  }

  GoBack() {
    this.navCtrl.setRoot('HomePage');
  }
  GoMapF(){
    this.navCtrl.setRoot('MapaBlocoFPage');
  }
}