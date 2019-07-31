webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/after-register/after-register.module": [
		161
	],
	"../pages/fisher-community/fisher-community.module": [
		163
	],
	"../pages/fisher-confirm/fisher-confirm.module": [
		177
	],
	"../pages/fisher-not-unique/fisher-not-unique.module": [
		178
	],
	"../pages/fisher-personal/fisher-personal.module": [
		179
	],
	"../pages/fisher-register-failure/fisher-register-failure.module": [
		180
	],
	"../pages/fisher-register-success/fisher-register-success.module": [
		181
	],
	"../pages/fisher-role/fisher-role.module": [
		182
	],
	"../pages/fisher-useterms/fisher-useterms.module": [
		183
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AfterRegisterPageModule", function() { return AfterRegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__after_register__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AfterRegisterPageModule = /** @class */ (function () {
    function AfterRegisterPageModule() {
    }
    AfterRegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__after_register__["a" /* AfterRegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__after_register__["a" /* AfterRegisterPage */]),
            ],
        })
    ], AfterRegisterPageModule);
    return AfterRegisterPageModule;
}());

//# sourceMappingURL=after-register.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterRegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AfterRegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AfterRegisterPage = /** @class */ (function () {
    function AfterRegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AfterRegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AfterRegisterPage');
    };
    AfterRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-after-register',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\after-register\after-register.html"*/'<!--\n\n  Generated template for the AfterRegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Registration successful</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <p>Thank you for registering for ABALOBI Marketplace.</p>\n\n  <p><strong>Note that you can\'t login yet - a human needs to approve your application.</strong></p>\n\n  <p>Please watch your e-mail for further details.</p>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\after-register\after-register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], AfterRegisterPage);
    return AfterRegisterPage;
}());

//# sourceMappingURL=after-register.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisherCommunityPageModule", function() { return FisherCommunityPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fisher_community__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FisherCommunityPageModule = /** @class */ (function () {
    function FisherCommunityPageModule() {
    }
    FisherCommunityPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fisher_community__["a" /* FisherCommunityPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fisher_community__["a" /* FisherCommunityPage */]),
            ],
        })
    ], FisherCommunityPageModule);
    return FisherCommunityPageModule;
}());

//# sourceMappingURL=fisher-community.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FisherCommunityPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fisher_confirm_fisher_confirm__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_FisherService__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_community_info_class__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_community_class__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








//import {qR} from "@angular/core/src/render3";
// function isInThisProvince(comms: CommunityClass, provinceFull : string){
//     return  this.province_abbrev == getProvinceAbbrev(provinceFull);
// }
//TODO- provinces would have to be added as they arise
function getProvinceAbbrev(province) {
    // console.log(`getProvinceAbbrev(${province})`);
    switch (province) {
        case "Western Cape": {
            return "WC";
        }
        case "KwaZulu-Natal": {
            return "KZN";
        }
        case "Northern Cape": {
            return "NC";
        }
        case "Seychelles": {
            return "SEY";
        }
        case "Namibia": {
            return "NAM";
        }
        //add more cases as they arise
        default: {
            return "abbrev not found";
        }
    } //end switch
}
//Function to check that custom community has been entered
function customCommEntered(selectedCommKey, customCommKey) {
    return function (group) {
        var selectedComm = group.controls[selectedCommKey];
        var customComm = group.controls[customCommKey];
        if ((selectedComm.value == 'Other') && (!customComm.value)) {
            return {
                missingCustomComm: true
            };
        }
    };
}
var FisherCommunityPage = /** @class */ (function () {
    function FisherCommunityPage(navCtrl, navParams, fisherService, formBuilder, alertController) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fisherService = fisherService;
        this.formBuilder = formBuilder;
        this.alertController = alertController;
        this.all_comms = [];
        this.filtered_comms = []; //communities filtered according to province selected
        this.community_info = new __WEBPACK_IMPORTED_MODULE_4__classes_community_info_class__["a" /* CommunityInfoClass */]();
        this.confirm_personal = new Object();
        this.hideCustomComm = true; //hide the option to enter a custom community on DOM
        this.validation_messages = {
            'country': [
                { type: 'required', message: 'Please select a country.' }
            ],
            'province': [
                { type: 'required', message: 'Please select a province.' }
            ],
            'community': [
                { type: 'required', message: 'Please select a community.' }
            ],
        };
        this.communityForm = this.formBuilder.group({
            "country": ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* Validators */].required],
            "province": ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* Validators */].required],
            "community": ['', __WEBPACK_IMPORTED_MODULE_6__angular_forms__["i" /* Validators */].required],
            "custom": [null, null],
            "permit_other": [null, null]
        }, { validator: customCommEntered('community', 'custom') });
        console.log('Getting fisher communities...');
        fisherService.fisherGetCommunities().then(function (result) {
            console.log("Done getting communities: ", result);
            var communities = result['abalobi-communities'];
            for (var i = 0; i < communities.length; i++) {
                _this.all_comms.push(new __WEBPACK_IMPORTED_MODULE_5__classes_community_class__["a" /* CommunityClass */](communities[i]['Name'], communities[i]['province_abbreviation__c'], communities[i]['name_eng__c']));
            }
        }).catch(function (error) {
            console.log("Error getting communities: ", error);
            _this.presentAlert();
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__home_home__["a" /* HomePage */]);
        });
    }
    FisherCommunityPage.prototype.presentAlert = function () {
        return __awaiter(this, void 0, void 0, function () {
            var alert;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            title: 'Error',
                            subTitle: 'Error',
                            message: 'Failed loading community list. You will be returned to home page',
                            buttons: ['OK']
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    FisherCommunityPage.prototype.countryChanged = function () {
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
    };
    FisherCommunityPage.prototype.provinceChanged = function () {
        this.community_info.comm_province = this.communityForm.get('province').value;
        this.filtered_comms = this.filterComms(this.all_comms, this.community_info.comm_province); //generate trhe filtered comms based on province selection
    };
    FisherCommunityPage.prototype.communityChanged = function () {
        var selectedCommunity = this.communityForm.get('community').value;
        if (selectedCommunity !== 'Other') {
            this.hideCustomComm = true;
            this.community_info.comm_community = this.parseCommunity(selectedCommunity);
        }
        else {
            this.community_info.comm_community = 'other';
            this.hideCustomComm = false;
        }
    };
    FisherCommunityPage.prototype.permitOtherChanged = function () {
        this.community_info.comm_permit_other_manual = this.communityForm.get('permit_other').value;
    };
    //Record the name of the entered custom community
    FisherCommunityPage.prototype.customCommunityEntered = function () {
        this.community_info.custom_community = this.communityForm.get('custom').value;
    };
    FisherCommunityPage.prototype.parseCommunity = function (name_Eng) {
        var comm_ID = "";
        for (var i = 0; i < this.all_comms.length; i++) {
            if (this.all_comms[i].name_Eng == name_Eng) {
                comm_ID = this.all_comms[i].name_key;
                break; //we found the desired community, abort the search loop
            }
        }
        return comm_ID;
    };
    FisherCommunityPage.prototype.ionViewDidLoad = function () {
        console.log("ionViewDidLoad FisherCommunityPage");
        //package the info needed by the confirmation page for propagation ahead to the register page
        this.confirm_personal = {
            surname: this.navParams.get('personal_surname'),
            firstname: this.navParams.get('personal_firstname'),
            IDnum: this.navParams.get('personal_IDnum'),
            cellNo: this.navParams.get('personal_cellNo'),
        };
    };
    FisherCommunityPage.prototype.onFisherFinishCommunity = function () {
        this.fisherService.fisherUpdateCommunity(this.community_info);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fisher_confirm_fisher_confirm__["a" /* FisherConfirmPage */], this.confirm_personal);
    };
    //TODO - improve this implementation to use the fiter() function
    //TODO - there may be need to sort the list as well, for now the list happens to be sorted already.
    FisherCommunityPage.prototype.filterComms = function (comms, provinceFull) {
        var filtered = [];
        for (var i = 0; i < comms.length; i++) {
            if (getProvinceAbbrev(provinceFull) == comms[i].province_abbrev) {
                filtered.push(comms[i]);
            }
        }
        return filtered;
    };
    FisherCommunityPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fisher-community',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\fisher-community\fisher-community.html"*/'<!--\n  Generated template for the FisherCommunityPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n        <ion-navbar>\n              <ion-title>Abalobi Register</ion-title>\n        </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n        <form [formGroup] = "communityForm">\n\n\n                <p style="text-align:center"><b>Community / Landing</b></p>\n\n                <ion-item>\n                        <ion-label text-wrap>Please select your country\n                        </ion-label>\n                        <ion-select text-wrap formControlName="country" (ionChange)="countryChanged()">\n                                <ion-option value="South Africa">South Africa</ion-option>\n                                <ion-option value="Seychelles">Seychelles</ion-option>\n                                <ion-option value="Namibia">Namibia</ion-option>\n                        </ion-select>\n                </ion-item>\n\n                <div class="validation-errors">\n                        <ng-container *ngFor="let validation of validation_messages.province" >\n                                <div style="color:red" text-wrap align="center" class="error-message" *ngIf="communityForm.get(\'country\').hasError(validation.type) && (communityForm.get(\'country\').dirty || communityForm.get(\'country\').touched)">\n                                      {{ validation.message }}\n                                </div>\n                        </ng-container>\n                </div>\n\n                <ion-item *ngIf="community_info.comm_country === \'South Africa\'">\n                        <ion-label text-wrap>Please select  your province\n                        </ion-label>\n                                <ion-select text-wrap formControlName="province" (ionChange)=" provinceChanged()">\n                                        <ion-option value="Western Cape">Western Cape</ion-option>\n                                        <ion-option value="Northern Cape">Northern Cape</ion-option>\n                                        <ion-option value="Eastern Cape">Eastern Cape</ion-option>\n                                        <ion-option value="North West"> North West</ion-option>\n                                        <ion-option value="Mpumalanga">Mpumalanga</ion-option>\n                                        <ion-option value="Limpopo">Limpopo</ion-option>\n                                        <ion-option value="Gauteng">Gauteng</ion-option>\n                                        <ion-option value="Free State">Free State</ion-option>\n                                        <ion-option value="KwaZulu-Natal">KwaZulu-Natal</ion-option>\n                                        <!--<ion-option value="Seychelles">Seychelles</ion-option>-->\n                                        <!--<ion-option value="Namibia">Namibia</ion-option>-->\n                                </ion-select>\n                </ion-item>\n\n                <div class="validation-errors">\n                        <ng-container *ngFor="let validation of validation_messages.province" >\n                                <div style="color:red" text-wrap align="center" class="error-message" *ngIf="communityForm.get(\'province\').hasError(validation.type) && (communityForm.get(\'province\').dirty || communityForm.get(\'province\').touched)">\n                                        {{ validation.message }}\n                                </div>\n                        </ng-container>\n                </div>\n\n\n                <ion-item >\n                            <ion-label text-wrap>Please select  your community\n                            </ion-label>\n                                        <ion-select text-wrap formControlName="community" (ionChange)=" communityChanged()">\n                                                <ion-option  text-wrap *ngFor="let c of filterComms(all_comms, communityForm.get(\'province\').value)">{{c.name_Eng}}</ion-option>\n                                                <ion-option  text-wrap value="Other">Other</ion-option>\n                                        </ion-select>\n                </ion-item>\n\n\n                <div class="validation-errors">\n                        <ng-container *ngFor="let validation of validation_messages.community" >\n                                 <div style="color:red" text-wrap align="center" class="error-message" *ngIf="communityForm.get(\'community\').hasError(validation.type) && (communityForm.get(\'community\').dirty || communityForm.get(\'community\').touched)">\n                                        {{ validation.message }}\n                                 </div>\n                        </ng-container>\n                </div>\n\n\n\n                <ion-item [hidden]="hideCustomComm">\n                        <ion-label text-wrap stacked>Please enter your community</ion-label>\n                        <ion-input  type="text" formControlName="custom" placeholder="Enter your community here" (ionChange)="customCommunityEntered()"></ion-input>\n                </ion-item>\n\n                <span style="color:red" text-wrap align="center" class="validation-errors" *ngIf="communityForm.hasError(\'missingCustomComm\')">Custom community required.</span>\n\n\n\n\n\n                <p style="text-align:center"><b>Do you have a fishing permit ?</b></p>\n\n\n                <ion-list >\n                        <ion-item>\n                                <ion-label> IRP / Exemption</ion-label>\n                                <ion-checkbox [(ngModel)]="community_info.comm_IRP_chosen" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                        </ion-item>\n\n                        <ion-item>\n                                <ion-label> Small-scale</ion-label>\n                                <ion-checkbox [(ngModel)]="community_info.comm_small_scale_chosen" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                        </ion-item>\n\n                        <ion-item>\n                                <ion-label> Traditional Line-fish</ion-label>\n                                <ion-checkbox [(ngModel)]="community_info.comm_traditional_line_fish_chosen" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                        </ion-item>\n\n                        <ion-item>\n                                <ion-label> Near-shore commercial lobster</ion-label>\n                                <ion-checkbox [(ngModel)]="community_info.comm_near_shore_commercial_lobster_chosen" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                        </ion-item>\n\n                        <ion-item>\n                                <ion-label> Recreational</ion-label>\n                                <ion-checkbox [(ngModel)]="community_info.comm_recreational_chosen" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                        </ion-item>\n\n                        <ion-item>\n                                <ion-label> Other</ion-label>\n                                <ion-checkbox [(ngModel)]="community_info.comm_other_chosen" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                        </ion-item>\n\n                        <ion-item *ngIf="community_info.comm_other_chosen || community_info.comm_country === \'Seychelles\' || community_info.comm_country === \'Namibia\'">\n                                <ion-label text-wrap stacked>Other permit</ion-label>\n                                <ion-input formControlName="permit_other" type="text"   placeholder="Enter your other permit here" (ionChange)="permitOtherChanged()"></ion-input>\n                        </ion-item>\n\n                </ion-list>\n\n                <button ion-button full  [disabled]="!communityForm.valid" (click)="onFisherFinishCommunity()">Next</button>\n        </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\fisher-community\fisher-community.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_FisherService__["a" /* FisherService */], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], FisherCommunityPage);
    return FisherCommunityPage;
}()); //end class

