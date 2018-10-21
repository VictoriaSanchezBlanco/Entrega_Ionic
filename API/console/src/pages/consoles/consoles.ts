import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConsolesservicesProvider} from '../../providers/consolesservices/consolesservices';

@Component({
  selector: 'page-consoles',
  templateUrl: 'consoles.html'
})
export class ConsolesPage {
  
  consoles:any; 

  constructor(public navCtrl: NavController, public consolesservices: ConsolesservicesProvider) {

  }

  ionViewDidLoad(){
    this.consolesservices.getConsoles().subscribe((data )=>{
        this.consoles=data;
    });
    console.log('ionViewDidLoad ConsolesPage');
  }

}
