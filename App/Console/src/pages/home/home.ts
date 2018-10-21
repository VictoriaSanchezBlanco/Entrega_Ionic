import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ListgamesPage } from '../listgames/listgames';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  gotogames(){
    this.navCtrl.push(ListgamesPage);
  }
}
