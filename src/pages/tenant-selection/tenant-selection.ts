import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TenantServiceProvider } from '../../providers/tenant-service';
import { FormControl, Validators } from '@angular/forms';

@IonicPage({
    segment: 'tenant'
})
@Component({
    selector: 'page-tenant-selection',
    templateUrl: 'tenant-selection.html',
})
export class TenantSelectionPage {
    public explanationText: string;
    public isLoadingTenants: boolean;
    public tenantArr: Array<any>;
    public selectedTenant = new FormControl('', Validators.required);
    public errorLoadingTenants: boolean;

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public tenantService: TenantServiceProvider
    ) {
        this.explanationText = "Where will you be using ABALOBI services?";
        this.fetchTenants();
    }

    async fetchTenants() {
        this.isLoadingTenants = true;
        try {
            this.tenantArr = await this.tenantService.getTenants();
        } catch (err) {
            this.errorLoadingTenants = true;
        }
        this.isLoadingTenants = false;
    }

    clickNext() {
        this.navCtrl.push('HomePage', {
            tenant: this.selectedTenant.value
        });
    }

    retryFetchTenants() {
        this.errorLoadingTenants = false;
        this.fetchTenants();
    }
}
