import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ConsolesservicesProvider} from '../../providers/consolesservices/consolesservices';


@Component({
  selector: 'page-crud1',
  templateUrl: 'crud1.html'
})
export class Crud1Page {

  list:FormGroup;
  constructor(public navCtrl: NavController,public fb: FormBuilder, public consolesservices: ConsolesservicesProvider) {
    this.list = this.fb.group({
      name: ['', [Validators.required]],
      date: ['', [Validators.required]],
      feature: ['', [Validators.required]],
      games: ['', [Validators.required]]   
    });
  }

  addConsoles(){
    var consol = {
      name: this.list.get('name').value,
      date: this.list.get('date').value,
      feature: this.list.get('feature').value,
      games: this.list.get('games').value
    }
    this.consolesservices.addConsoles(consol).subscribe( 
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

}