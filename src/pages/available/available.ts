import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-available',
  templateUrl: 'available.html'
})
export class AvailablePage {
  
  tables = [];

  constructor(public navCtrl: NavController, private storage: Storage) {
    storage.get('tables').then((data) => {
        this.tables = data.filter(obj => obj.available === true);
      });

    // this.storage.set('tables', this.tables);
  }

  itemTapped($event, table) {
    // let tappedTable = this.tables.find(obj => obj.id === table.id);
    // tappedTable.available = false;
    // console.log("reservando", tappedTable);

    let updatedTables = this.tables.map(obj => {
      if (obj.id === table.id) {
        obj.available = false;
      }
      return obj;
    });
    console.log(updatedTables);
    this.storage.set('tables', updatedTables);
  }

}
