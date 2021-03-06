/**
 * Generated class for the MarketplaceHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import {Component, NgZone} from '@angular/core';
import {LoadingController, NavController} from 'ionic-angular';
import {MarketplaceService} from "../../providers/MarketplaceService";
import {HttpClient} from '@angular/common/http';
import {AfterRegisterPage} from "../after-register/after-register";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'page-marketplace-home',
  templateUrl: 'marketplace-home.html'
})
export class MarketplaceHome {

  // ngModel variables
  email: string;
  password: string;
  repeat_password: string;
  name: string;
  surname: string;
  cell_number: string;
  name_of_establishment: string;
  // company_details: string;
  extra_email_1: string;
  extra_email_2: string;
  extra_email_3: string;
  extra_email_4: string;
  extra_email_5: string;
  company_name: string;
  vat_number: string;
  address: string;
  city: string;
  postal_code: string;
  instagram_handle: string;
  location_address: string;
  location_city: string;
  location_postal_code: string;

  // loading progress dialog
  loading: any;
  loaderShowing = false;

  myGroup: any;
  userTypes: any;

  matchingAddresses = false;

  private captchaPassed: boolean = false;
  private captchaResponse: string;

  personalForm: any;

  constructor(public loadingCtrl: LoadingController,
              public  marketplaceService: MarketplaceService,
              public navCtrl: NavController,
              private http: HttpClient, private zone: NgZone,
              public formBuilder: FormBuilder) {
    this.myGroup = new FormGroup({
      selectedItem: new FormControl()
    });
    this.personalForm = this.formBuilder.group({
      selectedItem: [undefined],
    });

  // private addItemForm = this.formBuilder.group({
  //     selectedItem: ['individual'],
  //   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketplaceHome');
    this.showLoader('Loading user types');
    this.marketplaceService.getUserTypes().then(result => {
      this.userTypes = result;
      this.dismissLoader();
      console.log(this.personalForm.value.selectedItem);
      console.log(result);
    }).catch(error => {
      console.log("Error: ", error);
    });
  }

  // called from the UI when the register button has been clicked
  registerBtnClick() {
    // validate the user's input
    this.validate().then(() => {

      // TODO: Re-enable this again when the time comes
      // validate the captcha
      //   return this.validateCaptcha();
      // }).then(() => {

      // after validation -> attempt to register the user
      this.showLoader('Submitting your details');
      return this.register();
    }).then(() => {

      // on succesful registration -> alert the user
      // alert("You have successfully been registered with ABALOBI Marketplace");

      // clear fields
      this.email = null;
      this.password = null;
      this.repeat_password = null;
      this.name = null;
      this.surname = null;
      this.cell_number = null;
      this.name_of_establishment = null;
      // this.company_details = null;
      this.extra_email_1 = null;
      this.extra_email_2 = null;
      this.extra_email_3 = null;
      this.extra_email_4 = null;
      this.extra_email_5 = null;
      this.company_name = null;
      this.vat_number = null;
      this.address = null;
      this.city = null;
      this.postal_code = null;
      this.instagram_handle = null;
      this.location_address = null;
      this.location_city = null;
      this.location_postal_code = null;

      // navigate to the successful sign up page
      this.navCtrl.push(AfterRegisterPage);

      this.dismissLoader();

    }).catch((error) => {
      // alert the user to any errors that may have occurred
      alert(error);
      this.dismissLoader();
    })
  }

  validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  validatePassword(password) {
    let hasNumber = false;
    for (let i = 0; i < password.length; i++) {
      if (password[i] === '0' || password[i] === '1' || password[i] === '2' || password[i] === '3' || password[i] === '4' || password[i] === '5'|| password[i] === '6'|| password[i] === '7'|| password[i] === '8'|| password[i] === '9') {
        hasNumber = true;
        break;
      }
    }
    if (password.length < 6 || !hasNumber) {
      return false;
    }
    return true;
  }

  validateCaptcha(): Promise<any> {
    return new Promise((resolve, reject) => {
      if (!this.captchaPassed) {
        reject(`Please tick the "I'm not a robot" box at the bottom`);
      }
      else {
        let data = {
          captchaResponse: this.captchaResponse
        };

        this.http.post('https://server.abalobi.org/api/users/recaptcha', data).toPromise().then(() => {
            resolve();
          },
          () => {
            console.log(`Got error`);
            reject("Failed validating reCAPTCHA with server. Please try refreshing page");
          });
      }
    })
  }

  trimFields() {
    // Trim all fields
    if (this.email) {
      this.email = this.email.trim();
    }
    if (this.password) {
      this.password = this.password.trim();
    }
    if (this.repeat_password) {
      this.repeat_password = this.repeat_password.trim();
    }
    if (this.name) {
      this.name = this.name.trim();
    }
    if (this.surname) {
      this.surname = this.surname.trim();
    }
    if (this.cell_number) {
      this.cell_number = this.cell_number.trim();
    }
    if (this.name_of_establishment) {
      this.name_of_establishment = this.name_of_establishment.trim();
    }
    if (this.extra_email_1) {
      this.extra_email_1 = this.extra_email_1.trim();
    }
    if (this.extra_email_2) {
      this.extra_email_2 = this.extra_email_2.trim();
    }
    if (this.extra_email_3) {
      this.extra_email_3 = this.extra_email_3.trim();
    }
    if (this.extra_email_4) {
      this.extra_email_4 = this.extra_email_4.trim();
    }
    if (this.extra_email_5) {
      this.extra_email_5 = this.extra_email_5.trim();
    }
    if (this.company_name) {
      this.company_name = this.company_name.trim();
    }
    if (this.vat_number) {
      this.vat_number = this.vat_number.trim();
    }
    if (this.address) {
      this.address = this.address.trim();
    }
    if (this.city) {
      this.city = this.city.trim();
    }
    if (this.postal_code) {
      this.postal_code = this.postal_code.trim();
    }
    if (this.instagram_handle) {
      this.instagram_handle = this.instagram_handle.trim();
    }
  }

  // validates the user on the client and server side to ensure that they can be registered
  validate(): Promise<any> {
    // if (!this.validateCaptcha())
    //   return Promise.reject("Failed validating captcha.  Please try refreshing page");

    return new Promise((resolve, reject) => {
      this.trimFields();

      let user_type = this.personalForm.get("selectedItem").value;
      console.log(`user_type = ${user_type}`);
      if (user_type === 'individual') {
        this.name_of_establishment = `CSF ${this.name} ${this.surname}`;
        this.company_name = `CSF ${this.name} ${this.surname}`;
      }

      if (this.matchingAddresses) {
        this.location_address = this.address;
        this.location_city = this.city;
        this.location_postal_code = this.postal_code;

        if (!(this.city)) {
          reject("Please fill in Town/City as it is required for physical location");
        }
      }

      // check that all fields are filled in
      if (!(this.email && this.password && this.name && this.surname && this.cell_number && this.name_of_establishment && this.company_name && user_type && this.location_city)) {
        reject("Please fill in all required fields (marked with an '*')");
      }

      // Validate e-mail address(es)
      if (!this.validateEmail(this.email)) {
        reject("Please use a valid e-mail address");
      }

      if (!this.validatePassword(this.password)) {
        reject('Password must be at least 6 characters long and include a number');
      }

      if (this.extra_email_1) {
        if (!this.validateEmail(this.extra_email_1)) {
          reject("Please use a valid e-mail address for notifications e-mail 1");
        }
      }

      if (this.extra_email_2) {
        if (!this.validateEmail(this.extra_email_2)) {
          reject("Please use a valid e-mail address for notifications e-mail 2");
        }
      }

      if (this.extra_email_3) {
        if (!this.validateEmail(this.extra_email_3)) {
          reject("Please use a valid e-mail address for notifications e-mail 3");
        }
      }

      if (this.extra_email_4) {
        if (!this.validateEmail(this.extra_email_4)) {
          reject("Please use a valid e-mail address for notifications e-mail 4");
        }
      }

      if (this.extra_email_5) {
        if (!this.validateEmail(this.extra_email_5)) {
          reject("Please use a valid e-mail address for notifications e-mail 5");
        }
      }

      // check that the passwords match
      if (this.password !== this.repeat_password) {
        reject("The passwords you have entered do not match");
      }

      // rudimentarily check that the cell number is valid
      if (this.cell_number.length < 2 || isNaN(parseFloat(this.cell_number)) || this.cell_number[0] !== '+') {
        reject("Please enter a valid phone number. Phone numbers should be in international format Example: +27821234567");
      }

      // check that the user does not already exist
      this.marketplaceService.checkIfUserAlreadyExists(this.email).then((user) => {
        if (user[0]) {
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
    console.log(`Register clicked: VAT number = ${this.vat_number}`);
    if (!this.vat_number) {
      this.vat_number = '-';
    }

    let user_type = this.personalForm.get("selectedItem").value;

    const user = {
      username: this.email,
      password: this.password,
      firstname: this.name,
      lastname: this.surname,
      h2c_buyer_company: this.name_of_establishment,
      // buyer_details : this.company_details.split("\n"),
      buyer_details: {
        company_name: this.company_name,
        vat_number: this.vat_number,
        address: this.address,
        city: this.city,
        postal_code: this.postal_code
      },
      sellerEnabled: false,
      abalobiId: null,
      cell_number: this.cell_number,
      instagram_handle: this.instagram_handle,
      approved: false,
      buyer_notifications: {
        extra_invoice_1: this.extra_email_1,
        extra_invoice_2: this.extra_email_2,
        extra_qr_1: this.extra_email_3,
        extra_qr_2: this.extra_email_4,
        extra_qr_3: this.extra_email_5
      },
      location: {
        lat: null,
        lon: null,
        loc_address: this.location_address,
        loc_city: this.location_city,
        loc_postal_code: this.location_postal_code
      },
      user_type: user_type
    };

    return this.marketplaceService.registerUser(user).then(() => {
      return Promise.resolve();
    }).catch((error) => {
      console.log("Error: ", error);
      return Promise.reject(error);
    });
  }

  showLoader(msg: string) {
    this.loading = this.loadingCtrl.create({
      content: msg
    });
    this.loading.present();
    this.loaderShowing = true;
  }

  dismissLoader() {
    if (this.loaderShowing) {
      this.loading.dismiss();
      this.loaderShowing = false;
    }
  }

  captchaResolved(response: string): void {
    console.log(`captchaResolved`);
    console.log(response);
    this.zone.run(() => {
      // If the recaptcha expired then reset the state
      this.captchaPassed = !!response;
      this.captchaResponse = response;
    });
  }

}
