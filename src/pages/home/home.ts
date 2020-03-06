import { Component} from '@angular/core';
import {LoadingController, NavController, NavParams, IonicPage} from 'ionic-angular';
import { MarketplaceHome }      from '../marketplace-home/marketplace-home';
import {FisherRolePage} from "../fisher-role/fisher-role";

@IonicPage({
    segment: ':tenant'
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor( public navCtrl: NavController, private navParams: NavParams, public loadingCtrl: LoadingController) {

    }

    ionViewDidLoad() {
        if (!this.navParams.data.tenant) {
            this.navParams.data.tenant = 'rsa';
        }
    }

    onSelectFisherRegistration(){
        this.navCtrl.push(FisherRolePage);
    }

    onSelectMarketplaceRegistration(){
        this.navCtrl.push(MarketplaceHome);
    }

}//end class homepage
