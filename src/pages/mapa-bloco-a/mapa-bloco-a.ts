import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Label, Platform } from 'ionic-angular';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';

/**
 * Generated class for the MapaBlocoAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mapa-bloco-a',
  templateUrl: 'mapa-bloco-a.html',
})
export class MapaBlocoAPage {
  map: string;
  level: string;

  constructor(public navCtrl: NavController, platform:Platform, private nativePageTransitions: NativePageTransitions) {
    this.map="assets/imgs/A0.svg";
    this.level="Térreo";
    platform.registerBackButtonAction(() => {
      this.GoBackA();
    },1);
  }
  GoBackA() {
    this.navCtrl.setRoot('BlocoAPage');
  }

  ChangetoA0() {
    this.map="assets/imgs/A0.svg"
    this.level="Térreo"
  }
  ChangetoA1() {
    this.map="assets/imgs/A1.svg"
    this.level="Piso 1"
  }
  ChangetoA2() {
    this.map="assets/imgs/A2.svg"
    this.level="Piso 2"
  }
}
