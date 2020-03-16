import { Component } from '@angular/core';
import {LoadingController, NavController, NavParams, IonicPage} from 'ionic-angular';
import { MarketplaceHome }      from '../marketplace-home/marketplace-home';
import {FisherRolePage} from "../fisher-role/fisher-role";
import { TenantServiceProvider } from '../../providers/tenant-service';

@IonicPage({
    segment: 'tenant/:tenant',
    defaultHistory: ['TenantSelectionPage']
})
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    constructor( public navCtrl: NavController, private navParams: NavParams, public loadingCtrl: LoadingController, private tenantService: TenantServiceProvider) {

    }

    ionViewWillEnter() {
        if (!this.navParams.data.tenant) {
            this.navParams.data.tenant = 'rsa';
        }
        const tenantKey = this.navParams.get('tenant');
        this.setTenantByKey(tenantKey);
    }

    async setTenantByKey(tenantKey: string) {
        this.tenantService.selectedTenant = await this.tenantService.getTenant(tenantKey);
        if (!this.tenantService.selectedTenant) {
            this.changeTenant();
        }
    }

    onSelectFisherRegistration(){
        this.navCtrl.push(FisherRolePage);
    }

    onSelectMarketplaceRegistration(){
        this.navCtrl.push(MarketplaceHome);
    }

    get tenantName(): string {
        return this.tenantService.selectedTenant? this.tenantService.selectedTenant.label : '';
    }

    changeTenant() {
        this.navCtrl.setRoot('TenantSelectionPage');
    }

}//end class homepage
