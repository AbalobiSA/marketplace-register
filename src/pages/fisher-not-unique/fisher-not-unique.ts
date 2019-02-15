import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";


@Component({
  selector: 'page-fisher-not-unique',
  templateUrl: 'fisher-not-unique.html',
})
export class FisherNotUniquePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FisherNotUniquePage');
  }

    onbackToHome(){
        this.navCtrl.push(HomePage);
    }

}
