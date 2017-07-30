import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {

  table: any;

  constructor(public navCtrl: NavController, public navPrms: NavParams) {
    this.table = this.navPrms.data;
  }

}
