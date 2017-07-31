import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-available',
  templateUrl: 'available.html'
})
export class AvailablePage {
  
  // private stg: any;
  private allTables: any;
  tables = [];

  constructor(public navCtrl: NavController, private storage: Storage, private loadingCtrl: LoadingController) {
    // this.stg = storage;

  }

  ionViewWillEnter() {
    this.storage.get('tables').then((data) => {
      this.allTables = data;
      this.tables = data.filter(obj => obj.available === true);      
    });
  }

  presentLoadingDefault() {
    let loading = this.loadingCtrl.create({
      content: 'Reservando Mesa...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 1000);
  }

  itemTapped($event, table) {
    this.presentLoadingDefault();

    let updatedTables = this.allTables.map(obj => {
      if (obj.id === table.id) {
        obj.available = false;
      }
      return obj;
    });
    
    this.allTables = updatedTables;
    this.storage.set('tables', this.allTables);
    this.tables = this.allTables.filter(obj => obj.available === true);
  }

}
