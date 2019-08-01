import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

//Imported non-page classes
import {Registree}              from "../classes/registree_class";
import{FisherUsetermsClass}     from "../classes/fisher-useterms_class";
import {PersonalInfoClass}      from "../classes/personal_info_class";
import {CommunityInfoClass}     from "../classes/community_info_class";

import{Fisher} from "../classes/fisher-class";
import {BaseUrls} from "../classes/base_urls";


@Injectable()
export class FisherService {

    urls: BaseUrls = new BaseUrls();


    constructor(private http: HttpClient, public registree: Registree ) {

  }

  fisherUpdateRole(role_info: string, user_roles: string) {
        this.registree.role = role_info;
        this.registree.user_roles = user_roles;
        //update the registree in storage;--return a promise
        console.log("Fisher Service successfully updates role");
        console.log("Got user roles: ", user_roles);
  }

  fisherGetTerms() {
      return new Promise((resolve, reject) => {
          this.http.get(this.urls.fisherGetTermsURL).toPromise()
          .then(result => {
              resolve(result);
          }).catch(error => {
              reject(error);
          });
      });
  }

  fisherGetCommunities() {
      return new Promise((resolve, reject) => {
          this.http.get(this.urls.fisherGetCommunitiesURL).toPromise()
            .then(result => {
              resolve(result);
            }).catch(error => {
              reject(error);
          })
      });
  }

  fisherUpdateTerms(terms_status  : FisherUsetermsClass){
        this.registree.terms_agreed       = terms_status.terms_use_agreed;
        this.registree.assistant_agreed   = terms_status.terms_assistant_agreed;
        this.registree.DAFF_agreed        = terms_status.terms_DAFF_agreed;
        //update the registree in storage;
        console.log("Fisher Service successfully updates terms of use");
  }

  fisherUpdatePersonal(personal_info : PersonalInfoClass){

        this.registree.surname            = personal_info.personal_surname;
        this.registree.firstname          = personal_info.personal_firstname;
        this.registree.nickname           = personal_info.personal_nickname;
        this.registree.email              = personal_info.personal_email;
        this.registree.gender             = personal_info.personal_gender;
        this.registree.IDnum              = personal_info.personal_IDnum;
        this.registree.cellNo             = personal_info.personal_cellNo;
        this.registree.password           = personal_info.personal_password1;//only use one copy of the 2 identical passwords
        this.registree.selfie             = personal_info.personal_selfie;
        this.registree.preferred_language = personal_info.personal_language;
        //update the registree in storage;
        console.log("Fisher Service successfully updates personal info");

  }


  fisherUpdateCommunity(community_info: CommunityInfoClass){
        // Change cellphone number based on country they selected
        let countryCode = '27';
        switch (community_info.comm_country) {
            case 'Seychelles':
                countryCode = '248';
                break;

            case 'Namibia':
                countryCode = '264';
                break;
        }

        if (this.registree.cellNo.charAt(0) === '0' && this.registree.cellNo.length === 10) {
            console.log("Converting cell number to international format. Input: ", this.registree.cellNo);
            this.registree.cellNo = countryCode + this.registree.cellNo.substring(1);
            console.log("Output: ", this.registree.cellNo);
        }

        this.registree.country                                = community_info.comm_country;
        this.registree.province                               = community_info.comm_province;
        this.registree.community                              = community_info.comm_community;
        this.registree.custom_community                       = community_info.custom_community;
        this.registree.comm_not_listed                        = community_info.comm_not_listed;
        this.registree.IRP_selected                           = community_info.comm_IRP_chosen;
        this.registree.small_scale_selected                   = community_info.comm_small_scale_chosen;
        this.registree.traditional_line_fish_selected         = community_info.comm_traditional_line_fish_chosen;
        this.registree.near_shore_commercial_lobster_selected = community_info.comm_near_shore_commercial_lobster_chosen;
        this.registree.recreational_selected                  = community_info.comm_recreational_chosen;
        this.registree.other_seleted                          = community_info.comm_other_chosen;
        this.registree.permit_other_manual                    = community_info.comm_permit_other_manual;
  }



