import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  tables = [
    {id: 1, label: "Mesa 1", available: true, order: ""},
    {id: 2, label: "Mesa 2", available: true, order: ""},
    {id: 3, label: "Mesa 3", available: true, order: ""},
    {id: 4, label: "Mesa 4", available: true, order: ""},
    {id: 5, label: "Mesa 5", available: true, order: ""}
  ];

  constructor(public navCtrl: NavController) {

  }

  itemTapped($event, table) {
    let tappedTable = this.tables.find(obj => obj.id === table.id);
    tappedTable.available = false;
    console.log("reservando", tappedTable);
  }

}
