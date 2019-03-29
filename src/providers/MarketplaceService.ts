import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import{BaseUrls} from "../classes/base_urls";

@Injectable()
export class MarketplaceService {

urls: BaseUrls = new BaseUrls();

  constructor(private http: HttpClient) {

  }

  checkIfUserAlreadyExists(username: string): Promise<any> {
    return this.http.get(this.urls.marketplaceCheckUserURL + username).toPromise();
  }

  registerUser(user): Promise<any> {
    return this.http.post(this.urls.marketplaceAddUserURL, user).toPromise();
  }

  getUserTypes(): Promise<any> {
    return this.http.get(this.urls.marketplaceGetUserTypesURL).toPromise();
  }
}


