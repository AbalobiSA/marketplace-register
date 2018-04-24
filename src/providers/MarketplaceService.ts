import {Injectable} from "@angular/core";

@Injectable()
export class MarketplaceService {
  constructor() {

  }

  checkIfUserAlreadyExists() {
    return false;
  }

  registerUser(): Promise<any> {
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
