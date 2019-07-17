import {Component} from '@angular/core';
import {AlertController, AlertOptions, IonicPage, NavController, NavParams} from 'ionic-angular';
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
                }, {validator: customCommEntered('community', 'custom')} );

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

                //construct the list of all communities upon and creation instantiate once
                // for (let i = 1;i <this.list_of_communities.length;i++){//ignore headings, start at second line
                //     let line :string []= (this.list_of_communities[i]).split(",");
                //     this.all_comms.push(new CommunityClass(line[0],line[1],line[2]));
                // }
        }

        countryChanged() {
                this.community_info.comm_country = this.communityForm.get('country').value;
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
                this.fisherService.fisherUpdateCommunity(this.community_info);
                this.navCtrl.push(FisherConfirmPage,this.confirm_personal);
        }

        //TODO -- improve this to read these communities from a csv file/from an API call
        private list_of_communities = [
            "name_key,province,name_Eng,name_Afr,region",
            "sey_mahe_anseauxpins,SEY,Mahé - Anse Aux Pins,Mahé - Anse Aux Pins,seychelles",
            "sey_mahe_anseroyale,SEY,Mahé - Anse Royale,Mahé - Anse Royale,seychelles",
            "sey_mahe_beauvallon,SEY,Mahé - Beau Vallon,Mahé - Beau Vallon,seychelles",
            "sey_mahe_edenisland,SEY,Mahé - Roche Caiman (Eden Island),Mahé - Roche Caiman (Eden Island),seychelles",
            "sey_mahe_grandanse,SEY,Mahé - Grand Anse,Mahé - Grand Anse,seychelles",
            "sey_mahe_takamaka,SEY,Mahé - Takamaka,Mahé - Takamaka,seychelles",
            "sey_mahe_victoria,SEY,Mahé - Victoria,Mahé - Victoria,seychelles",
            "sey_mahe_laretraite,SEY,Mahé - La Retraite,Mahé - La Retraite,seychelles",
            "sey_ladigues,SEY,La Digues,La Digues,seychelles",
            "sey_praslin,SEY,Praslin,Praslin,seychelles",
            "sey_fregate,SEY,Fregate,Fregate,seychelles",
            "arniston,WC,Arniston,Waenhuiskrans,west_coast",
            "bellville,WC,Bellville,Bellville,west_coast",
            "bettysbay,WC,Bettys Bay,Bettysbaai,west_coast",
            "buffelsjagbaai,WC,Buffeljagsbaai,Buffeljagsbaai,west_coast",
            "cape_flats,WC,Cape Flats,Cape Flats,west_coast",
            "capetown,WC,Cape Town,Cape Town,west_coast",
            "coffeebay,KZN,Coffee Bay,Koffiebaai,kwazulunatal eastern_cape",
            "democommunity,WC,Demo Community,Demo Gemeenskap,west_coast",
            "doringbaai,WC,Doring Bay,Doringbaai,west_coast",
            "elandsbaai,WC,Elands Bay,Elandsbaai,west_coast",
            "fishhoek,WC,Fishhoek,Vishoek,west_coast",
            "gordons_bay,WC,Gordon's Bay,Gordonsbaai,west_coast",
            "grassy_park,WC,Grassy Park,Grassy Park,west_coast",
            "hermanus,WC,Hermanus,Hermanus,west_coast",
            "hondeklipbaai,NC,Hondeklip Bay,Hondeklipbaai,west_coast",
            "hout_bay,WC,Hout Bay,Houtbaai,west_coast",
            "kalk_bay,WC,Kalk Bay,Kalkbaai,west_coast",
            "kleinmond,WC,Kleinmond,Kleinmond,west_coast",
            "lambertsbaai,WC,Lamberts Bay,Lambertsbaai,west_coast",
            "langebaan,WC,Langebaan,Langebaan,west_coast",
            "millers_point,WC,Millers Point,Millers Point,west_coast",
            "muizenberg,WC,Muizenberg,Muizenberg,west_coast",
            "ocean_view,WC,Ocean View,Ocean View,west_coast",
            "olifants,WC,Olifants,Olifants,west_coast",
            "paternoster,WC,Paternoster,Paternoster,west_coast",
            "portnolloth,NC,Port Nolloth,Port Nolloth,west_coast",
            "pringlebay,WC,Pringle Bay,Pringlebaai,west_coast",
            "steenbergscove,WC,Steenberg's Cove,Steenberg's Cove,west_coast",
            "simonstown,WC,Simon's Town,Simonstad,west_coast",
            "sainthelenaisland,SHI,St Helena Island,St Helena Eiland,saint_helena_island",
            "strand,WC,Strand,Strand,west_coast",
            "strandfontein_falsebay,WC,Strandfontein (False Bay),Strandfontein (Valsbaai),west_coast",
            "struisbaai,WC,Struis Bay,Struisbaai,west_coast",
            "yzerfontein,WC,Yzerfontein,Yzerfontein,west_coast",
            "nam_hentiesbaai,NAM,Hentiesbaai,Hentiesbaai,namibia"
        ];


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