//# sourceMappingURL=fisher-community.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FisherConfirmPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_FisherService__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_personal_info_class__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fisher_register_success_fisher_register_success__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fisher_not_unique_fisher_not_unique__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fisher_register_failure_fisher_register_failure__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(37);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Imported services






var FisherConfirmPage = /** @class */ (function () {
    function FisherConfirmPage(loadingCtrl, navParams, fisherService, navController, http, zone) {
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.fisherService = fisherService;
        this.navController = navController;
        this.http = http;
        this.zone = zone;
        //user details are propagated from personal details page through the community page to this final page
        //passed as navParams upon opening a new page
        this.confirm_info = new __WEBPACK_IMPORTED_MODULE_3__classes_personal_info_class__["a" /* PersonalInfoClass */]();
        this.captchaPassed = false;
    }
    FisherConfirmPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FisherConfirmPage');
        this.confirm_info.personal_surname = this.navParams.get('surname');
        this.confirm_info.personal_firstname = this.navParams.get('firstname');
        this.confirm_info.personal_IDnum = this.navParams.get('IDnum');
        this.confirm_info.personal_cellNo = this.navParams.get('cellNo');
    };
    FisherConfirmPage.prototype.onFisherSubmit = function () {
        //TODO - consider improving such that the pages persists the data in storage so user can come back and edit
        // TODO - currently, if registration fails, user has to start all over again
        var _this = this;
        //TODO - The loading controller works perfect but the the spinner is not showing
        var reg = this.loadingCtrl.create({
            spinner: 'Show iOS',
            content: 'Registration in progress..',
            dismissOnPageChange: true,
            showBackdrop: true
        });
        reg.present();
        this.fisher = this.fisherService.fisherBuild();
        this.fisherService.checkIfFisherAlreadyExists(this.fisher.id) //first promise check if the ID number has already been taken
            .then(function () {
            //Go ahead and attempt to register unique fisher
            //alert('ID number is unique');
            _this.fisherService.registerFisher(_this.fisher) //attempts to register user
                .then(function () {
                //alert('User registration successful');
                _this.navController.push(__WEBPACK_IMPORTED_MODULE_4__fisher_register_success_fisher_register_success__["a" /* FisherRegisterSuccessPage */]);
            })
                .catch(function () {
                //alert('User registration failed');
                _this.navController.push(__WEBPACK_IMPORTED_MODULE_6__fisher_register_failure_fisher_register_failure__["a" /* FisherRegisterFailurePage */]);
            });
        })
            .catch(function () {
            //.alert('ID number already exists');
            _this.navController.push(__WEBPACK_IMPORTED_MODULE_5__fisher_not_unique_fisher_not_unique__["a" /* FisherNotUniquePage */]);
        });
    }; //end method onFisherSubmit
    FisherConfirmPage.prototype.captchaResolved = function (response) {
        var _this = this;
        console.log("captchaResolved");
        console.log(response);
        this.zone.run(function () {
            // If the recaptcha expired then reset the state
            if (response) {
                _this.captchaPassed = true;
            }
            else {
                _this.captchaPassed = false;
            }
            _this.captchaResponse = response;
        });
    };
    FisherConfirmPage.prototype.validateCaptcha = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.captchaPassed) {
                reject("Please tick the \"I'm not a robot\" box at the bottom");
            }
            else {
                var data = {
                    captchaResponse: _this.captchaResponse
                };
                console.log("Validating captcha");
                _this.http.post('https://server.abalobi.org/api/users/recaptcha', data).toPromise().then(function (res) {
                    resolve();
                }, function (error) {
                    console.log("Got error");
                    reject("Failed validating reCAPTCHA with server. Please try refreshing page");
                });
            }
        });
    };
    FisherConfirmPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fisher-confirm',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\fisher-confirm\fisher-confirm.html"*/'<!--\n  Generated template for the FisherConfirmPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n          <ion-navbar>\n                  <ion-title>Abalobi Register</ion-title>\n          </ion-navbar>\n</ion-header>\n\n\n<ion-content padding title="Abalobi Register-confirm" id="fisher-register-confirm">\n\n          <p text-wrap style="text-align:center;padding-left:0.5em;padding-right:0.5em">\n                    If everything is correct please press the Register button below. Otherwise please go back and correct the info.\n          </p>\n\n          <form text-wrap>\n                    <ion-item>\n                          <ion-label>Name: {{confirm_info.personal_firstname}}</ion-label>\n                          <ion-input placeholder=""></ion-input>\n                    </ion-item>\n\n\n                    <ion-item>\n                          <ion-label>Surname: {{confirm_info.personal_surname}}</ion-label>\n                          <ion-input placeholder=""></ion-input>\n                    </ion-item>\n\n\n                    <ion-item>\n                          <ion-label>ID Number: {{confirm_info.personal_IDnum}} </ion-label>\n                          <ion-input placeholder=""></ion-input>\n                    </ion-item>\n\n\n                    <ion-item>\n                          <ion-label>Cell Number:{{confirm_info.personal_cellNo}} </ion-label>\n                          <ion-input placeholder=""></ion-input>\n                    </ion-item>\n\n              <button text-wrap="true" ion-button full  (click)="onFisherSubmit()">Register</button>\n          </form>\n\n\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\fisher-confirm\fisher-confirm.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_FisherService__["a" /* FisherService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], FisherConfirmPage);
    return FisherConfirmPage;
}()); //end class

//# sourceMappingURL=fisher-confirm.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registree; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Registree = /** @class */ (function () {
    function Registree() {
        //Role details
        this.role = "";
        this.user_roles = '';
        //Terms of use details
        this.terms_agreed = false;
        this.assistant_agreed = false;
        this.DAFF_agreed = false;
        //Personal details
        this.surname = "";
        this.firstname = "";
        this.nickname = "";
        this.email = '';
        this.gender = "";
        this.IDnum = "";
        this.cellNo = "";
        this.password = "";
        this.selfie = '';
        //Community details
        this.country = '';
        this.province = "";
        this.community = "";
        this.custom_community = "";
        this.comm_not_listed = false;
        this.IRP_selected = false;
        this.small_scale_selected = false;
        this.traditional_line_fish_selected = false;
        this.near_shore_commercial_lobster_selected = false;
        // commercial_selected   :boolean=false;
        this.recreational_selected = false;
        this.other_seleted = false;
        this.permit_other_manual = '';
    }
    Registree = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], Registree);
    return Registree;
}()); //end class registree

//# sourceMappingURL=registree_class.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUrls; });
var BaseUrls = /** @class */ (function () {
    function BaseUrls() {
        this.marketplaceCheckUserURL = "https://market.abalobi.org/api/users/find/?username=";
        this.marketplaceAddUserURL = "https://market.abalobi.org/api/users/create/";
        this.marketplaceGetUserTypesURL = "https://market.abalobi.org/api/listings/user-type-list";
        this.fisherCheckUserIDurl = "https://server.abalobi.org/api/users/id/checkidexists?id=";
        this.fisherGetTermsURL = "https://server.abalobi.org/api/terms";
        this.fisherGetCommunitiesURL = "https://server.abalobi.org/api/communities";
        this.fisherAddUserURL = "https://server.abalobi.org/register";
        this.testPostURL = "http://server.abalobi.org/api/testpost";
    }
    return BaseUrls;
}());

//# sourceMappingURL=base_urls.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInfoClass; });
var PersonalInfoClass = /** @class */ (function () {
    function PersonalInfoClass() {
        this.personal_surname = "";
        this.personal_firstname = "";
        this.personal_nickname = "";
        this.personal_gender = "";
        this.personal_email = '';
        this.personal_IDnum = "";
        this.personal_cellNo = "";
        this.personal_password1 = "";
        this.personal_password2 = "";
        this.personal_selfie = '';
    }
    return PersonalInfoClass;
}());

//# sourceMappingURL=personal_info_class.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FisherRegisterSuccessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FisherRegisterSuccessPage = /** @class */ (function () {
    function FisherRegisterSuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FisherRegisterSuccessPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FisherRegisterSuccessPage');
    };
    FisherRegisterSuccessPage.prototype.onbackToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    FisherRegisterSuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fisher-register-success',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\fisher-register-success\fisher-register-success.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-wrap>\n\n      Registration Successful\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="page1">\n\n  <img id="banner-img" src="https://res.cloudinary.com/techairos/image/upload/v1523889571/QR_app_Banner_ylefpe.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n\n\n  <form id="page-form1">\n\n    <div id="page-markdown1" class="show-list-numbers-and-dots">\n\n\n\n      <hr>\n\n      <p text-wrap="true" align="center">\n\n        Your registration has been submitted. You should receive a confirmation SMS shortly.\n\n      </p>\n\n      <hr>\n\n\n\n    </div>\n\n\n\n\n\n    <button ion-button full  (click)="onbackToHome()">Back to Home</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\fisher-register-success\fisher-register-success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FisherRegisterSuccessPage);
    return FisherRegisterSuccessPage;
}());

