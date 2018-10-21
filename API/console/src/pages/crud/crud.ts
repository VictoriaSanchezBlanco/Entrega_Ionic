import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Crud1Page } from "../crud1/crud1";
import { Crud2Page } from "../crud2/crud2";


@Component({
  selector: 'page-crud',
  templateUrl: 'crud.html'
})
export class CrudPage {
  constructor(public navCtrl: NavController) {

  }

  gotoadd(){
    this.navCtrl.push(Crud1Page);
  }

  gotodelete(){
    this.navCtrl.push(Crud2Page);
  }

  
}
