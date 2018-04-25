import { Component } from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {MarketplaceService} from "../../providers/MarketplaceService";
import {AfterRegisterPage} from "../after-register/after-register";

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
  name_of_establishment: string;
  company_details: string;

  // loading progress dialog
  loading: any;

  constructor(public loadingCtrl: LoadingController,
              public  marketplaceService: MarketplaceService,
              public navCtrl: NavController) {

  }

  // called from the UI when the register button has been clicked
  registerBtnClick() {

    this.showLoader('Attempting to register...');

    // validate the user's input
    this.validate().then(() => {
      // after validation -> attempt to register the user
      return this.register();
    }).then(() => {

      // on succesful registration -> alert the user
      alert("You have successfully been registered with ABALOBI Marketplace");

      // clear fields
      this.email = null;
      this.password = null;
      this.repeat_password = null;
      this.name = null;
      this.surname = null;
      this.cell_number = null;
      this.name_of_establishment = null;
      this.company_details = null;

      // navigate to the successful sign up page
      this.navCtrl.push(AfterRegisterPage);

      this.dismissLoader();

    }).catch((error) => {
      // alert the user to any errors that may have occurred
      alert(error);
      this.dismissLoader();
    })
  }

  // validates the user on the client and server side to ensure that they can be registered
  validate(): Promise<any> {

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
          resolve();
        }
      }).catch((error) => {
        console.log(error);
        // alert(error);
      });

    }).catch((error) => {

      return Promise.reject(error);
    });
  }

  // attempts to register the user on the marketplace
  register() {

    const user = {
      username: this.email,
      password: this.password,
      firstname: this.name,
      lastname: this.surname,
      h2c_buyer_company : this.name_of_establishment,
      buyer_details : this.company_details.split("\n"),
      sellerEnabled: false,
      abalobiId: null,
      cell_number: this.cell_number
    }

    return this.marketplaceService.registerUser(user).then(() => {
      return Promise.resolve();
    }).catch((error) => {
      return Promise.reject(error);
    });
  }

  showLoader(msg: string) {
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();
  }

  dismissLoader() {
    this.loading.dismiss();
  }

}