//# sourceMappingURL=fisher-register-success.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketplaceHome; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_MarketplaceService__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__after_register_after_register__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
/**
 * Generated class for the MarketplaceHomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MarketplaceHome = /** @class */ (function () {
    function MarketplaceHome(loadingCtrl, marketplaceService, navCtrl, http, zone, formBuilder) {
        this.loadingCtrl = loadingCtrl;
        this.marketplaceService = marketplaceService;
        this.navCtrl = navCtrl;
        this.http = http;
        this.zone = zone;
        this.formBuilder = formBuilder;
        this.loaderShowing = false;
        this.matchingAddresses = false;
        this.captchaPassed = false;
        this.myGroup = new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormGroup */]({
            selectedItem: new __WEBPACK_IMPORTED_MODULE_5__angular_forms__["b" /* FormControl */]()
        });
        this.personalForm = this.formBuilder.group({
            selectedItem: [undefined],
        });
        // private addItemForm = this.formBuilder.group({
        //     selectedItem: ['individual'],
        //   });
    }
    MarketplaceHome.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad MarketplaceHome');
        this.showLoader('Loading user types');
        this.marketplaceService.getUserTypes().then(function (result) {
            _this.userTypes = result;
            _this.dismissLoader();
            console.log(_this.personalForm.value.selectedItem);
            console.log(result);
        }).catch(function (error) {
            console.log("Error: ", error);
        });
    };
    // called from the UI when the register button has been clicked
    MarketplaceHome.prototype.registerBtnClick = function () {
        var _this = this;
        // validate the user's input
        this.validate().then(function () {
            // TODO: Re-enable this again when the time comes
            // validate the captcha
            //   return this.validateCaptcha();
            // }).then(() => {
            // after validation -> attempt to register the user
            _this.showLoader('Submitting your details');
            return _this.register();
        }).then(function () {
            // on succesful registration -> alert the user
            // alert("You have successfully been registered with ABALOBI Marketplace");
            // clear fields
            _this.email = null;
            _this.password = null;
            _this.repeat_password = null;
            _this.name = null;
            _this.surname = null;
            _this.cell_number = null;
            _this.name_of_establishment = null;
            // this.company_details = null;
            _this.extra_email_1 = null;
            _this.extra_email_2 = null;
            _this.extra_email_3 = null;
            _this.extra_email_4 = null;
            _this.extra_email_5 = null;
            _this.company_name = null;
            _this.vat_number = null;
            _this.address = null;
            _this.city = null;
            _this.postal_code = null;
            _this.instagram_handle = null;
            _this.location_address = null;
            _this.location_city = null;
            _this.location_postal_code = null;
            // navigate to the successful sign up page
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__after_register_after_register__["a" /* AfterRegisterPage */]);
            _this.dismissLoader();
        }).catch(function (error) {
            // alert the user to any errors that may have occurred
            alert(error);
            _this.dismissLoader();
        });
    };
    MarketplaceHome.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    MarketplaceHome.prototype.validatePassword = function (password) {
        var hasNumber = false;
        for (var i = 0; i < password.length; i++) {
            if (password[i] === '0' || password[i] === '1' || password[i] === '2' || password[i] === '3' || password[i] === '4' || password[i] === '5' || password[i] === '6' || password[i] === '7' || password[i] === '8' || password[i] === '9') {
                hasNumber = true;
                break;
            }
        }
        if (password.length < 6 || !hasNumber) {
            return false;
        }
        return true;
    };
    MarketplaceHome.prototype.validateCaptcha = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (!_this.captchaPassed) {
                reject("Please tick the \"I'm not a robot\" box at the bottom");
            }
            else {
                var data = {
                    captchaResponse: _this.captchaResponse
                };
                _this.http.post('https://server.abalobi.org/api/users/recaptcha', data).toPromise().then(function () {
                    resolve();
                }, function () {
                    console.log("Got error");
                    reject("Failed validating reCAPTCHA with server. Please try refreshing page");
                });
            }
        });
    };
    MarketplaceHome.prototype.trimFields = function () {
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
    };
    // validates the user on the client and server side to ensure that they can be registered
    MarketplaceHome.prototype.validate = function () {
        // if (!this.validateCaptcha())
        //   return Promise.reject("Failed validating captcha.  Please try refreshing page");
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.trimFields();
            var user_type = _this.personalForm.get("selectedItem").value;
            console.log("user_type = " + user_type);
            if (user_type === 'individual') {
                _this.name_of_establishment = "CSF " + _this.name + " " + _this.surname;
                _this.company_name = "CSF " + _this.name + " " + _this.surname;
            }
            if (_this.matchingAddresses) {
                _this.location_address = _this.address;
                _this.location_city = _this.city;
                _this.location_postal_code = _this.postal_code;
                if (!(_this.city)) {
                    reject("Please fill in Town/City as it is required for physical location");
                }
            }
            // check that all fields are filled in
            if (!(_this.email && _this.password && _this.name && _this.surname && _this.cell_number && _this.name_of_establishment && _this.company_name && user_type && _this.location_city)) {
                reject("Please fill in all required fields (marked with an '*')");
            }
            // Validate e-mail address(es)
            if (!_this.validateEmail(_this.email)) {
                reject("Please use a valid e-mail address");
            }
            if (!_this.validatePassword(_this.password)) {
                reject('Password must be at least 6 characters long and include a number');
            }
            if (_this.extra_email_1) {
                if (!_this.validateEmail(_this.extra_email_1)) {
                    reject("Please use a valid e-mail address for notifications e-mail 1");
                }
            }
            if (_this.extra_email_2) {
                if (!_this.validateEmail(_this.extra_email_2)) {
                    reject("Please use a valid e-mail address for notifications e-mail 2");
                }
            }
            if (_this.extra_email_3) {
                if (!_this.validateEmail(_this.extra_email_3)) {
                    reject("Please use a valid e-mail address for notifications e-mail 3");
                }
            }
            if (_this.extra_email_4) {
                if (!_this.validateEmail(_this.extra_email_4)) {
                    reject("Please use a valid e-mail address for notifications e-mail 4");
                }
            }
            if (_this.extra_email_5) {
                if (!_this.validateEmail(_this.extra_email_5)) {
                    reject("Please use a valid e-mail address for notifications e-mail 5");
                }
            }
            // check that the passwords match
            if (_this.password !== _this.repeat_password) {
                reject("The passwords you have entered do not match");
            }
            // rudimentarily check that the cell number is valid
            if (_this.cell_number.length < 2 || isNaN(parseFloat(_this.cell_number)) || _this.cell_number[0] !== '+') {
                reject("Please enter a valid phone number. Phone numbers should be in international format Example: +27821234567");
            }
            // check that the user does not already exist
            _this.marketplaceService.checkIfUserAlreadyExists(_this.email).then(function (user) {
                if (user[0]) {
                    reject("This username is already taken");
                }
                else {
                    resolve();
                }
            }).catch(function (error) {
                console.log(error);
                // alert(error);
            });
        }).catch(function (error) {
            return Promise.reject(error);
        });
    };
    // attempts to register the user on the marketplace
    MarketplaceHome.prototype.register = function () {
        console.log("Register clicked: VAT number = " + this.vat_number);
        if (!this.vat_number) {
            this.vat_number = '-';
        }
        var user_type = this.personalForm.get("selectedItem").value;
        var user = {
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
        return this.marketplaceService.registerUser(user).then(function () {
            return Promise.resolve();
        }).catch(function (error) {
            console.log("Error: ", error);
            return Promise.reject(error);
        });
    };
    MarketplaceHome.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
        this.loaderShowing = true;
    };
    MarketplaceHome.prototype.dismissLoader = function () {
        if (this.loaderShowing) {
            this.loading.dismiss();
            this.loaderShowing = false;
        }
    };
    MarketplaceHome.prototype.captchaResolved = function (response) {
        var _this = this;
        console.log("captchaResolved");
        console.log(response);
        this.zone.run(function () {
            // If the recaptcha expired then reset the state
            _this.captchaPassed = !!response;
            _this.captchaResponse = response;
        });
    };
    MarketplaceHome = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-marketplace-home',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\marketplace-home\marketplace-home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Register for ABALOBI Marketplace\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="page1">\n  <img id="banner-img" src="https://res.cloudinary.com/techairos/image/upload/v1523889571/QR_app_Banner_ylefpe.png"\n       style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;"/>\n\n  <form id="page-form1">\n    <div id="page-markdown1" class="show-list-numbers-and-dots">\n      <p id="header-text" style="color:#000000;">\n        Complete this form if you&#39;d like to be able to\n        <strong>\n          BUY seafood\n        </strong>\n        using the ABALOBI Marketplace app\n      </p>\n      <hr>\n\n      <p>\n        Thank you for your interest in sourcing traceable, storied seafood by empowered small-scale fishers!\n      </p>\n\n      <p>\n        Use of the Marketplace app is not (yet) open to the general public - our group of users is being grown with\n        hand-picked restaurants and chefs who understand and buy into what we\'re trying to achieve through ABALOBI.\n      </p>\n\n      <p>\n        If you feel that you fit the bill and are keen to become (or already are) an ambassador for traceable, storied\n        seafood by empowered small-scale fishers, then please register here and send a short motivation to\n        <a href="mailto:hello@abalobi.org">hello@abalobi.org</a> - we\'d love to hear more about your enterprise.\n      </p>\n    </div>\n\n\n    <ion-item-divider color="light" id="page-list-item-divider1">\n      Login Details\n    </ion-item-divider>\n\n    <ion-item id="page-input2">\n      <ion-label>\n        * Email\n      </ion-label>\n      <ion-input [(ngModel)]="email" name="email" type="email" placeholder="e.g. jsmith@gmail.com"\n                 [email]="true"></ion-input>\n    </ion-item>\n\n    <ion-item id="page-input3">\n      <ion-label>\n        * Password\n      </ion-label>\n      <ion-input [(ngModel)]="password" name="password" type="password" placeholder=""></ion-input>\n    </ion-item>\n\n    <ion-item id="page-input4">\n      <ion-label>\n        * Repeat Password\n      </ion-label>\n      <ion-input [(ngModel)]="repeat_password" name="repeat_password" type="password" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n\n\n  <form id="page-form3">\n    <ion-item-divider color="light" id="page-list-item-divider3">\n      Your Details\n    </ion-item-divider>\n\n    <ion-item id="page-input8">\n      <ion-label>\n        * Name\n      </ion-label>\n      <ion-input [(ngModel)]="name" name="name" type="text" placeholder="e.g. John"></ion-input>\n    </ion-item>\n\n    <ion-item id="page-input9">\n      <ion-label>\n        * Surname\n      </ion-label>\n      <ion-input [(ngModel)]="surname" name="surname" type="text" placeholder="e.g. Smith"></ion-input>\n    </ion-item>\n\n    <ion-item id="page-input10">\n      <ion-label>\n        * Cell Number\n      </ion-label>\n      <ion-input [(ngModel)]="cell_number" name="cell_number" type="tel" placeholder="e.g. +27821234567"></ion-input>\n    </ion-item>\n  </form>\n\n  <form id="page-form4">\n    <ion-item-divider color="light" id="page-list-item-divider4">\n      Type of Registration\n    </ion-item-divider>\n\n      <ion-label>\n        * Type (please select one):\n      </ion-label>\n      <div [formGroup]="myGroup">\n        <!--<ion-list formControlName="selectedItem" radio-group>-->\n        <ion-list [formControl]="personalForm.controls.selectedItem" radio-group>\n          <ion-item *ngFor="let item of userTypes">\n            <ion-label>{{item.label}}</ion-label>\n            <ion-radio item-left value="{{item.typeid}}"></ion-radio>\n          </ion-item>\n        </ion-list>\n      </div>\n\n    <!--<div class="radio" *ngFor="let u of user_type_list">-->\n      <!--<label><input type="radio" name="optradio" [(ngModel)]="selected_user_type" [value]="u.typeid">&nbsp; {{u.label}}</label>-->\n    <!--</div>-->\n  </form>\n\n  <form id="page-form5" *ngIf="personalForm.get(\'selectedItem\').value !== \'individual\'">\n    <ion-item-divider color="light" id="page-list-item-divider5">\n      Your Company\n    </ion-item-divider>\n\n    <ion-item id="page-input14">\n      <ion-label stacked>\n        * Name of establishment\n      </ion-label>\n      <ion-input [(ngModel)]="name_of_establishment" name="name_of_establishment" type="text"\n                 placeholder="The name shown to your patrons when they scan a QR code"></ion-input>\n    </ion-item>\n\n    <ion-item id="page-input15">\n      <ion-label stacked>\n        * Company Name (for invoice)\n      </ion-label>\n      <ion-input [(ngModel)]="company_name" name="company_name" type="text"\n                 placeholder="The name of the company as shown on invoice"></ion-input>\n      >\n    </ion-item>\n\n    <ion-item id="page-input16">\n      <ion-label stacked>\n        VAT number of Company\n      </ion-label>\n      <ion-input [(ngModel)]="vat_number" name="vat_number" type="text" placeholder="Optional"></ion-input>\n      >\n    </ion-item>\n\n    <ion-item id="page-input17">\n      <ion-label stacked>\n        Address (multiple lines allowed)\n      </ion-label>\n      <ion-textarea [(ngModel)]="address" name="address" type="text" placeholder="Optional"></ion-textarea>\n      >\n    </ion-item>\n\n    <ion-item id="page-input18">\n      <ion-label stacked>\n        Town/City\n      </ion-label>\n      <ion-input [(ngModel)]="city" name="city" type="text" placeholder="Optional"></ion-input>\n      >\n    </ion-item>\n\n    <ion-item id="page-input19">\n      <ion-label stacked>\n        Postal Code\n      </ion-label>\n      <ion-input [(ngModel)]="postal_code" name="postal_code" type="text" placeholder="Optional"></ion-input>\n      >\n    </ion-item>\n  </form>\n\n  <ion-item *ngIf="personalForm.get(\'selectedItem\').value !== \'individual\'">\n    <ion-label>Physical location is same as above address</ion-label>\n    <ion-checkbox checked="false" [(ngModel)]="matchingAddresses"></ion-checkbox>\n  </ion-item>\n\n  <form *ngIf="!matchingAddresses" id="page-form6">\n    <ion-item-divider color="light" id="page-list-item-divider6">\n      Location\n    </ion-item-divider>\n\n    <ion-item id="page-input20">\n      <ion-label stacked>\n        Address (multiple lines allowed)\n      </ion-label>\n      <ion-textarea [(ngModel)]="location_address" name="address" type="text" placeholder="Optional"></ion-textarea>\n      >\n    </ion-item>\n\n    <ion-item id="page-input21">\n      <ion-label stacked>\n        * Town/City\n      </ion-label>\n      <ion-input [(ngModel)]="location_city" name="city" type="text" placeholder="Optional"></ion-input>\n      >\n    </ion-item>\n\n    <ion-item id="page-input22">\n      <ion-label stacked>\n        Postal Code\n      </ion-label>\n      <ion-input [(ngModel)]="location_postal_code" name="postal_code" type="text" placeholder="Optional"></ion-input>\n      >\n    </ion-item>\n  </form>\n\n  <form id="page-form7">\n    <ion-item-divider color="light" id="page-list-item-divider7">\n      Social Media\n    </ion-item-divider>\n\n    <ion-item id="page-input23">\n      <ion-label stacked>\n        Instagram handle\n      </ion-label>\n      <ion-input [(ngModel)]="instagram_handle" name="instagram_handle" type="text" placeholder="Optional"></ion-input>\n      >\n    </ion-item>\n  </form>\n\n  <form id="page-form8" *ngIf="personalForm.get(\'selectedItem\').value !== \'individual\'">\n    <ion-item-divider color="light" id="page-list-item-divider8">\n      Notifications\n    </ion-item-divider>\n\n    <div>Invoices and QR codes are sent to you by e-mail. Please list any others who should receive these too (e.g.\n      finance department, floor manager etc.) The QR codes are for printing and displaying to restaurant patrons -\n      they scan these to view the HookToCook page for the seafood. New QR codes are provided with each purchase from\n      ABALOBI Marketplace.\n    </div>\n\n\n    <ion-item id="page-input24">\n      <ion-label stacked>\n        Also e-mail invoices and QR codes to\n      </ion-label>\n      <ion-input [(ngModel)]="extra_email_1" name="extra_email_1" type="email" placeholder="Optional"\n                 [email]="true"></ion-input>\n    </ion-item>\n\n    <ion-item id="page-input25">\n      <ion-label stacked>\n        Also e-mail invoices and QR codes to\n      </ion-label>\n      <ion-input [(ngModel)]="extra_email_2" name="extra_email_2" type="email" placeholder="Optional"\n                 [email]="true"></ion-input>\n    </ion-item>\n\n    <ion-item id="page-input26">\n      <ion-label stacked>\n        Also e-mail QR codes to\n      </ion-label>\n      <ion-input [(ngModel)]="extra_email_3" name="extra_email_3" type="email" placeholder="Optional"\n                 [email]="true"></ion-input>\n    </ion-item>\n\n    <ion-item id="page-input27">\n      <ion-label stacked>\n        Also e-mail QR codes to\n      </ion-label>\n      <ion-input [(ngModel)]="extra_email_4" name="extra_email_4" type="email" placeholder="Optional"\n                 [email]="true"></ion-input>\n    </ion-item>\n\n    <ion-item id="page-input28">\n      <ion-label stacked>\n        Also e-mail QR codes to\n      </ion-label>\n      <ion-input [(ngModel)]="extra_email_5" name="extra_email_5" type="email" placeholder="Optional"\n                 [email]="true"></ion-input>\n    </ion-item>\n\n    <!-- TODO: Re-enable this again when the word comes -->\n    <!--<re-captcha (resolved)="captchaResolved($event)" siteKey="6LdWBF4UAAAAAK8gVGD8yWcTbHsNaNEFtnFMJUU3"></re-captcha>-->\n    <div id="page-container1"></div>\n\n  </form>\n  <button id="page-button1" (click)="registerBtnClick()" ion-button color="positive" block>\n    Register\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\marketplace-home\marketplace-home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_MarketplaceService__["a" /* MarketplaceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], MarketplaceHome);
    return MarketplaceHome;
}());

