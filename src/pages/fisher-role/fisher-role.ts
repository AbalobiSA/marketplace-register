import { Component } from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FisherUsetermsPage} from "../fisher-useterms/fisher-useterms";
//Imported service
import{FisherService} from "../../providers/FisherService";
import{FormBuilder, Validators} from "@angular/forms";
import {HomePage} from "../home/home";


@IonicPage()
@Component({
  selector: 'page-fisher-role',
  templateUrl: 'fisher-role.html',
})
export class FisherRolePage {
        role            : string;
        public roleForm : any;
        is_crew                       : boolean;
        is_skipper                    : boolean;
        is_shore_harvester            : boolean;
        is_shore_harvest_group_leader : boolean;
        is_fish_cleaner               : boolean;
        is_quality_control_officer    : boolean;
        is_coastal_product_producer   : boolean;

        validation_messages = {
                'role': [
                        {type: 'required', message: 'Please select your role.'}
                    ],
        };

        async presentAlert() {
            const alert = await this.alertController.create({
              title: 'Error',
              subTitle: 'Error',
              message: 'Failed loading required data.  Hit Reload to try and reload data.  Hit home to go to main registration page',
              buttons: [{text: 'Home', handler: () => {
                    this.navCtrl.push(HomePage);
                }}, {text: 'Reload', handler: () => {
                    this.navCtrl.push(FisherRolePage);
                }}]
            });

            await alert.present();
        }

        constructor (public navCtrl: NavController, public navParams: NavParams, public fisherService : FisherService, public formBuilder: FormBuilder, public alertController: AlertController) {
            this.roleForm = this.formBuilder.group({
                "role": ['', Validators.required],
            });

            console.log('Loading communities');
            this.fisherService.fisherGetCommunities().then(result => {
                console.log('Loading terms');
                // return this.fisherService.fisherGetTerms();
                return Promise.reject('hello');
            }).then(result => {
                console.log('Done loading communities and terms');
            }).catch(error => {
                console.log('Failed loading either communities or terms');
                this.presentAlert();
            });
        }

        ionViewDidLoad() {
                  console.log('ionViewDidLoad FisherRolePage');
        }

        nextFromFisherRole(){
            let user_roles = [];
            if (this.is_crew) {
                user_roles.push('1');
            }
            if (this.is_skipper) {
                user_roles.push('2');
            }
            if (this.is_shore_harvester) {
                user_roles.push('3');
            }
            if (this.is_shore_harvest_group_leader) {
                user_roles.push('4');
            }
            if (this.is_fish_cleaner) {
                user_roles.push('5');
            }
            if (this.is_quality_control_officer) {
                user_roles.push('6');
            }
            if (this.is_coastal_product_producer) {
                user_roles.push('7');
            }
            this.fisherService.fisherUpdateRole(this.role, user_roles.join(' '));
            this.navCtrl.push(FisherUsetermsPage);
        }

        roleChanged(){
                this.role = this.roleForm.get("role").value;
        }

}
