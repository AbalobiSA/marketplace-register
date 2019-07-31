//import {Device} from "@ionic-native/device";

export  class Fisher{

    //device:Device = new Device(); // to be implemented later

    //Implemented
    "name"                                         : string;
    "surname"                                      : string;
    "nickname"                                     : string;
    "email"                                        : string;
    "password"                                     : string;
    "cell"                                         : string;
    "gender"                                       : string;
    "id"                                           : string;
    "photo_selfie"                                 : string;
    "usertype"                                     : string;
    "user_roles"                                   : string;
    "landingsite"                                  : string;
    "fisher_license_irp"                           : boolean;
    "fisher_license_small_scale"                   : boolean;
    "fisher_license_traditional_line_fish"         : boolean;
    "fisher_license_near_shore_commercial_lobster" : boolean;
    "fisher_license_recreational"                  : boolean;
    "fisher_license_other"                         : string;
    "permission_local_implementer"                 : boolean;
    "permission_daff"                              : boolean;
    //Required
    "preferred_language"                           : string;
    "filter"                                       : string;
    //might be required
    "landingsite_custom"                           : string;
    "app_version"                                  : string;
    "device_version"                               : string;
    "device_uuid"                                  : string;
    "device_model"                                 : string;
    "device_manufacturer"                          : string;
    "device_platform"                              : string;
    "device_serial"                                : string;
    "birth_date"                                   : string;
    "uuid_timestamp"                               : string;


    constructor(){
        //Required
        this.preferred_language     = "English";
        this.filter                 = "abalobi_registration"
        //Might be required
        this.landingsite_custom     =   "";
        this.app_version            =   "web_1.0.1";
        /*this.device_version         =   this.device.version;
        this.device_uuid            =   this.device.uuid;
        this.device_model           =   this.device.model;
        this.device_manufacturer    =   this.device.manufacturer;
        this.device_platform        =   this.device.platform;
        this.device_serial          =   this.device.serial;
        this.birth_date             =   "";*/
        this.uuid_timestamp         =   "1970-00-00T00:00:00.000Z";// place temporary value for now until timestamp is implemented

    }
}
