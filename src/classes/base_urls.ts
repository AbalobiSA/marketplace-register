export class BaseUrls {
    private marketBaseUrl : string;
    private fisherBaseUrl : string;

    constructor() {
        // Set default tenant
        this.setTenant('rsa');
    }

    setTenant(tenantKey: string) {
        if (tenantKey === 'rsa') {
            this.marketBaseUrl = 'https://market.abalobi.org';
            this.fisherBaseUrl = 'https://server.abalobi.org';
        } else {
            this.marketBaseUrl = `https://market-${tenantKey}.abalobi.org`;
            this.fisherBaseUrl = `https://server-${tenantKey}.abalobi.org`;
        }
    }

    get marketplaceCheckUserURL() {
        return `${this.marketBaseUrl}/api/users/find/?username=`;
    }

    get marketplaceAddUserURL() {
        return `${this.marketBaseUrl}/api/users/create/`;
    }

    get marketplaceGetUserTypesURL() {
        return `${this.marketBaseUrl}/api/listings/user-type-list`;
    }

    get fisherCheckUserIDurl() {
        return `${this.fisherBaseUrl}/api/users/id/checkidexists?id=`;
    }

    get fisherGetTermsURL() {
        return `${this.fisherBaseUrl}/api/terms`;
    }

    get fisherGetCommunitiesURL() {
        return `${this.fisherBaseUrl}/api/communities`;
    }

    get fisherAddUserURL() {
        return `${this.fisherBaseUrl}/register`;
    }

    get testPostURL() {
        return `${this.fisherBaseUrl}/api/testpost`;
    }
}
