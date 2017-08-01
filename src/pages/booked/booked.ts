import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Storage } from "@ionic/storage";
import { TablePage } from "../table/table";

@Component({
  selector: 'page-booked',
  templateUrl: 'booked.html'
})
export class BookedPage {

  private allTables: any;
  tables = [];

  constructor(public navCtrl: NavController, private storage: Storage) {
    
  }

  ionViewWillEnter() {
    this.storage.get('tables').then((data) => {
      this.allTables = data;
      this.tables = data.filter(obj => obj.available === false);      
    });
  }

  itemTapped($event, table) {
    this.navCtrl.push(TablePage, table);
  }

}
