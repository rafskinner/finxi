import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { Storage } from "@ionic/storage";

@Component({
  selector: 'page-available',
  templateUrl: 'available.html'
})
export class AvailablePage {
  
  private allTables: any;
  tables = [];

  constructor(public navCtrl: NavController, private storage: Storage, private toastCtrl: ToastController) {

  }

  ionViewWillEnter() {
    this.storage.get('tables').then((data) => {
      this.allTables = data;
      this.tables = data.filter(obj => obj.available === true);      
    });
  }

  presentToast(table) {
    let toast = this.toastCtrl.create({
      message: table.label + " Reservada.",
      duration: 2000,
      position: "top",
      showCloseButton: true,
      closeButtonText: "X"
    });
    toast.present();
  }

  itemTapped($event, table) {
    this.presentToast(table);

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
