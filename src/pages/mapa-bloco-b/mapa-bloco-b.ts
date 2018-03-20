import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mapa-bloco-b',
  templateUrl: 'mapa-bloco-b.html',
})
export class MapaBlocoBPage {
  map: string;
  level: string;

  constructor(public navCtrl: NavController, platform: Platform, public navParams: NavParams) {
    this.map="assets/imgs/B0.svg";
    this.level="Térreo";
    platform.registerBackButtonAction(() => {
      this.GoBackB();
    },1);
  }

  GoBackB() {
    this.navCtrl.setRoot('BlocoBPage');
  }
  ChangetoB0() {
    this.map="assets/imgs/B0.svg"
    this.level="Térreo"
  }
  ChangetoB1() {
    this.map="assets/imgs/B1.svg"
    this.level="Piso 1"
  }

}