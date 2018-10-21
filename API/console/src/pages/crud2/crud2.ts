import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ConsolesservicesProvider} from '../../providers/consolesservices/consolesservices';


@Component({
  selector: 'page-crud2',
  templateUrl: 'crud2.html'
})
export class Crud2Page {
  consoles:any;
  constructor(public navCtrl: NavController, public consolesservices: ConsolesservicesProvider) {

  }

  delete(id){

    this.consolesservices.deleteConsole(id).subscribe( 
      (data) => {
        //Aquí deberías mostrar una ventana modal que dijera que se ha guardado la información
        console.log(data);
      }, 
      (error) => {
        //Aquí deberías mostrar una ventana modal que mostrara un error
        console.log(error);
      }
    );
  }

  ionViewDidLoad(){
    this.consolesservices.getConsoles().subscribe((data )=>{
        this.consoles=data;
    });
    console.log('ionViewDidLoad ConsolesPage');
  }

}