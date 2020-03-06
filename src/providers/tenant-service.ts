import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
    Generated class for the TenantServiceProvider provider.

    See https://angular.io/guide/dependency-injection for more info on providers
    and Angular DI.
*/
@Injectable()
export class TenantServiceProvider {
    public selectedTenant;
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

    constructor(public http: HttpClient) {
        console.log('Hello TenantServiceProvider Provider');
    }

    getTenants() {
        return this.TENANT_DB;
    }

}