//# sourceMappingURL=marketplace-home.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketplaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_base_urls__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MarketplaceService = /** @class */ (function () {
    function MarketplaceService(http) {
        this.http = http;
        this.urls = new __WEBPACK_IMPORTED_MODULE_2__classes_base_urls__["a" /* BaseUrls */]();
    }
    MarketplaceService.prototype.checkIfUserAlreadyExists = function (username) {
        return this.http.get(this.urls.marketplaceCheckUserURL + username).toPromise();
    };
    MarketplaceService.prototype.registerUser = function (user) {
        return this.http.post(this.urls.marketplaceAddUserURL, user).toPromise();
    };
    MarketplaceService.prototype.getUserTypes = function () {
        return this.http.get(this.urls.marketplaceGetUserTypesURL).toPromise();
    };
    MarketplaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MarketplaceService);
    return MarketplaceService;
}());

//# sourceMappingURL=MarketplaceService.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FisherRolePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fisher_useterms_fisher_useterms__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_FisherService__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Imported service


var FisherRolePage = /** @class */ (function () {
    function FisherRolePage(navCtrl, navParams, fisherService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fisherService = fisherService;
        this.formBuilder = formBuilder;
        this.validation_messages = {
            'role': [
                { type: 'required', message: 'Please select your role.' }
            ],
        };
        this.roleForm = this.formBuilder.group({
            "role": ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* Validators */].required],
        });
    }
    FisherRolePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FisherRolePage');
    };
    FisherRolePage.prototype.nextFromFisherRole = function () {
        var user_roles = [];
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fisher_useterms_fisher_useterms__["a" /* FisherUsetermsPage */]);
    };
    FisherRolePage.prototype.roleChanged = function () {
        this.role = this.roleForm.get("role").value;
    };
    FisherRolePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fisher-role',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\fisher-role\fisher-role.html"*/'\n<ion-header>\n    <ion-navbar>\n            <ion-title>Abalobi Register</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n<ion-content padding title="Abalobi Register-role" id="fisher-role-form">\n    <img id="banner-img" src="https://res.cloudinary.com/techairos/image/upload/v1523889571/QR_app_Banner_ylefpe.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n    <form [formGroup] = "roleForm">\n\n                <div id="page-markdown1" class="show-list-numbers-and-dots">\n                        <p id="header-text" style="color:#000000;">\n                            Complete this form if you&#39;d like to be able to\n                            <strong>\n                                LOG YOUR CATCH\n                            </strong>\n                            on the ABALOBI Fisher app.\n                        </p>\n                        <hr>\n                </div>\n\n                <!--<ion-label>I am a:</ion-label>-->\n                <p style="text-align:center"><b>I am a</b></p>\n\n                <ion-list radio-group type="text" formControlName=\'role\' (ionChange)="roleChanged()">\n                        <ion-item>\n                                <ion-label text-wrap>Fisher</ion-label>\n                                <ion-radio  type="text" value ="fisher" ></ion-radio>\n                        </ion-item>\n\n                        <ion-item>\n                                <ion-label text-wrap>Local Fisher Assistant</ion-label>\n                                <ion-radio type="text" value ="fisher_manager"></ion-radio>\n                        </ion-item>\n\n\n                        <ion-item>\n                                <ion-label text-wrap>Local Assistant AND Fisher (I will be logging my own catch)</ion-label>\n                                <ion-radio type="text" value ="fisher,fisher_manager"></ion-radio>\n                        </ion-item>\n                </ion-list>\n\n                <div style="color:red" text-wrap align="center" class="validation-errors">\n                        <ng-container *ngFor="let validation of validation_messages.role" >\n                                <div class="error-message" *ngIf="roleForm.get(\'role\').hasError(validation.type)"> <!-- && (roleForm.get(\'role\').dirty || roleForm.get(\'role\').touched)"-->\n                                        {{ validation.message }}\n                                </div>\n                        </ng-container>\n                </div>\n\n                <div *ngIf="roleForm.get(\'role\').value === \'fisher\' || roleForm.get(\'role\').value === \'fisher,fisher_manager\'">\n                        <!--<ion-label>I have the following roles:</ion-label>-->\n                  <p style="text-align:center"><b>I have the following roles</b></p>\n\n                  <ion-list>\n                    <ion-item>\n                      <ion-label> Crew</ion-label>\n                      <ion-checkbox [(ngModel)]="is_crew"\n                                    [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label> Skipper</ion-label>\n                      <ion-checkbox [(ngModel)]="is_skipper"\n                                    [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label> Shore Harvester</ion-label>\n                      <ion-checkbox [(ngModel)]="is_shore_harvester"\n                                    [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label> Shore Harvest Group Leader</ion-label>\n                      <ion-checkbox [(ngModel)]="is_shore_harvest_group_leader"\n                                    [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label> Fish Cleaner</ion-label>\n                      <ion-checkbox [(ngModel)]="is_fish_cleaner"\n                                    [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label> Quality Control Officer</ion-label>\n                      <ion-checkbox [(ngModel)]="is_quality_control_officer"\n                                    [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                    </ion-item>\n\n                    <ion-item>\n                      <ion-label> Coastal Product Producer</ion-label>\n                      <ion-checkbox [(ngModel)]="is_coastal_product_producer"\n                                    [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                    </ion-item>\n                  </ion-list>\n                </div>\n\n            <button ion-button full [disabled]="!roleForm.valid" (click)="nextFromFisherRole()">Next</button>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\fisher-role\fisher-role.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_FisherService__["a" /* FisherService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */]])
    ], FisherRolePage);
    return FisherRolePage;
}());

