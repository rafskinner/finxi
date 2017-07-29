import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from "@ionic/storage";

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;

  tables = [
    {id: 1, label: "Mesa 1", available: true, order: ""},
    {id: 2, label: "Mesa 2", available: true, order: ""},
    {id: 3, label: "Mesa 3", available: true, order: ""},
    {id: 4, label: "Mesa 4", available: true, order: ""},
    {id: 5, label: "Mesa 5", available: true, order: ""},
    {id: 6, label: "Mesa 6", available: true, order: ""},
    {id: 7, label: "Mesa 7", available: true, order: ""},
    {id: 8, label: "Mesa 8", available: false, order: ""}
  ];

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.storage.set('tables', this.tables);


    });
  }

}
