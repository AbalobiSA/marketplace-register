import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {MarketplaceService} from "../../providers/MarketplaceService";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // ngModel variables
  email: string;
  password: string;
  repeat_password: string;
  name: string;
  surname: string;
  cell_number: string;
  name_of_establishment: any;
  company_details: string;

  // loading progress dialog
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

      // check that the user does not already exist
      this.marketplaceService.checkIfUserAlreadyExists(this.email).then((user) => {

        if(user[0]) {
          reject("This username is already taken");
        } else {
          this.dismissLoader();
          resolve();
        }
      }).catch((error) => {
        alert(error);
      });

    }).catch((error) => {

      this.dismissLoader();
      return Promise.reject(error);
    });
  }

  // attempts to register the user on the marketplace
  register() {

    this.showLoader('Attempting to register your account...');

    const user = {
      username: this.email,
      password: this.password,
      firstname: this.name,
      lastname: this.surname,
      h2c_buyer_company : this.name_of_establishment,
      buyer_details : [this.company_details],
      sellerEnabled: false,
      abalobiId: null,
      cell_number: this.cell_number
    }

    return this.marketplaceService.registerUser(user).then(() => {
      this.dismissLoader();
      return Promise.resolve();
    }).catch((error) => {
      this.dismissLoader();
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