//# sourceMappingURL=fisher-role.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FisherUsetermsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fisher_personal_fisher_personal__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_FisherService__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_fisher_useterms_class__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Imported page classes

//Imported services

//Imported non-page classes


var FisherUsetermsPage = /** @class */ (function () {
    function FisherUsetermsPage(navCtrl, navParams, fisherService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fisherService = fisherService;
        this.formBuilder = formBuilder;
        this.display_afr = true;
        this.terms_status = new __WEBPACK_IMPORTED_MODULE_4__classes_fisher_useterms_class__["a" /* FisherUsetermsClass */]();
        this.validation_messages = {
            'agree': [
                { type: 'required', message: 'Check "*I Agree" to accept the terms above.' },
            ],
        };
        this.termsForm = this.formBuilder.group({
            'agree': ['', __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* Validators */].requiredTrue],
        });
        this.termsForm.reset('agree'); //reset the checkbox upon creation
    }
    FisherUsetermsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('Loading Terms & Conditions');
        this.fisherService.fisherGetTerms()
            .then(function (result) {
            _this.terms = result.terms;
            _this.terms_afr = result.terms_afr;
            console.log(_this.terms);
        }).catch(function (error) {
            console.log("Failed getting Ts&Cs: ", error);
        });
    };
    FisherUsetermsPage.prototype.onFisherFinishTerms = function () {
        this.fisherService.fisherUpdateTerms(this.terms_status);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__fisher_personal_fisher_personal__["a" /* FisherPersonalPage */]);
    };
    FisherUsetermsPage.prototype.termsChanged = function () {
        this.terms_status.terms_use_agreed = this.termsForm.get('agree').value;
    };
    FisherUsetermsPage.prototype.clickToggle = function () {
        this.display_afr = !this.display_afr;
    };
    FisherUsetermsPage.prototype.getText = function () {
        return this.display_afr ? 'Read in English' : 'Lees in Afrikaans';
    };
    FisherUsetermsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fisher-useterms',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\fisher-useterms\fisher-useterms.html"*/'<!--\n  Generated template for the FisherUsetermsPage page.\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n        <ion-navbar>\n                <ion-title>Terms of Use</ion-title>\n        </ion-navbar>\n</ion-header>\n\n\n<ion-content padding="true" title="Terms of Use" id="fisher-terms-form">\n\n            <form [formGroup] = "termsForm">\n\n\n\n                        <div *ngIf="display_afr === false">\n                                <p style="text-align:center"><b>Terms in English</b></p>\n                                <p text-wrap style="text-align:center;padding-left:0.5em;padding-right:0.5em"><!--style="padding-left:0.5em;padding-right:0.5em;text-align: center"-->\n                                        <b>{{terms}}</b>\n                                </p>\n                        </div>\n\n                        <div *ngIf="display_afr === true">\n                                <p style="text-align:center"><b>Terme in Afrikaans</b></p>\n                                <p text-wrap style="text-align:center;padding-left:0.5em;padding-right:0.5em"><!--style="padding-left:0.5em;padding-right:0.5em;text-align: center"-->\n                                        <b>{{terms_afr}}</b>\n                                </p>\n                        </div>\n\n                        <a button href="#" clear item-right (click)="clickToggle()">{{getText()}}</a>\n\n                        <ion-item>\n                                <ion-label>* I Agree</ion-label>\n                                <ion-checkbox formControlName=\'agree\' (ionChange)="termsChanged()"></ion-checkbox>\n                        </ion-item>\n\n                        <div style="color:red" text-wrap align="center" class="validation-errors">\n                            <ng-container *ngFor="let validation of validation_messages.agree" >\n                                    <div class="error-message" *ngIf="!termsForm.get(\'agree\').value"><!-- && ( termsForm.get(\'agree\').dirty || termsForm.get(\'agree\')).touched"-->\n                                                {{ validation.message }}\n                                    </div>\n                            </ng-container>\n                        </div>\n\n\n                        <p text-wrap style="text-align:center;padding-left:0.5em;padding-right:0.5em">\n                                <b> I further consent to share my data with the following parties (tick where applicable):</b>\n                        </p>\n\n\n                        <ion-list text-wrap id="termsOfUse-list2">\n                                <ion-item>\n                                        <ion-label> Abalobi Local Fisher Assistant</ion-label>\n                                        <ion-checkbox [(ngModel)]="terms_status.terms_assistant_agreed" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                                </ion-item>\n\n\n                                <ion-item>\n                                        <ion-label > DAFF (Department of Agriculture, Forestry and Fisheries)</ion-label>\n                                        <ion-checkbox [(ngModel)]="terms_status.terms_DAFF_agreed" [ngModelOptions]="{standalone: true}"></ion-checkbox>\n                                </ion-item>\n                        </ion-list>\n\n                        <button ion-button full  [disabled]="!termsForm.valid" (click)="onFisherFinishTerms()">Next</button>\n\n            </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\fisher-useterms\fisher-useterms.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_FisherService__["a" /* FisherService */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], FisherUsetermsPage);
    return FisherUsetermsPage;
}()); //end class

//# sourceMappingURL=fisher-useterms.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FisherPersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fisher_community_fisher_community__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_FisherService__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__classes_personal_info_class__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






