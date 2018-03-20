import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-bloco-a',
  templateUrl: 'bloco-a.html',
})
export class BlocoAPage {
  constructor(public navCtrl: NavController, platform: Platform) {
    platform.registerBackButtonAction(() => {
      this.GoBack();
    },1);
  }
  GoBack() {
      this.navCtrl.setRoot('HomePage');
    }
  GoMapA(){
      this.navCtrl.setRoot('MapaBlocoAPage');
  }
}
