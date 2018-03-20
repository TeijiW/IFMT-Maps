import { Component } from '@angular/core';
import { Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = 'HomePage';

  constructor(platform: Platform, private statusBar: StatusBar, splashScreen: SplashScreen, private app: App) {
    platform.ready().then(() => {
      statusBar.styleBlackOpaque();
      splashScreen.hide();
    });
  }
}

