import {Component, NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';

//Imported services
import{FisherService} from "../../providers/FisherService";
import {PersonalInfoClass} from "../../classes/personal_info_class";
import{Fisher} from "../../classes/fisher-class";
import {FisherRegisterSuccessPage} from "../fisher-register-success/fisher-register-success";
import {FisherNotUniquePage} from "../fisher-not-unique/fisher-not-unique";
import {FisherRegisterFailurePage} from "../fisher-register-failure/fisher-register-failure";
import {HttpClient} from "@angular/common/http";


@IonicPage()
    @Component({
              selector: 'page-fisher-confirm',
              templateUrl: 'fisher-confirm.html',
    })


    export class FisherConfirmPage {
    //user details are propagated from personal details page through the community page to this final page
    //passed as navParams upon opening a new page
    public confirm_info: PersonalInfoClass = new PersonalInfoClass();
    fisher: Fisher;

    private captchaPassed: boolean = false;
    private captchaResponse: string;

    constructor( public loadingCtrl: LoadingController,
                 public navParams: NavParams,
                 public fisherService: FisherService,
                 public navController: NavController,
                 private http: HttpClient,
                 private zone: NgZone) {
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad FisherConfirmPage');
        this.confirm_info.personal_surname      = this.navParams.get('surname');
        this.confirm_info.personal_firstname    = this.navParams.get('firstname');
        this.confirm_info.personal_IDnum        = this.navParams.get('IDnum');
        this.confirm_info.personal_cellNo       = this.navParams.get('cellNo');
    }

    onFisherSubmit() {

      //TODO - consider improving such that the pages persists the data in storage so user can come back and edit
      // TODO - currently, if registration fails, user has to start all over again

      //TODO - The loading controller works perfect but the the spinner is not showing
      let reg = this.loadingCtrl.create({
        spinner             : 'Show iOS',
        content             : 'Registration in progress..',
        dismissOnPageChange : true,
        showBackdrop        : true

      });

      reg.present();

      this.fisher = this.fisherService.fisherBuild();

      this.fisherService.checkIfFisherAlreadyExists(this.fisher.id)//first promise check if the ID number has already been taken
        .then(()=>{//ID is unique
          //Go ahead and attempt to register unique fisher
          //alert('ID number is unique');
          // this.fisherService.registerFisher(this.fisher)//attempts to register user
          Promise.reject('hello')
            .then (()=> {

              //alert('User registration successful');
              this.navController.push(FisherRegisterSuccessPage);
            })
            .catch( ()=>{//failure to register , but ID is unique
              //alert('User registration failed');
              this.navController.push(FisherRegisterFailurePage, this.confirm_info);

            })
        })
        .catch(()=>{//ID number already taken
          //.alert('ID number already exists');
          this.navController.push(FisherNotUniquePage);
        })
    }//end method onFisherSubmit

    captchaResolved(response: string): void {
      console.log(`captchaResolved`);
      console.log(response);
      this.zone.run(() => {
        // If the recaptcha expired then reset the state
        if (response) {
          this.captchaPassed = true;
        }
        else {
          this.captchaPassed = false;
        }
        this.captchaResponse = response;
      });
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

        console.log(`Validating captcha`);
        this.http.post('https://server.abalobi.org/api/users/recaptcha', data).toPromise().then(res => {
            resolve();
          },
          error => {
            console.log(`Got error`);
            reject("Failed validating reCAPTCHA with server. Please try refreshing page");
          });
      }
    })
  }


  }//end class
