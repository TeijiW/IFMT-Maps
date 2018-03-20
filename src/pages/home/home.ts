import { Component } from '@angular/core';
import { IonicPage, NavController, Platform } from 'ionic-angular';
import { NativePageTransitions, NativeTransitionOptions} from '@ionic-native/native-page-transitions'


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController,platform: Platform, private nativePageTransitions: NativePageTransitions) {
  }
  

  GoToBlocoA() {
    this.navCtrl.setRoot('BlocoAPage');
  }

  GoToBlocoB() {
    this.navCtrl.setRoot('BlocoBPage');
  }

  GoToBlocoC() {
    this.navCtrl.setRoot('BlocoCPage');
  }

  GoToBlocoD() {
    this.navCtrl.setRoot('BlocoDPage');
  }

  GoToBlocoE() {    
    this.navCtrl.setRoot('BlocoEPage');
  }
  
  GoToBlocoF() {    
    this.navCtrl.setRoot('BlocoFPage');
  }
  GoMapaQuadra(){
    this.navCtrl.setRoot('MapaQuadraPage');
  }

  GoToInfo() {
    this.navCtrl.setRoot('InfoPage');
  }

}
