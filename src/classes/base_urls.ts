export class BaseUrls {
    marketplaceCheckUserURL    :string;
    marketplaceAddUserURL      :string;
    marketplaceGetUserTypesURL :string;
    fisherCheckUserIDurl       :string;
    fisherGetTermsURL          :string;
    fisherAddUserURL           :string;
    testPostURL                :string;

    constructor() {
        this.marketplaceCheckUserURL    = "https://market.abalobi.org/api/users/find/?username=";
        this.marketplaceAddUserURL      = "https://market.abalobi.org/api/users/create/";
        this.marketplaceGetUserTypesURL = "https://market.abalobi.org/api/listings/user-type-list";
        this.fisherCheckUserIDurl       = "https://server.abalobi.org/api/users/id/checkidexists?id=";
        this.fisherGetTermsURL          = "https://server.abalobi.org/api/terms";
        this.fisherAddUserURL           = "https://server.abalobi.org/register";
        this.testPostURL                = "http://server.abalobi.org/api/testpost";
    }
}
