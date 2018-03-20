import { Component } from '@angular/core';
import { IonicPage, NavController, Platform} from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-bloco-c',
  templateUrl: 'bloco-c.html',
})
export class BlocoCPage {

  constructor(public navCtrl: NavController, platform: Platform) {
    platform.registerBackButtonAction(() => {
      this.GoBack();
    },1);
  }

  GoBack() {
    this.navCtrl.setRoot('HomePage');
  }
  GoMapC(){
    this.navCtrl.setRoot('MapaBlocoCPage');
  }
}
