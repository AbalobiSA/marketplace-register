import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FisherConfirmPage} from "../fisher-confirm/fisher-confirm";
import {FisherService} from "../../providers/FisherService";
import{CommunityInfoClass} from "../../classes/community_info_class";
import {CommunityClass} from "../../classes/community_class";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HomePage} from "../home/home";
//import {qR} from "@angular/core/src/render3";



// function isInThisProvince(comms: CommunityClass, provinceFull : string){
//     return  this.province_abbrev == getProvinceAbbrev(provinceFull);
// }

//TODO- provinces would have to be added as they arise
function getProvinceAbbrev(province: string): string {
    // console.log(`getProvinceAbbrev(${province})`);
    switch(province){

        case "Western Cape":{
            return "WC";
        }
        case "KwaZulu-Natal":{
            return "KZN";
        }
        case "Northern Cape":{
            return "NC";
        }
        case "Seychelles":{
            return "SEY";
        }
        case "Namibia": {
            return "NAM";
        }

        //add more cases as they arise
        default :{
            return "abbrev not found";
        }

    }//end switch

}


//Function to check that custom community has been entered
function customCommEntered(selectedCommKey: string, customCommKey: string) {
    return (group: FormGroup): {[key: string]: any} => {
        let selectedComm  = group.controls[selectedCommKey];
        let customComm    = group.controls[customCommKey];

        if ((selectedComm.value == 'Other')&&( !customComm.value)) {
            return {
                missingCustomComm: true
            };
        }
    }
}


@IonicPage()
@Component({
        selector: 'page-fisher-community',
        templateUrl: 'fisher-community.html',
})
export class FisherCommunityPage {
        all_comms               : CommunityClass[] = [];
        filtered_comms          :CommunityClass[] = [];//communities filtered according to province selected
        community_info          : CommunityInfoClass = new CommunityInfoClass();
        confirm_personal        : Object = new Object();
        public communityForm    : any;
        public hideCustomComm   : boolean = true;//hide the option to enter a custom community on DOM

        validation_messages = {
                'country': [
                        {type: 'required', message: 'Please select a country.'}
                ],

                'province': [
                        {type: 'required', message: 'Please select a province.'}
                ],

                'community': [
                        {type: 'required', message: 'Please select a community.'}
                ],
        };

        async presentAlert() {
          const alert = await this.alertController.create({
            title: 'Error',
            subTitle: 'Error',
            message: 'Failed loading community list. You will be returned to home page',
            buttons: ['OK']
          });

          await alert.present();
        }

        constructor (public navCtrl: NavController, public navParams: NavParams, public fisherService : FisherService, public formBuilder: FormBuilder,
        public alertController: AlertController) {
                this.communityForm = this.formBuilder.group({
                    "country"   : ['', Validators.required],
                    "province"  : ['', Validators.required],
                    "community" : ['', Validators.required],
                    "custom"    : [null,null],
                    "permit_other" : [null, null]
                }, {validators: [customCommEntered('community', 'custom')]} );

                console.log('Getting fisher communities...');
                fisherService.fisherGetCommunities().then(result => {
                    console.log("Done getting communities: ", result);
                    let communities = result['abalobi-communities'];
                    for (let i = 0; i < communities.length; i++) {
                        this.all_comms.push(new CommunityClass(communities[i]['Name'], communities[i]['province_abbreviation__c'], communities[i]['name_eng__c']));
                    }
                }).catch(error => {
                    console.log("Error getting communities: ", error);
                    this.presentAlert();
                    this.navCtrl.push(HomePage);
                });
        }

        countryChanged() {
                console.log('countryChanged()');
                this.community_info.comm_country = this.communityForm.get('country').value;
                console.log("Country: ", this.community_info.comm_country);
                if (this.community_info.comm_country === 'Seychelles' || this.community_info.comm_country === 'Namibia') {
                    console.log('Going to filter communities');
                    this.communityForm.get('province').value = this.community_info.comm_country;
                    // this.community_info.comm_province = this.community_info.comm_country;
                    // this.filtered_comms = this.filterComms(this.all_comms,this.community_info.comm_province);//generate trhe filtered comms based on province selection
                    this.provinceChanged();
                }
        }

        provinceChanged(){
                this.community_info.comm_province = this.communityForm.get('province').value;
                this.filtered_comms = this.filterComms(this.all_comms,this.community_info.comm_province);//generate trhe filtered comms based on province selection
        }


        communityChanged(){
            let selectedCommunity: string = this.communityForm.get('community').value;
            if(selectedCommunity !== 'Other') {
                this.hideCustomComm = true;
                this.community_info.comm_community = this.parseCommunity(selectedCommunity);
            }

            else{//show the custom community imput box
                this.community_info.comm_community = 'other';
                this.hideCustomComm = false;
            }
        }

        permitOtherChanged() {
            this.community_info.comm_permit_other_manual = this.communityForm.get('permit_other').value;
        }


        //Record the name of the entered custom community
        customCommunityEntered(){
            this.community_info.custom_community= this.communityForm.get('custom').value;
        }

        parseCommunity (name_Eng : string ): string {
                let comm_ID :string ="";
                for(let i = 0; i < this.all_comms.length;i++){
                        if(this.all_comms[i].name_Eng == name_Eng){
                                comm_ID = this.all_comms[i].name_key;
                                break;//we found the desired community, abort the search loop
                        }
                }

                return comm_ID;
        }

        ionViewDidLoad() {
                console.log("ionViewDidLoad FisherCommunityPage") ;

                //package the info needed by the confirmation page for propagation ahead to the register page
                this.confirm_personal = {
                        surname     : <string> this.navParams.get('personal_surname'),
                        firstname   : <string> this.navParams.get('personal_firstname'),
                        IDnum       : <string> this.navParams.get('personal_IDnum'),
                        cellNo      : <string> this.navParams.get('personal_cellNo'),
                 };
        }

       onFisherFinishCommunity()   {
                // Fix cellphone number based on country selected
                this.fisherService.fisherUpdateCommunity(this.community_info);
                this.navCtrl.push(FisherConfirmPage,this.confirm_personal);
        }

    //TODO - improve this implementation to use the fiter() function
    //TODO - there may be need to sort the list as well, for now the list happens to be sorted already.
     filterComms(comms: CommunityClass[], provinceFull :string): CommunityClass [] {
        let filtered :  CommunityClass []= [];
        for(let i =0;i< comms.length;i++){
            if( getProvinceAbbrev(provinceFull) == comms[i].province_abbrev){
                filtered.push(comms[i]);
            }
        }
        return filtered;
    }

}//end class
