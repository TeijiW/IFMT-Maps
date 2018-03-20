import { Component } from '@angular/core';
import { IonicPage, NavController, Platform} from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-bloco-e',
  templateUrl: 'bloco-e.html',
})
export class BlocoEPage {

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.registerBackButtonAction(() => {
      this.GoBack();
    },1);
  }

  GoBack() {
    this.navCtrl.setRoot('HomePage');
  }
  GoMapE(){
    this.navCtrl.setRoot('MapaBlocoEPage');
  }
}
