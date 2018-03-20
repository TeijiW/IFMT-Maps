import { Component } from '@angular/core';
import { IonicPage, NavController, Platform} from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-bloco-d',
  templateUrl: 'bloco-d.html',
})
export class BlocoDPage {

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.registerBackButtonAction(() => {
      this.GoBack();
    },1);
  }

  GoBack() {
    this.navCtrl.setRoot('HomePage');
  }
  GoMapD(){
    this.navCtrl.setRoot('MapaBlocoDPage');
  }
}
