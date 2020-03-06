import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TenantServiceProvider } from '../../providers/tenant-service';
import { FormControl } from '@angular/forms';

@IonicPage()
@Component({
    selector: 'page-tenant-selection',
    templateUrl: 'tenant-selection.html',
})
export class TenantSelectionPage {
    public explanationText: string;
    public tenantArr: Array<any>;
    public selectedTenant = new FormControl('');

    constructor(public navCtrl: NavController, public navParams: NavParams, public tenantService: TenantServiceProvider) {
        this.explanationText = "Choose the country you will be situated in when using ABALOBI services";
        this.tenantArr = tenantService.getTenants();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad TenantSelectionPage');
    }

    clickNext() {
        this.navCtrl.push('HomePage', {
            tenant: this.selectedTenant.value
        });
    }
}
