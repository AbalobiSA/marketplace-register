import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FisherUsetermsPage} from "../fisher-useterms/fisher-useterms";
//Imported service
import{FisherService} from "../../providers/FisherService";
import{FormBuilder, Validators} from "@angular/forms";


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
        }

        constructor (public navCtrl: NavController, public navParams: NavParams, public fisherService : FisherService, public formBuilder: FormBuilder) {
                this.roleForm = this.formBuilder.group({
                    "role": ['', Validators.required],
                })
        }

        ionViewDidLoad() {
                  console.log('ionViewDidLoad FisherRolePage');
        }

        nextFromFisherRole(){
                        this.fisherService.fisherUpdateRole(this.role);
                        this.navCtrl.push(FisherUsetermsPage);
        }

        roleChanged(){
                this.role = this.roleForm.get("role").value;
        }

}
