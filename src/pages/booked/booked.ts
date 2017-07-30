import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from "@ionic/storage";
import { TablePage } from "../table/table";

@Component({
  selector: 'page-booked',
  templateUrl: 'booked.html'
})
export class BookedPage {

  // private stg: any;
  private allTables: any;
  tables = [];

  constructor(public navCtrl: NavController, private storage: Storage) {
    // this.stg = storage;
    
  }

  ionViewWillEnter() {
    this.storage.get('tables').then((data) => {
      this.allTables = data;
      this.tables = data.filter(obj => obj.available === false);      
    });
  }

  itemTapped($event, table) {
    this.navCtrl.push(TablePage, table);
    // let tappedTable = this.tables.find(obj => obj.id === table.id);
    // tappedTable.available = true;
    // console.log("liberando", tappedTable);
  }

}
