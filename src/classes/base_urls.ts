export class BaseUrls {
    private tenant : string;

    constructor() {
        // Set default tenant
        this.setTenant('rsa');
    }

    setTenant(tenantKey: string) {
        this.tenant = tenantKey;
    }

    get marketplaceCheckUserURL() {
        return `https://market-${this.tenant}.abalobi.org/api/users/find/?username=`;
    }

    get marketplaceAddUserURL() {
        return `https://market-${this.tenant}.abalobi.org/api/users/create/`;
    }

    get marketplaceGetUserTypesURL() {
        return `https://market-${this.tenant}.abalobi.org/api/listings/user-type-list`;
    }

    get fisherCheckUserIDurl() {
        return `https://server-${this.tenant}.abalobi.org/api/users/id/checkidexists?id=`;
    }

    get fisherGetTermsURL() {
        return `https://server-${this.tenant}.abalobi.org/api/terms`;
    }

    get fisherGetCommunitiesURL() {
        return `https://server-${this.tenant}.abalobi.org/api/communities`;
    }

    get fisherAddUserURL() {
        return `https://server-${this.tenant}.abalobi.org/register`;
    }

    get testPostURL() {
        return `http://server-${this.tenant}.abalobi.org/api/testpost`;
    }
}
