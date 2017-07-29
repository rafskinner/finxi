import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-booked',
  templateUrl: 'booked.html'
})
export class BookedPage {

  tables = [];

  constructor(public navCtrl: NavController, private storage: Storage) {
    storage.get('tables').then((data) => {
      this.tables = data.filter(obj => obj.available === false);      
    });
  }

  itemTapped($event, table) {
    let tappedTable = this.tables.find(obj => obj.id === table.id);
    tappedTable.available = true;
    console.log("liberando", tappedTable);
  }

}
