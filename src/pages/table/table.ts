import { Component } from '@angular/core';
import { NavController, NavParams, ToastController } from 'ionic-angular';

import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-table',
  templateUrl: 'table.html',
})
export class TablePage {

  private allTables: any;
  table: any;

  constructor(public navCtrl: NavController, public navPrms: NavParams, private storage: Storage, public toastCtrl: ToastController) {
    this.table = this.navPrms.data;
  }

  ionViewWillEnter() {
    this.storage.get('tables').then((data) => {
      this.allTables = data;     
    });
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 2000,
      position: "top",
      showCloseButton: true,
      closeButtonText: "X"
    });
    toast.present();
  }

  saveOrder() {
    let msg = "Pedido Realizado.";
    this.presentToast(msg);

    let updatedTables = this.allTables.map(obj => {
      if (obj.id === this.table.id) {
        obj.order = this.table.order;
        if (this.table.order !== "") {
          
        }
      }
      return obj;
    });

    this.allTables = updatedTables;
    this.storage.set('tables', this.allTables);
    this.navCtrl.pop();
  }

  itemTapped($event, table) {
    let msg = table.label + " Liberada.";
    this.presentToast(msg);

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
