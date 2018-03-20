import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';

@IonicPage()
@Component({
  selector: 'page-info',
  templateUrl: 'info.html',
})
export class InfoPage {
  constructor(public navCtrl: NavController, private nativePageTransitions: NativePageTransitions) {
  }

  GoBack() {
    this.navCtrl.setRoot('HomePage');
  
  }
}
