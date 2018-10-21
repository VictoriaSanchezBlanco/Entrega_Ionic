import { Component } from '@angular/core';
import { NavController} from 'ionic-angular';
import { ConsolesPage } from "../consoles/consoles";

@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage { 

constructor(public navCtrl: NavController) {

}

gotoconsole(){
  this.navCtrl.push(ConsolesPage);
}

}




