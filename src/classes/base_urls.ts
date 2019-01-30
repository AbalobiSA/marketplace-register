export class BaseUrls {
    marketplaceCheckUserURL :string;
    marketplaceAddUserURL   :string;
    fisherCheckUserIDurl    :string;
    fisherAddUserURL        :string;
    testPostURL             :string;

    constructor() {
        this.marketplaceCheckUserURL = "https://market.abalobi.org/api/users/find/?username=";
        this.marketplaceAddUserURL   = "https://market.abalobi.org/api/users/create/";
        this.fisherCheckUserIDurl    = "http://server.abalobi.org/api/users/id/checkidexists?id=";
        this.fisherAddUserURL        = "https://server.abalobi.org/register";
        this.testPostURL             = "http://server.abalobi.org/api/testpost";
    }
}
