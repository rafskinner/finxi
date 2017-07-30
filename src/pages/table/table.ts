import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {

  private allTables: any;
  table: any;

  constructor(public navCtrl: NavController, public navPrms: NavParams, private storage: Storage) {
    this.table = this.navPrms.data;
  }

  ionViewWillEnter() {
    this.storage.get('tables').then((data) => {
      this.allTables = data;     
    });
  }

  saveOrder() {
    let updatedTables = this.allTables.map(obj => {
      if (obj.id === this.table.id) {
        obj.order = this.table.order;
      }
      return obj;
    });
    
    this.allTables = updatedTables;
    this.storage.set('tables', this.allTables);
  }

  itemTapped($event, table) {
    let updatedTables = this.allTables.map(obj => {
      if (obj.id === this.table.id) {
        obj.available = true;
        obj.order = "";
      }
      return obj;
    });
    
    this.allTables = updatedTables;
    this.storage.set('tables', this.allTables);
    this.navCtrl.pop();
  }
}
