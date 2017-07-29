import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  tables = [
    {id: 6, label: "Mesa 6", available: false, order: ""},
    {id: 7, label: "Mesa 7", available: false, order: ""},
    {id: 8, label: "Mesa 8", available: false, order: ""}
  ];

  constructor(public navCtrl: NavController) {

  }

  itemTapped($event, table) {
    let tappedTable = this.tables.find(obj => obj.id === table.id);
    tappedTable.available = true;
    console.log("liberando", tappedTable);
  }

}
