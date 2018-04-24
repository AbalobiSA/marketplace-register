import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {MarketplaceService} from "../../providers/MarketplaceService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  email: string;
  password: string;
  repeat_password: string;
  name: string;
  surname: string;
  cell_number: string;
  name_of_establishment: any;
  company_details: string;
  loading: any;

  constructor(public loadingCtrl: LoadingController,
              public  marketplaceService: MarketplaceService) {

  }

  registerBtnClick() {

    // validate the user's input
    this.validate().then(() => {

      return this.register();
    }).then(() => {
      alert("You have successfully been registered with ABALOBI Marketplace");
    }).catch((error) => {
      // alert the user to any errors that may have occurred
      alert(error);
    })
  }

  // validates the user on the client and server side to ensure that they can be registered
  validate(): Promise<any> {

    this.showLoader('Checking to see if you can be registered...');

    return new Promise((resolve, reject) => {

      // check that all fields are filled in
      if(!(this.email && this.password && this.name && this.surname && this.cell_number && this.name_of_establishment && this.company_details)) {
        reject("Please fill in all the fields");
      }

      // check that the passwords match
      if(this.password !== this.repeat_password) {
        reject("The passwords you have entered do not match");
      }

      // rudimentarily check that the cell number is valid
      if(this.cell_number.length !== 10 || isNaN(parseFloat(this.cell_number))) {
        reject("Please enter a valid phone number");
      }

      // all checks passed on the client side
      resolve();

    }).then(() => {

      // check that the user does not already exist
      return this.marketplaceService.checkIfUserAlreadyExists();
    }).then((userAlreadyExists) => {

      if(userAlreadyExists) {
        throw("The given email address has already been registered with ABALOBI Marketplace");
      }

      // all checks passed on the server side
      this.dismissLoader();
      return Promise.resolve();

    }).catch((error) => {

      this.dismissLoader();
      return Promise.reject(error);
    });
  }

  // attempts to register the user on the marketplace
  register() {
    return this.marketplaceService.registerUser().then(() => {
      return Promise.resolve();
    }).catch((error) => {

      return Promise.reject(error);
    });
  }

  showLoader(msg: string) {
    this.loading = this.loadingCtrl.create({
      content: msg
    });
  }

  dismissLoader() {
    this.loading.dismiss();
  }

}
