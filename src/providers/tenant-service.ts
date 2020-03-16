import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
    Generated class for the TenantServiceProvider provider.

    See https://angular.io/guide/dependency-injection for more info on providers
    and Angular DI.
*/
@Injectable()
export class TenantServiceProvider {
    public selectedTenant: any;
    private tenantsUrl: string = 'https://api-staging.abalobi.org/v1/tenants';
    private TENANT_DB: Array<any> = [
        {
            "key" : "rsa",
            "label" : "South Africa"
        },
        {
            "key" : "sey",
            "label" : "Seychelles"
        },
        {
            "key" : "demo",
            "label" : "Demo"
        },
        {
            "key" : "test",
            "label" : "Test"
        },
        {
            "key" : "per",
            "label" : "Peru"
        },
        {
            "key" : "com",
            "label" : "Comoros"
        },
        {
            "key" : "gbr",
            "label" : "United Kingdom"
        },
        {
            "key" : "esp",
            "label" : "Spain"
        }
    ];

    constructor(private http: HttpClient) {
    }

    async getTenants() {
        const tenantsData: any = await this.http.get(this.tenantsUrl).toPromise();
        return tenantsData.data;
        // return this.TENANT_DB;
    }

    async getTenant(tenantKey: string) {
        const tenantsArr = await this.getTenants();
        return tenantsArr.find(tenant => tenant.key === tenantKey);
    }

}