    //Build the fisher object
   fisherBuild() : Fisher{
        let fisher = new Fisher();
        this.parseFisher(fisher);
        //console.log("Service says 'This fisher has been created'");
        //console.log(fisher);
        return fisher;
    }//end SubmitRegistration


    //parse fisher data to a format congruent to what the backend expects
    parseFisher(fisher: Fisher)  {
        if (!this.registree.preferred_language) {
            console.log('Changing preferred language to English');
            this.registree.preferred_language = 'English';
        }
        console.log("Preferred language: ", this.registree.preferred_language);

        fisher.name                                         = this.registree.firstname;
        fisher.surname                                      = this.registree.surname;
        fisher.nickname                                     = this.registree.nickname;
        fisher.email                                        = this.registree.email;
        fisher.password                                     = this.registree.password;
        fisher.cell                                         = this.registree.cellNo;
        fisher.gender                                       = this.registree.gender;
        fisher.id                                           = this.registree.IDnum;
        fisher.photo_selfie                                 = this.registree.selfie;
        fisher.preferred_language                           = this.registree.preferred_language;
        fisher.usertype                                     = this.registree.role;
        fisher.user_roles                                   = this.registree.user_roles;
        fisher.landingsite                                  = this.registree.community;
        fisher.landingsite_custom                           = this.registree.custom_community;
        fisher.fisher_license_irp                           = this.registree.IRP_selected;
        fisher.fisher_license_small_scale                   = this.registree.small_scale_selected;
        fisher.fisher_license_traditional_line_fish         = this.registree.traditional_line_fish_selected;
        fisher.fisher_license_near_shore_commercial_lobster = this.registree.near_shore_commercial_lobster_selected;
        fisher.fisher_license_recreational                  = this.registree.recreational_selected;
        fisher.fisher_license_other                         = this.registree.permit_other_manual;
        fisher.permission_local_implementer                 = this.registree.assistant_agreed;
        fisher.permission_daff                              = this.registree.DAFF_agreed;

}



  //Clear the recently entered fisher info
  fisherClearDetails(){
        //Reset the registree fields after attempted registration
      //Role details
      this.registree.role  = "";
      this.registree.user_roles = '';

      //Terms of use details
      this.registree.terms_agreed      =false;
      this.registree.assistant_agreed  =false;
      this.registree.DAFF_agreed       =false;

      //Personal details
      this.registree.surname            = "";
      this.registree.firstname          = "";
      this.registree.nickname           = "";
      this.registree.email              = '';
      this.registree.gender             = "";
      this.registree.IDnum              = "";
      this.registree.cellNo             = "";
      this.registree.password           = "";
      this.registree.selfie             = '';
      this.registree.preferred_language = '';

      //Community details
      this.registree.province                               ="";
      this.registree.community                              ="";
      this.registree.custom_community                       = "";
      this.registree.comm_not_listed                        =false;
      this.registree.IRP_selected                           =false;
      this.registree.small_scale_selected                   =false;
      this.registree.traditional_line_fish_selected         =false;
      this.registree.near_shore_commercial_lobster_selected =false;
      this.registree.recreational_selected                  =false;
      this.registree.other_seleted                          =false;
      this.registree.permit_other_manual                    ='';

      //console.log("........Fisher Service Cleared User Details........");
  }

  //Check if fisher with the proposed ID doesn't exist already
  checkIfFisherAlreadyExists(ID: string): Promise<any> {

      return new Promise((resolve, reject) => {
              this.http.get(this.urls.fisherCheckUserIDurl + ID).toPromise()
                  .then(() => {
                      reject();
                  })
                  .catch(() => {
                      resolve();
                  })
      })
  }


  //Go ahead and actually try to register the fisher
  registerFisher(fisher): Promise<any> {
        //console.log("Posting fisher registration")
      return this.http.post(this.urls.fisherAddUserURL, fisher).toPromise();
  }

}//end class
