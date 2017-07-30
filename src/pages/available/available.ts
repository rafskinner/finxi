import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-available',
  templateUrl: 'available.html'
})
export class AvailablePage {
  
  private stg: any;
  private allTables: any;
  tables = [];

  constructor(public navCtrl: NavController, private storage: Storage) {
    this.stg = storage;

  }

  ionViewWillEnter() {
    this.stg.get('tables').then((data) => {
      this.allTables = data;
      this.tables = data.filter(obj => obj.available === true);      
    });
  }

  itemTapped($event, table) {

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