//Function to check for matching passwords
function goodPasswords(passwordKey, confirmPasswordKey, nameKey, surnameKey) {
    return function (group) {
        var password = group.controls[passwordKey];
        var confirmPassword = group.controls[confirmPasswordKey];
        var name = group.controls[nameKey];
        var surname = group.controls[surnameKey];
        //Passwords mismatch
        if (password.value !== confirmPassword.value) {
            return {
                mismatchedPasswords: true
            };
        }
        else {
            //passwords too short
            if (password.value.length < 6) {
                return {
                    badPasswords: true
                };
            }
            // Check that password doesn't contain copy of name, surname or "password"
            var re = /password/gi;
            console.log(password.value);
            console.log(re);
            if (password.value.search(re) !== -1) {
                console.log("Password contains 'password'");
                return {
                    containsInvalidWords: true
                };
            }
            console.log(name.value);
            var expression = "99999999999";
            if (name.value !== "") {
                expression = name.value;
            }
            re = new RegExp(expression, 'gi');
            console.log("RegExp");
            console.log(re);
            if (re.test(password.value)) {
                console.log("Password contains name");
                return {
                    containsInvalidName: true
                };
            }
            console.log(name.value);
            expression = "99999999999";
            if (surname.value !== "") {
                expression = surname.value;
            }
            re = new RegExp(expression, 'gi');
            console.log("RegExp");
            console.log(re);
            if (re.test(password.value)) {
                console.log("Password contains name");
                return {
                    containsInvalidSurname: true
                };
            }
            //passwords have sufficient length,check representation of each of CAPS,small letters,---These password requirements have been shelved for now
            /*else{

                if(!hasUpperCase(password.value)){//discovered that there are no CAPS in password
                    return {
                        noUpperCase: true
                    };
                }

                else if(!hasLowerCase(password.value)){
                    return {
                        noLowerCase: true
                    };
                }

                else if(!hasNum(password.value)){
                    return {
                        noNum: true
                    };
                }


            }*/
        }
    };
}
// function hasUpperCase(password: string): boolean {//check if the given string has at least one Uppercase Letter
//     if(password.length < 1){//safety check string is not empty
//         return false;
//     }
//
//     else{
//             for(let i = 0;i<password.length;i++){
//                 let char = password.charAt(i);
//                 if(/[A-Z]/.test(char)){
//                     return true;
//                 }
//             }
//         return false;
//     }
// }
//
// function hasLowerCase(password: string): boolean {//return true if a Lowercase has been found
//     if(password.length < 1){//safety check string is not empty
//         return false;
//     }
//
//     else {
//         for (let i = 0; i < password.length; i++) {
//             let char = password.charAt(i);
//             if(/[a-z]/.test(char)){
//                 return true;
//             }
//         }
//         return false;
//     }
// }
//
// function hasNum(password: string): boolean {//return true if a digit has been found
//     if(password.length < 1){//safety check string is not empty
//         return false;
//     }
//
//     else {
//         for (let i = 0; i < password.length; i++) {
//             let char = password.charAt(i);
//             if(/^\d+$/.test(char)){
//                 return true;
//             }
//         }
//         return false;
//     }
// }
var FisherPersonalPage = /** @class */ (function () {
    function FisherPersonalPage(navCtrl, navParams, fisherService, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.fisherService = fisherService;
        this.formBuilder = formBuilder;
        this.personal_info = new __WEBPACK_IMPORTED_MODULE_5__classes_personal_info_class__["a" /* PersonalInfoClass */]();
        this.passwordContainsInvalidWords = false;
        this.validation_messages = {
            'surname': [
                { type: 'required', message: 'Surname is required.' }
            ],
            'name': [
                { type: 'required', message: 'Name is required.' }
            ],
            'nickname': [
                { type: 'required', message: 'Nickame is required.' }
            ],
            // 'gender': [
            //     {type: 'required', message: 'Gender is required.'}
            // ],
            'ID': [
                { type: 'required', message: 'ID is required.' },
                { type: 'minlength', message: 'ID number too short.' },
                { type: 'minLength', message: 'ID number too short.' },
                { type: 'maxlength', message: 'ID number too long.' },
                { type: 'maxLength', message: 'ID number too long.' },
                { type: 'pattern', message: 'Unacceptable symbols in ID.' }
            ],
            'cell': [
                { type: 'required', message: 'Cell Number is required.' },
                { type: 'minlength', message: 'Cell Number too short.' },
                { type: 'minLength', message: 'Cell Number too short.' },
                { type: 'maxlength', message: 'Cell Number too long.' },
                { type: 'maxLength', message: 'Cell Number too long.' },
                { type: 'pattern', message: 'Number must be in international format. e.g. instead of 0841111111 use +27841111111 for South African numbers' }
            ],
            'password1': [
                { type: 'required', message: 'Password is required.' },
            ],
            'password2': [
                { type: 'required', message: 'Password confirmation required.' },
            ]
        };
        this.personalForm = this.formBuilder.group({
            "surname": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            "name": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            "nickname": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            "email": ['',],
            "gender": ['',],
            "ID": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('^[a-zA-Z0-9]+$')])],
            "cell": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].pattern('^[+][0-9]+$')])],
            "password1": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required],
            "password2": ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["i" /* Validators */].required]
        }, { validator: goodPasswords('password1', 'password2', 'name', 'surname') });
    }
    FisherPersonalPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad FisherPersonalPage');
        var fileInput = document.getElementById('file-input');
        fileInput.addEventListener('change', function (e) { return _this.doSomethingWithFiles(e.target.files); });
    };
    FisherPersonalPage.prototype.onFisherFinishPersonal = function () {
        this.fisherService.fisherUpdatePersonal(this.personal_info);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fisher_community_fisher_community__["a" /* FisherCommunityPage */], this.personal_info);
    };
    FisherPersonalPage.prototype.surnameChanged = function () {
        this.personal_info.personal_surname = this.personalForm.get("surname").value;
    };
    FisherPersonalPage.prototype.nameChanged = function () {
        this.personal_info.personal_firstname = this.personalForm.get("name").value;
    };
    FisherPersonalPage.prototype.nickNameChanged = function () {
        this.personal_info.personal_nickname = this.personalForm.get("nickname").value;
    };
    FisherPersonalPage.prototype.emailChanged = function () {
        this.personal_info.personal_email = this.personalForm.get('email').value;
    };
    FisherPersonalPage.prototype.genderChanged = function () {
        this.personal_info.personal_gender = this.personalForm.get("gender").value;
    };
    FisherPersonalPage.prototype.IDchanged = function () {
        this.personal_info.personal_IDnum = this.personalForm.get("ID").value;
    };
    FisherPersonalPage.prototype.cellChanged = function () {
        this.personal_info.personal_cellNo = this.personalForm.get("cell").value;
    };
    FisherPersonalPage.prototype.password1Changed = function () {
        this.personal_info.personal_password1 = this.personalForm.get("password1").value;
    };
    FisherPersonalPage.prototype.password2Changed = function () {
        this.personal_info.personal_password2 = this.personalForm.get("password2").value;
    };
    FisherPersonalPage.prototype.doSomethingWithFiles = function (files) {
        var _this = this;
        console.log("doSomethingWithFiles: ", files);
        var file = null;
        for (var i = 0; i < files.length; i++) {
            if (files[i].type.match(/^image\//)) {
                file = files[i];
                break;
            }
        }
        if (file !== null) {
            var reader_1 = new FileReader();
            reader_1.readAsDataURL(file);
            reader_1.onloadend = function () {
                _this.base64Image = reader_1.result;
                // console.log("Got image: ", reader.result);
                _this.personal_info.personal_selfie = _this.base64Image;
            };
        }
    };
    FisherPersonalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fisher-personal',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\fisher-personal\fisher-personal.html"*/'<ion-header>\n        <ion-navbar>\n                <ion-title>Abalobi Register</ion-title>\n        </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding title="fisher-personal-form" id="page5">\n\n    <form [formGroup] = "personalForm">\n            <ion-item>\n                      <ion-label stacked>* Surname</ion-label>\n                    <ion-input type="text" formControlName="surname" placeholder="Enter your surname here"(ionChange)="surnameChanged()"></ion-input>\n            </ion-item>\n\n            <div style="color:red" text-wrap align="center" class="validation-errors">\n                        <ng-container *ngFor="let validation of validation_messages.surname" >\n                                <div class="error-message" *ngIf="personalForm.get(\'surname\').hasError(validation.type) && (personalForm.get(\'surname\').dirty || personalForm.get(\'surname\').touched)">\n                                    {{ validation.message }}\n                                </div>\n                        </ng-container>\n            </div>\n\n\n            <ion-item>\n                        <ion-label stacked>* First Name</ion-label>\n                        <ion-input type="text" formControlName="name" placeholder="Enter your name here"(ionChange)="nameChanged()"></ion-input>\n            </ion-item>\n\n            <div class="validation-errors">\n                        <ng-container *ngFor="let validation of validation_messages.name" >\n                                <div style="color:red" text-wrap align="center" class="error-message" *ngIf="personalForm.get(\'name\').hasError(validation.type) && (personalForm.get(\'name\').dirty || personalForm.get(\'name\').touched)">\n                                        {{ validation.message }}\n                                </div>\n                        </ng-container>\n            </div>\n\n\n            <ion-item>\n                        <ion-label stacked>* Nickname</ion-label>\n                        <ion-input type="text" formControlName="nickname" placeholder="What do people usually call you?"(ionChange)="nickNameChanged()"></ion-input>\n            </ion-item>\n\n            <div class="validation-errors">\n                        <ng-container *ngFor="let validation of validation_messages.nickname" >\n                                    <div style="color:red" text-wrap align="center" class="error-message" *ngIf="personalForm.get(\'nickname\').hasError(validation.type) && (personalForm.get(\'nickname\').dirty || personalForm.get(\'nickname\').touched)">\n                                            {{ validation.message }}\n                                    </div>\n                        </ng-container>\n            </div>\n\n      <ion-item>\n        <ion-label stacked>Selfie</ion-label>\n        <ion-input type="file" accept="image/*" capture id="file-input">asdasdasdd</ion-input>\n      </ion-item>\n      <img id="output-selfie" [src]="base64Image" *ngIf="base64Image"/>\n      <!--<button (click)="takePicture()">Take Selfie</button>-->\n\n      <ion-item>\n        <ion-label stacked>E-mail</ion-label>\n        <ion-input type="text" formControlName="email" placeholder="Optional e-mail where you can be reached"(ionChange)="emailChanged()"></ion-input>\n      </ion-item>\n\n      <div class="validation-errors">\n        <ng-container *ngFor="let validation of validation_messages.email" >\n          <div style="color:red" text-wrap align="center" class="error-message" *ngIf="personalForm.get(\'email\').hasError(validation.type) && (personalForm.get(\'email\').dirty || personalForm.get(\'email\').touched)">\n            {{ validation.message }}\n          </div>\n        </ng-container>\n      </div>\n\n\n            <ion-item>\n                    <ion-label stacked>Gender\n                    </ion-label>\n                        <ion-select formControlName="gender" (ionChange)=" genderChanged()">\n                                  <ion-option value = "male">Male</ion-option>\n                                  <ion-option value = "female">Female</ion-option>\n                        </ion-select>\n            </ion-item>\n            <!--<div class="validation-errors">-->\n                    <!--<ng-container *ngFor="let validation of validation_messages.gender" >-->\n                            <!--<div style="color:red" text-wrap align="center" class="error-message" *ngIf="personalForm.get(\'gender\').hasError(validation.type) && (personalForm.get(\'gender\').dirty || personalForm.get(\'gender\').touched)">-->\n                                    <!--{{ validation.message }}-->\n                            <!--</div>-->\n                    <!--</ng-container>-->\n            <!--</div>-->\n\n\n            <ion-item>\n                      <ion-label stacked>* ID Number</ion-label>\n                      <ion-input formControlName="ID"  type="text"  placeholder="Enter your ID Number here"(ionChange)="IDchanged()"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n                        <ng-container *ngFor="let validation of validation_messages.ID" >\n                                <div style="color:red" text-wrap align="center" class="error-message" *ngIf="personalForm.get(\'ID\').hasError(validation.type) && (personalForm.get(\'ID\').dirty || personalForm.get(\'ID\').touched)">\n                                    {{ validation.message }}\n                                </div>\n                        </ng-container>\n            </div>\n\n\n            <ion-item>\n                        <ion-label text-wrap stacked>* Personal Cellphone Number</ion-label>\n                        <ion-input formControlName="cell"  type="text"   placeholder="Enter your cell number here"(ionChange)="cellChanged()"></ion-input>\n            </ion-item>\n            <div style="color:red" text-wrap align="center" class="validation-errors">\n                    <ng-container *ngFor="let validation of validation_messages.cell" >\n                            <div class="error-message" *ngIf="personalForm.get(\'cell\').hasError(validation.type) && (personalForm.get(\'cell\').dirty || personalForm.get(\'cell\').touched)">\n                                    {{ validation.message }}\n                            </div>\n                    </ng-container>\n            </div>\n\n\n            <!--Password 1-->\n            <ion-item>\n                    <ion-label stacked>* Password</ion-label>\n                    <ion-input  type="text"  formControlName="password1" placeholder="Please choose a password"(ionChange)="password1Changed()"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n                    <ng-container *ngFor="let validation of validation_messages.password1" >\n                            <div style="color:red" text-wrap align="center" class="error-message" *ngIf="personalForm.get(\'password1\').hasError(validation.type) && (personalForm.get(\'password1\').dirty || personalForm.get(\'password1\').touched)">\n                                    {{ validation.message }}\n                            </div>\n                    </ng-container>\n            </div>\n            <!--span style="color:red" text-wrap align="center" class="validation-error" *ngIf="personalForm.get(\'password1\').touched && personalForm.get(\'password1\').errors?.notEqual"> Passwords do not match</span-->\n\n            <!--Password 2-->\n            <ion-item>\n                    <ion-label stacked>* Retype password</ion-label>\n                    <ion-input  type="text"  formControlName="password2" placeholder="Please re-type password"(ionChange)="password2Changed()"></ion-input>\n            </ion-item>\n            <div class="validation-errors">\n                    <ng-container *ngFor="let validation of validation_messages.password2" >\n                            <div style="color:red" text-wrap align="center" class="error-message" *ngIf="personalForm.get(\'password2\').hasError(validation.type) && (personalForm.get(\'password2\').dirty || personalForm.get(\'password2\').touched)">\n                                {{ validation.message }}\n                            </div>\n                    </ng-container>\n            </div>\n\n            <span style="color:red" text-wrap align="center" class="validation-errors" *ngIf="(personalForm.get(\'password1\').value.length >= 1)&&(personalForm.get(\'password2\').value.length >= 1)&& personalForm.hasError(\'mismatchedPasswords\')">Passwords do not match.</span>\n            <!--span style="color:red" text-wrap align="center" class="validation-errors" *ngIf="(personalForm.get(\'password1\').value.length >= 1)&&!personalForm.hasError(\'mismatchedPasswords\')&& personalForm.hasError(\'badPasswords\')">Passwords must have at least 6 characters.</span-->\n            <span style="color:red" text-wrap align="center" class="validation-errors" *ngIf="(personalForm.get(\'password1\').value.length >= 1)&&!personalForm.hasError(\'mismatchedPasswords\')&& personalForm.hasError(\'badPasswords\')">Passwords must have at least 6 characters.</span>\n            <span style="color:red" text-wrap align="center" class="validation-errors" *ngIf="(personalForm.get(\'password1\').value.length >= 1) && personalForm.hasError(\'containsInvalidWords\')">Password contains invalid word "password"</span>\n            <span style="color:red" text-wrap align="center" class="validation-errors" *ngIf="(personalForm.get(\'password1\').value.length >= 1) && personalForm.hasError(\'containsInvalidName\')">Password cannot contain name</span>\n            <span style="color:red" text-wrap align="center" class="validation-errors" *ngIf="(personalForm.get(\'password1\').value.length >= 1) && personalForm.hasError(\'containsInvalidSurname\')">Password cannot contain surname</span>\n        <!--span style="color:red" text-wrap align="center" class="validation-errors" *ngIf="(personalForm.get(\'password1\').value.length >= 1)&&!personalForm.hasError(\'mismatchedPasswords\')&& personalForm.hasError(\'noUpperCase\')">Password must contain at least one uppercase letter.</span>\n        <span style="color:red" text-wrap align="center" class="validation-errors" *ngIf="(personalForm.get(\'password1\').value.length >= 1)&&!personalForm.hasError(\'mismatchedPasswords\')&& personalForm.hasError(\'noLowerCase\')">Password must contain at least one lower case letter.</span>\n        <span style="color:red" text-wrap align="center" class="validation-errors" *ngIf="(personalForm.get(\'password1\').value.length >= 1)&&!personalForm.hasError(\'mismatchedPasswords\')&& personalForm.hasError(\'noNum\')">Password must contain at least one digit.</span-->\n\n\n            <button ion-button type="submit"  [disabled]="!personalForm.valid" full  (click)="onFisherFinishPersonal()">Next</button>\n    </form>\n\n</ion-content>\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\fisher-personal\fisher-personal.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_FisherService__["a" /* FisherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_FisherService__["a" /* FisherService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _d || Object])
    ], FisherPersonalPage);
    return FisherPersonalPage;
    var _a, _b, _c, _d;
}()); //end class

//# sourceMappingURL=fisher-personal.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FisherNotUniquePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FisherNotUniquePage = /** @class */ (function () {
    function FisherNotUniquePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FisherNotUniquePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FisherNotUniquePage');
    };
    FisherNotUniquePage.prototype.onbackToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    FisherNotUniquePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fisher-not-unique',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\fisher-not-unique\fisher-not-unique.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-wrap="true">\n\n      Registration Failure\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="page1">\n\n  <img id="banner-img" src="https://res.cloudinary.com/techairos/image/upload/v1523889571/QR_app_Banner_ylefpe.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n\n\n  <form id="page-form1">\n\n    <div id="page-markdown1" class="show-list-numbers-and-dots">\n\n\n\n      <hr>\n\n      <p align="center" text-wrap="true">\n\n        A registration with the specified ID number already exists on the ABALOBI sysytem. Please try again with a unique ID number.\n\n      </p>\n\n      <hr>\n\n\n\n    </div>\n\n\n\n\n\n    <button ion-button full  (click)="onbackToHome()">Back to Home</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\fisher-not-unique\fisher-not-unique.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FisherNotUniquePage);
    return FisherNotUniquePage;
}());

//# sourceMappingURL=fisher-not-unique.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FisherRegisterFailurePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FisherRegisterFailurePage = /** @class */ (function () {
    function FisherRegisterFailurePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FisherRegisterFailurePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FisherRegisterFailurePage');
    };
    FisherRegisterFailurePage.prototype.onbackToHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    FisherRegisterFailurePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-fisher-register-failure',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\fisher-register-failure\fisher-register-failure.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title text-wrap>\n\n      Registration Failure\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding id="page1">\n\n  <img id="banner-img" src="https://res.cloudinary.com/techairos/image/upload/v1523889571/QR_app_Banner_ylefpe.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n\n\n\n  <form id="page-form1">\n\n    <div id="page-markdown1" class="show-list-numbers-and-dots">\n\n\n\n      <hr>\n\n      <p align="center">\n\n        Your registration could not be completed. Please try again after a while.\n\n      </p>\n\n      <hr>\n\n\n\n    </div>\n\n\n\n\n\n    <button ion-button full  (click)="onbackToHome()">Back to Home</button>\n\n  </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\fisher-register-failure\fisher-register-failure.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], FisherRegisterFailurePage);
    return FisherRegisterFailurePage;
}());

