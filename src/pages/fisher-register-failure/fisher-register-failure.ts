import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {FisherConfirmPage} from "../fisher-confirm/fisher-confirm";
import {PersonalInfoClass} from "../../classes/personal_info_class";

@IonicPage()
@Component({
  selector: 'page-fisher-register-failure',
  templateUrl: 'fisher-register-failure.html',
})



export class FisherRegisterFailurePage {
  public confirm_info: PersonalInfoClass = new PersonalInfoClass();
  confirm_personal        : Object = new Object();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FisherRegisterFailurePage');
    this.confirm_info.personal_surname      = this.navParams.get('personal_surname');
    this.confirm_info.personal_firstname    = this.navParams.get('personal_firstname');
    this.confirm_info.personal_IDnum        = this.navParams.get('personal_IDnum');
    this.confirm_info.personal_cellNo       = this.navParams.get('personal_cellNo');

    this.confirm_personal = {
      surname     : <string> this.navParams.get('personal_surname'),
      firstname   : <string> this.navParams.get('personal_firstname'),
      IDnum       : <string> this.navParams.get('personal_IDnum'),
      cellNo      : <string> this.navParams.get('personal_cellNo'),
    };

    console.log("Confirm info: ", this.confirm_info);
  }


    onbackToHome(){
        this.navCtrl.push(HomePage);
    }

    onRetry() {
        this.navCtrl.push(FisherConfirmPage, this.confirm_personal);
    }
}
