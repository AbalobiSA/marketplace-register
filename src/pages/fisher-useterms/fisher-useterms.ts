import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//Imported page classes
import {FisherPersonalPage} from "../fisher-personal/fisher-personal";

//Imported services
import{FisherService} from "../../providers/FisherService";

//Imported non-page classes
import {FisherUsetermsClass} from "../../classes/fisher-useterms_class";
import {FormBuilder, Validators} from "@angular/forms";

@IonicPage()
@Component({
  selector: 'page-fisher-useterms',
  templateUrl: 'fisher-useterms.html',
})
export class FisherUsetermsPage {

        terms    : string;
        terms_afr: string;

        display_afr: boolean = true;

        terms_status    : FisherUsetermsClass = new FisherUsetermsClass ();
        termsForm:any;
        validation_messages = {
            'agree': [
                {type: 'required', message: 'Check "*I Agree" to accept the terms above.'},
            ],
        }


        constructor (public navCtrl: NavController, public navParams: NavParams, public fisherService : FisherService, public formBuilder: FormBuilder) {
                this.termsForm = this.formBuilder.group({
                        'agree': ['', Validators.requiredTrue],
                })
                this.termsForm.reset('agree');//reset the checkbox upon creation
        }

        ionViewDidLoad() {
            console.log('Loading Terms & Conditions');
            this.terms = this.fisherService.terms.terms;
            this.terms_afr = this.fisherService.terms.terms_afr;
            // this.fisherService.fisherGetTerms()
            // .then((result: any) => {
            //     this.terms = result.terms;
            //     this.terms_afr = result.terms_afr;
            //     console.log(this.terms);
            // }).catch(error => {
            //     console.log("Failed getting Ts&Cs: ", error);
            // });
        }

        onFisherFinishTerms(){
                this.fisherService.fisherUpdateTerms(this.terms_status)
                this.navCtrl.push(FisherPersonalPage);
        }

        termsChanged(){
                this.terms_status.terms_use_agreed = this.termsForm.get('agree').value;
        }

        clickToggle() {
                this.display_afr = !this.display_afr;
        }

        getText() {
                return this.display_afr ? 'Read in English' : 'Lees in Afrikaans';
        }
}//end class