//# sourceMappingURL=fisher-register-failure.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisherConfirmPageModule", function() { return FisherConfirmPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fisher_confirm__ = __webpack_require__(165);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FisherConfirmPageModule = /** @class */ (function () {
    function FisherConfirmPageModule() {
    }
    FisherConfirmPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fisher_confirm__["a" /* FisherConfirmPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fisher_confirm__["a" /* FisherConfirmPage */]),
            ],
        })
    ], FisherConfirmPageModule);
    return FisherConfirmPageModule;
}());

//# sourceMappingURL=fisher-confirm.module.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisherNotUniqueModule", function() { return FisherNotUniqueModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fisher_not_unique__ = __webpack_require__(175);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FisherNotUniqueModule = /** @class */ (function () {
    function FisherNotUniqueModule() {
    }
    FisherNotUniqueModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fisher_not_unique__["a" /* FisherNotUniquePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fisher_not_unique__["a" /* FisherNotUniquePage */]),
            ],
        })
    ], FisherNotUniqueModule);
    return FisherNotUniqueModule;
}());

//# sourceMappingURL=fisher-not-unique.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisherPersonalPageModule", function() { return FisherPersonalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fisher_personal__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FisherPersonalPageModule = /** @class */ (function () {
    function FisherPersonalPageModule() {
    }
    FisherPersonalPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fisher_personal__["a" /* FisherPersonalPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fisher_personal__["a" /* FisherPersonalPage */]),
            ],
        })
    ], FisherPersonalPageModule);
    return FisherPersonalPageModule;
}());

//# sourceMappingURL=fisher-personal.module.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisherRegisterFailurePageModule", function() { return FisherRegisterFailurePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fisher_register_failure__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FisherRegisterFailurePageModule = /** @class */ (function () {
    function FisherRegisterFailurePageModule() {
    }
    FisherRegisterFailurePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fisher_register_failure__["a" /* FisherRegisterFailurePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fisher_register_failure__["a" /* FisherRegisterFailurePage */]),
            ],
        })
    ], FisherRegisterFailurePageModule);
    return FisherRegisterFailurePageModule;
}());

//# sourceMappingURL=fisher-register-failure.module.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisherRegisterSuccessPageModule", function() { return FisherRegisterSuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fisher_register_success__ = __webpack_require__(169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FisherRegisterSuccessPageModule = /** @class */ (function () {
    function FisherRegisterSuccessPageModule() {
    }
    FisherRegisterSuccessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fisher_register_success__["a" /* FisherRegisterSuccessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fisher_register_success__["a" /* FisherRegisterSuccessPage */]),
            ],
        })
    ], FisherRegisterSuccessPageModule);
    return FisherRegisterSuccessPageModule;
}());

//# sourceMappingURL=fisher-register-success.module.js.map

/***/ }),

/***/ 182:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisherRolePageModule", function() { return FisherRolePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fisher_role__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FisherRolePageModule = /** @class */ (function () {
    function FisherRolePageModule() {
    }
    FisherRolePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fisher_role__["a" /* FisherRolePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fisher_role__["a" /* FisherRolePage */]),
            ],
        })
    ], FisherRolePageModule);
    return FisherRolePageModule;
}());

//# sourceMappingURL=fisher-role.module.js.map

/***/ }),

/***/ 183:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FisherUsetermsPageModule", function() { return FisherUsetermsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fisher_useterms__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FisherUsetermsPageModule = /** @class */ (function () {
    function FisherUsetermsPageModule() {
    }
    FisherUsetermsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__fisher_useterms__["a" /* FisherUsetermsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__fisher_useterms__["a" /* FisherUsetermsPage */]),
            ],
        })
    ], FisherUsetermsPageModule);
    return FisherUsetermsPageModule;
}());

//# sourceMappingURL=fisher-useterms.module.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(247);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_recaptcha__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng_recaptcha__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_marketplace_home_marketplace_home__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_MarketplaceService__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_FisherService__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__classes_registree_class__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_after_register_after_register_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_fisher_community_fisher_community_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_fisher_confirm_fisher_confirm_module__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_fisher_not_unique_fisher_not_unique_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_fisher_personal_fisher_personal_module__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_fisher_register_failure_fisher_register_failure_module__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_fisher_register_success_fisher_register_success_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_fisher_role_fisher_role_module__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_fisher_useterms_fisher_useterms_module__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__classes_confirm_password_validator_directive__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Modules







//Development

//Common landing page

//Fisher registration pages
//Marketplace registration pages

//Imported services













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_marketplace_home_marketplace_home__["a" /* MarketplaceHome */],
                __WEBPACK_IMPORTED_MODULE_22__classes_confirm_password_validator_directive__["a" /* confirmEqualValidatorsDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/after-register/after-register.module#AfterRegisterPageModule', name: 'AfterRegisterPage', segment: 'after-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fisher-community/fisher-community.module#FisherCommunityPageModule', name: 'FisherCommunityPage', segment: 'fisher-community', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fisher-confirm/fisher-confirm.module#FisherConfirmPageModule', name: 'FisherConfirmPage', segment: 'fisher-confirm', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fisher-not-unique/fisher-not-unique.module#FisherNotUniqueModule', name: 'FisherNotUniquePage', segment: 'fisher-not-unique', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fisher-personal/fisher-personal.module#FisherPersonalPageModule', name: 'FisherPersonalPage', segment: 'fisher-personal', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fisher-register-failure/fisher-register-failure.module#FisherRegisterFailurePageModule', name: 'FisherRegisterFailurePage', segment: 'fisher-register-failure', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fisher-register-success/fisher-register-success.module#FisherRegisterSuccessPageModule', name: 'FisherRegisterSuccessPage', segment: 'fisher-register-success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fisher-role/fisher-role.module#FisherRolePageModule', name: 'FisherRolePage', segment: 'fisher-role', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fisher-useterms/fisher-useterms.module#FisherUsetermsPageModule', name: 'FisherUsetermsPage', segment: 'fisher-useterms', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1_ng_recaptcha__["RecaptchaModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_13__pages_after_register_after_register_module__["AfterRegisterPageModule"],
                __WEBPACK_IMPORTED_MODULE_14__pages_fisher_community_fisher_community_module__["FisherCommunityPageModule"],
                __WEBPACK_IMPORTED_MODULE_15__pages_fisher_confirm_fisher_confirm_module__["FisherConfirmPageModule"],
                __WEBPACK_IMPORTED_MODULE_16__pages_fisher_not_unique_fisher_not_unique_module__["FisherNotUniqueModule"],
                __WEBPACK_IMPORTED_MODULE_17__pages_fisher_personal_fisher_personal_module__["FisherPersonalPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_fisher_register_failure_fisher_register_failure_module__["FisherRegisterFailurePageModule"],
                __WEBPACK_IMPORTED_MODULE_19__pages_fisher_register_success_fisher_register_success_module__["FisherRegisterSuccessPageModule"],
                __WEBPACK_IMPORTED_MODULE_20__pages_fisher_role_fisher_role_module__["FisherRolePageModule"],
                __WEBPACK_IMPORTED_MODULE_21__pages_fisher_useterms_fisher_useterms_module__["FisherUsetermsPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_marketplace_home_marketplace_home__["a" /* MarketplaceHome */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__providers_MarketplaceService__["a" /* MarketplaceService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_FisherService__["a" /* FisherService */],
                __WEBPACK_IMPORTED_MODULE_12__classes_registree_class__["a" /* Registree */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Fisher; });
