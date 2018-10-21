import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Component({
  selector: 'page-preference',
  templateUrl: 'preference.html'
})
export class PreferencePage {

  gaming: string = "n64";
  gender: string = "f";
  os: string;
  music: string;
  month: string;
  year: number;

  musicAlertOpts: { title: string, subTitle: string };

  constructor(public alerCtrl: AlertController) {
    this.musicAlertOpts = {
      title: '1994 Music',
      subTitle: 'Select your favorite'
    };
  }

  stpSelect() {
    console.log('STP selected');
  }

  doAlert() {
    let alert = this.alerCtrl.create({
      title: 'Thanks for giving us your opinion',
      buttons: ['Ok']
    });
    alert.present()
  }

}
