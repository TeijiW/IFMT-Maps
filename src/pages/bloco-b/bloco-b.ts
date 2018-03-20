import { Component } from '@angular/core';
import { IonicPage, NavController, Platform} from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-bloco-b',
  templateUrl: 'bloco-b.html',
})
export class BlocoBPage {

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.registerBackButtonAction(() => {
      this.GoBack();
    },1);
  }

  GoBack() {
    this.navCtrl.setRoot('HomePage');
  }
  GoMapB(){
    this.navCtrl.setRoot('MapaBlocoBPage');
  }
}