import{Injectable} from "@angular/core";

@Injectable()
export class Registree{

        //Role details
        role       :  string="";
        user_roles :  string='';

        //Terms of use details
        terms_agreed      : boolean=false;
        assistant_agreed  : boolean=false;
        DAFF_agreed       : boolean=false;

        //Personal details
        surname            : string = "";
        firstname          : string = "";
        nickname           : string = "";
        email              : string = '';
        gender             : string = "";
        IDnum              : string = "";
        cellNo             : string = "";
        password           : string = "";
        selfie             : string = '';
        preferred_language : string = '';

        //Community details
        country                                :string='';
        province                               :string="";
        community                              :string="";
        custom_community                       :string="";
        comm_not_listed                        :boolean=false;
        IRP_selected                           :boolean=false;
        small_scale_selected                   :boolean=false;
        traditional_line_fish_selected         :boolean=false;
        near_shore_commercial_lobster_selected :boolean=false;
        // commercial_selected   :boolean=false;
        recreational_selected                  :boolean=false;
        other_seleted                          :boolean=false;
        permit_other_manual                    :string='';

        constructor(){

         }

}//end class registree
