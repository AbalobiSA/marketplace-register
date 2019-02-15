import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";


@Component({
  selector: 'page-fisher-register-success',
  templateUrl: 'fisher-register-success.html',
})
export class FisherRegisterSuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FisherRegisterSuccessPage');
  }

    onbackToHome(){
    this.navCtrl.push(HomePage);
    }

}