//import {Device} from "@ionic-native/device";
var Fisher = /** @class */ (function () {
    function Fisher() {
        //Required
        this.preferred_language = "English";
        this.filter = "abalobi_registration";
        //Might be required
        this.landingsite_custom = "";
        this.app_version = "web_1.0.1";
        /*this.device_version         =   this.device.version;
        this.device_uuid            =   this.device.uuid;
        this.device_model           =   this.device.model;
        this.device_manufacturer    =   this.device.manufacturer;
        this.device_platform        =   this.device.platform;
        this.device_serial          =   this.device.serial;
        this.birth_date             =   "";*/
        this.uuid_timestamp = "1970-00-00T00:00:00.000Z"; // place temporary value for now until timestamp is implemented
    }
    return Fisher;
}());

//# sourceMappingURL=fisher-class.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FisherUsetermsClass; });
var FisherUsetermsClass = /** @class */ (function () {
    function FisherUsetermsClass() {
        this.terms_assistant_agreed = false;
        this.terms_DAFF_agreed = false;
        this.terms_use_agreed = false;
    }
    return FisherUsetermsClass;
}());

//# sourceMappingURL=fisher-useterms_class.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityInfoClass; });
var CommunityInfoClass = /** @class */ (function () {
    function CommunityInfoClass() {
        this.comm_country = "";
        this.comm_province = "";
        this.comm_community = "";
        this.custom_community = "";
        this.comm_not_listed = false;
        this.comm_IRP_chosen = false;
        this.comm_small_scale_chosen = false;
        this.comm_traditional_line_fish_chosen = false;
        this.comm_near_shore_commercial_lobster_chosen = false;
        this.comm_recreational_chosen = false;
        this.comm_other_chosen = false;
        this.comm_permit_other_manual = '';
    }
    return CommunityInfoClass;
}());

//# sourceMappingURL=community_info_class.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityClass; });
var CommunityClass = /** @class */ (function () {
    function CommunityClass(name_key, province_abbrev, name_Eng) {
        this.name_key = name_key;
        this.province_abbrev = province_abbrev;
        this.name_Eng = name_Eng;
    } //end constructor
    return CommunityClass;
}()); //end class

//# sourceMappingURL=community_class.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(36);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\dev\marketplace-register\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\dev\marketplace-register\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return confirmEqualValidatorsDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var confirmEqualValidatorsDirective = /** @class */ (function () {
    function confirmEqualValidatorsDirective() {
    }
    confirmEqualValidatorsDirective_1 = confirmEqualValidatorsDirective;
    confirmEqualValidatorsDirective.prototype.validate = function (control) {
        var controlToCompare = control.parent.get(this.appConfirmEqualValidator);
        if (controlToCompare && controlToCompare.value !== control.value) {
            return { 'notEqual': true };
        }
        return null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], confirmEqualValidatorsDirective.prototype, "appConfirmEqualValidator", void 0);
    confirmEqualValidatorsDirective = confirmEqualValidatorsDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Directive"])({
            selector: '[appConfirmEqualValidator]',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_0__angular_forms__["e" /* NG_VALIDATORS */],
                    useExisting: confirmEqualValidatorsDirective_1,
                    multi: true
                }]
        })
    ], confirmEqualValidatorsDirective);
    return confirmEqualValidatorsDirective;
    var confirmEqualValidatorsDirective_1;
}());

//# sourceMappingURL=confirm-password-validator-directive.js.map

/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FisherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__classes_registree_class__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__classes_fisher_class__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__classes_base_urls__ = __webpack_require__(167);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//Imported non-page classes



var FisherService = /** @class */ (function () {
    function FisherService(http, registree) {
        this.http = http;
        this.registree = registree;
        this.urls = new __WEBPACK_IMPORTED_MODULE_4__classes_base_urls__["a" /* BaseUrls */]();
    }
    FisherService.prototype.fisherUpdateRole = function (role_info, user_roles) {
        this.registree.role = role_info;
        this.registree.user_roles = user_roles;
        //update the registree in storage;--return a promise
        console.log("Fisher Service successfully updates role");
        console.log("Got user roles: ", user_roles);
    };
    FisherService.prototype.fisherGetTerms = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.urls.fisherGetTermsURL).toPromise()
                .then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    FisherService.prototype.fisherGetCommunities = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.urls.fisherGetCommunitiesURL).toPromise()
                .then(function (result) {
                resolve(result);
            }).catch(function (error) {
                reject(error);
            });
        });
    };
    FisherService.prototype.fisherUpdateTerms = function (terms_status) {
        this.registree.terms_agreed = terms_status.terms_use_agreed;
        this.registree.assistant_agreed = terms_status.terms_assistant_agreed;
        this.registree.DAFF_agreed = terms_status.terms_DAFF_agreed;
        //update the registree in storage;
        console.log("Fisher Service successfully updates terms of use");
    };
    FisherService.prototype.fisherUpdatePersonal = function (personal_info) {
        this.registree.surname = personal_info.personal_surname;
        this.registree.firstname = personal_info.personal_firstname;
        this.registree.nickname = personal_info.personal_nickname;
        this.registree.email = personal_info.personal_email;
        this.registree.gender = personal_info.personal_gender;
        this.registree.IDnum = personal_info.personal_IDnum;
        this.registree.cellNo = personal_info.personal_cellNo;
        this.registree.password = personal_info.personal_password1; //only use one copy of the 2 identical passwords
        this.registree.selfie = personal_info.personal_selfie;
        //update the registree in storage;
        console.log("Fisher Service successfully updates personal info");
    };
    FisherService.prototype.fisherUpdateCommunity = function (community_info) {
        this.registree.country = community_info.comm_country;
        this.registree.province = community_info.comm_province;
        this.registree.community = community_info.comm_community;
        this.registree.custom_community = community_info.custom_community;
        this.registree.comm_not_listed = community_info.comm_not_listed;
        this.registree.IRP_selected = community_info.comm_IRP_chosen;
        this.registree.small_scale_selected = community_info.comm_small_scale_chosen;
        this.registree.traditional_line_fish_selected = community_info.comm_traditional_line_fish_chosen;
        this.registree.near_shore_commercial_lobster_selected = community_info.comm_near_shore_commercial_lobster_chosen;
        this.registree.recreational_selected = community_info.comm_recreational_chosen;
        this.registree.other_seleted = community_info.comm_other_chosen;
        this.registree.permit_other_manual = community_info.comm_permit_other_manual;
    };
    //Build the fisher object
    FisherService.prototype.fisherBuild = function () {
        var fisher = new __WEBPACK_IMPORTED_MODULE_3__classes_fisher_class__["a" /* Fisher */]();
        this.parseFisher(fisher);
        //console.log("Service says 'This fisher has been created'");
        //console.log(fisher);
        return fisher;
    }; //end SubmitRegistration
    //parse fisher data to a format congruent to what the backend expects
    FisherService.prototype.parseFisher = function (fisher) {
        fisher.name = this.registree.firstname;
        fisher.surname = this.registree.surname;
        fisher.nickname = this.registree.nickname;
        fisher.email = this.registree.email;
        fisher.password = this.registree.password;
        fisher.cell = this.registree.cellNo;
        fisher.gender = this.registree.gender;
        fisher.id = this.registree.IDnum;
        fisher.photo_selfie = this.registree.selfie;
        fisher.usertype = this.registree.role;
        fisher.user_roles = this.registree.user_roles;
        fisher.landingsite = this.registree.community;
        fisher.landingsite_custom = this.registree.custom_community;
        fisher.fisher_license_irp = this.registree.IRP_selected;
        fisher.fisher_license_small_scale = this.registree.small_scale_selected;
        fisher.fisher_license_traditional_line_fish = this.registree.traditional_line_fish_selected;
        fisher.fisher_license_near_shore_commercial_lobster = this.registree.near_shore_commercial_lobster_selected;
        fisher.fisher_license_recreational = this.registree.recreational_selected;
        fisher.fisher_license_other = this.registree.permit_other_manual;
        fisher.permission_local_implementer = this.registree.assistant_agreed;
        fisher.permission_daff = this.registree.DAFF_agreed;
    };
    //Clear the recently entered fisher info
    FisherService.prototype.fisherClearDetails = function () {
        //Reset the registree fields after attempted registration
        //Role details
        this.registree.role = "";
        this.registree.user_roles = '';
        //Terms of use details
        this.registree.terms_agreed = false;
        this.registree.assistant_agreed = false;
        this.registree.DAFF_agreed = false;
        //Personal details
        this.registree.surname = "";
        this.registree.firstname = "";
        this.registree.nickname = "";
        this.registree.email = '';
        this.registree.gender = "";
        this.registree.IDnum = "";
        this.registree.cellNo = "";
        this.registree.password = "";
        this.registree.selfie = '';
        //Community details
        this.registree.province = "";
        this.registree.community = "";
        this.registree.custom_community = "";
        this.registree.comm_not_listed = false;
        this.registree.IRP_selected = false;
        this.registree.small_scale_selected = false;
        this.registree.traditional_line_fish_selected = false;
        this.registree.near_shore_commercial_lobster_selected = false;
        this.registree.recreational_selected = false;
        this.registree.other_seleted = false;
        this.registree.permit_other_manual = '';
        //console.log("........Fisher Service Cleared User Details........");
    };
    //Check if fisher with the proposed ID doesn't exist already
    FisherService.prototype.checkIfFisherAlreadyExists = function (ID) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.http.get(_this.urls.fisherCheckUserIDurl + ID).toPromise()
                .then(function () {
                reject();
            })
                .catch(function () {
                resolve();
            });
        });
    };
    //Go ahead and actually try to register the fisher
    FisherService.prototype.registerFisher = function (fisher) {
        //console.log("Posting fisher registration")
        return this.http.post(this.urls.fisherAddUserURL, fisher).toPromise();
    };
    FisherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__classes_registree_class__["a" /* Registree */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__classes_registree_class__["a" /* Registree */]) === "function" && _b || Object])
    ], FisherService);
    return FisherService;
    var _a, _b;
}()); //end class

//# sourceMappingURL=FisherService.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__marketplace_home_marketplace_home__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fisher_role_fisher_role__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    HomePage.prototype.onSelectFisherRegistration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__fisher_role_fisher_role__["a" /* FisherRolePage */]);
    };
    HomePage.prototype.onSelectMarketplaceRegistration = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__marketplace_home_marketplace_home__["a" /* MarketplaceHome */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\home\home.html"*/'<ion-header>\n        <ion-navbar>\n              <ion-title>\n                Abalobi Register\n              </ion-title>\n        </ion-navbar>\n</ion-header>\n\n\n\n<ion-content padding="true"  padding id="page1">\n  <img id="banner-img" src="https://res.cloudinary.com/techairos/image/upload/v1523889571/QR_app_Banner_ylefpe.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;">\n    <br>\n  <button text-wrap ion-button full (click)="onSelectFisherRegistration()">Register to use Fisher Logbook</button>\n    <br>\n  <button text-wrap ion-button full  (click)="onSelectMarketplaceRegistration()">Register to buy on Marketplace</button>\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]])
    ], HomePage);
    return HomePage;
}()); //end class homepage

//# sourceMappingURL=home.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map