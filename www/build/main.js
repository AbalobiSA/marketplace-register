webpackJsonp([0],{

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
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
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 200:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_MarketplaceService__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__after_register_after_register__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(99);
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
    function HomePage(loadingCtrl, marketplaceService, navCtrl, http, zone) {
        this.loadingCtrl = loadingCtrl;
        this.marketplaceService = marketplaceService;
        this.navCtrl = navCtrl;
        this.http = http;
        this.zone = zone;
        this.captchaPassed = false;
    }
    // called from the UI when the register button has been clicked
    HomePage.prototype.registerBtnClick = function () {
        var _this = this;
        this.showLoader('Submitting your details');
        // validate the user's input
        this.validate().then(function () {
            // after validation -> attempt to register the user
            return _this.register();
        }).then(function () {
            // on succesful registration -> alert the user
            alert("You have successfully been registered with ABALOBI Marketplace");
            // clear fields
            _this.email = null;
            _this.password = null;
            _this.repeat_password = null;
            _this.name = null;
            _this.surname = null;
            _this.cell_number = null;
            _this.name_of_establishment = null;
            _this.company_details = null;
            _this.extra_email_1 = null;
            _this.extra_email_2 = null;
            _this.extra_email_3 = null;
            _this.extra_email_4 = null;
            _this.extra_email_5 = null;
            // navigate to the successful sign up page
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__after_register_after_register__["a" /* AfterRegisterPage */]);
            _this.dismissLoader();
        }).catch(function (error) {
            // alert the user to any errors that may have occurred
            alert(error);
            _this.dismissLoader();
        });
    };
    HomePage.prototype.validateEmail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };
    // validates the user on the client and server side to ensure that they can be registered
    HomePage.prototype.validate = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // check that the recaptcha was solved
            if (!_this.captchaPassed) {
                reject("Please solve the reCAPTCHA problem");
            }
            // TODO: Fix this check to make a request to the main server
            // reCAPTCHA has been solved, make request to server to verify
            var data = {
                captchaResponse: _this.captchaResponse
            };
            _this.http.post('http://localhost:8080/api/users/recaptcha', data).subscribe(function (res) {
                console.log(res);
            });
            // check that all fields are filled in
            if (!(_this.email && _this.password && _this.name && _this.surname && _this.cell_number && _this.name_of_establishment && _this.company_details)) {
                reject("Please fill in all the fields");
            }
            // Validate e-mail address(es)
            if (!_this.validateEmail(_this.email)) {
                reject("Please use a valid e-mail address");
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
            if (_this.cell_number.length !== 10 || isNaN(parseFloat(_this.cell_number))) {
                reject("Please enter a valid phone number");
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
    HomePage.prototype.register = function () {
        var user = {
            username: this.email,
            password: this.password,
            firstname: this.name,
            lastname: this.surname,
            h2c_buyer_company: this.name_of_establishment,
            buyer_details: this.company_details.split("\n"),
            sellerEnabled: false,
            abalobiId: null,
            cell_number: this.cell_number,
            approved: false,
            buyer_notifications: {
                extra_invoice_1: this.extra_email_1,
                extra_invoice_2: this.extra_email_2,
                extra_qr_1: this.extra_email_3,
                extra_qr_2: this.extra_email_4,
                extra_qr_3: this.extra_email_5
            }
        };
        return this.marketplaceService.registerUser(user).then(function () {
            return Promise.resolve();
        }).catch(function (error) {
            return Promise.reject(error);
        });
    };
    HomePage.prototype.showLoader = function (msg) {
        this.loading = this.loadingCtrl.create({
            content: msg
        });
        this.loading.present();
    };
    HomePage.prototype.dismissLoader = function () {
        this.loading.dismiss();
    };
    HomePage.prototype.captchaResolved = function (response) {
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
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Register for ABALOBI Marketplace\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1">\n  <img id="banner-img" src="https://res.cloudinary.com/techairos/image/upload/v1523889571/QR_app_Banner_ylefpe.png" style="display:block;width:100%;height:auto;margin-left:auto;margin-right:auto;" />\n  <form id="page-form1">\n    <div id="page-markdown1" class="show-list-numbers-and-dots">\n      <p id="header-text" style="color:#000000;">\n        Complete this form if you&#39;d like to be able to\n        <strong>\n          BUY seafood\n        </strong>\n        using the ABALOBI Marketplace app\n      </p>\n      <p>\n        Thank you for your interest in sourcing traceable, storied seafood by empowered small-scale fishers!\n      </p>\n      <p>\n        Use of the Marketplace app is not (yet) open to the general public - our group of users is being grown with\n        hand-picked restaurants and chefs who understand and buy into what we\'re trying to achieve through Abalobi.\n      </p>\n      <p>\n        If you feel that you fit the bill and are keen to become (or already are) an ambassador for traceable, storied\n        seafood by empowered small-scale fishers, then please register here and send a short motivation to\n        <a href="mailto:hello@abalobi.org">hello@abalobi.org</a> - we\'d love to hear more about your enterprise.\n      </p>\n    </div>\n    <ion-item-divider color="light" id="page-list-item-divider1">\n      Login Details\n    </ion-item-divider>\n    <ion-item id="page-input2">\n      <ion-label>\n        Email\n      </ion-label>\n      <ion-input [(ngModel)]="email" name="email" type="email" placeholder="e.g. jsmith@gmail.com" [email]="true"></ion-input>\n    </ion-item>\n    <ion-item id="page-input3">\n      <ion-label>\n        Password\n      </ion-label>\n      <ion-input [(ngModel)]="password" name="password" type="password" placeholder=""></ion-input>\n    </ion-item>\n    <ion-item id="page-input4">\n      <ion-label>\n        Repeat Password\n      </ion-label>\n      <ion-input [(ngModel)]="repeat_password" name="repeat_password" type="password" placeholder=""></ion-input>\n    </ion-item>\n  </form>\n  <form id="page-form3">\n    <ion-item-divider color="light" id="page-list-item-divider3">\n      Your Details\n    </ion-item-divider>\n    <ion-item id="page-input8">\n      <ion-label>\n        Name\n      </ion-label>\n      <ion-input [(ngModel)]="name" name="name" type="text" placeholder="e.g. John"></ion-input>\n    </ion-item>\n    <ion-item id="page-input9">\n      <ion-label>\n        Surname\n      </ion-label>\n      <ion-input [(ngModel)]="surname" name="surname" type="text" placeholder="e.g. Smith"></ion-input>\n    </ion-item>\n    <ion-item id="page-input10">\n      <ion-label>\n        Cell Number\n      </ion-label>\n      <ion-input [(ngModel)]="cell_number" name="cell_number" type="tel" placeholder="e.g. 0821234567"></ion-input>\n    </ion-item>\n  </form>\n  <form id="page-form5">\n    <ion-item-divider color="light" id="page-list-item-divider5">\n      Your Company\n    </ion-item-divider>\n    <ion-item id="page-input14">\n      <ion-label stacked>\n        Name of establishment\n      </ion-label>\n      <ion-input [(ngModel)]="name_of_establishment" name="name_of_establishment" type="text" placeholder="The name shown to the client"></ion-input>\n    </ion-item>\n    <ion-item id="page-input15">\n      <ion-label stacked>\n        Company details (multiple lines allowed)\n      </ion-label>\n      <ion-textarea [(ngModel)]="company_details" name="company_details" type="text" placeholder="What you want printed on the invoices"></ion-textarea>>\n    </ion-item>\n    <!--<div id="page-container1"></div>-->\n    <!--<button id="page-button1" (click)="registerBtnClick()" ion-button color="positive" block>-->\n      <!--Register-->\n    <!--</button>-->\n  </form>\n  <form id="page-form6">\n    <ion-item-divider color="light" id="page-list-item-divider6">\n      Notifications\n    </ion-item-divider>\n    <ion-item id="page-input16">\n      <ion-label stacked>\n        Also e-mail invoices and QR codes to\n      </ion-label>\n      <ion-input [(ngModel)]="extra_email_1" name="extra_email_1" type="email" placeholder="Optional" [email]="true"></ion-input>\n    </ion-item>\n    <ion-item id="page-input17">\n      <ion-label stacked>\n        Also e-mail invoices and QR codes to\n      </ion-label>\n      <ion-input [(ngModel)]="extra_email_2" name="extra_email_2" type="email" placeholder="Optional" [email]="true"></ion-input>\n    </ion-item>\n    <ion-item id="page-input18">\n      <ion-label stacked>\n        Also e-mail QR codes to\n      </ion-label>\n      <ion-input [(ngModel)]="extra_email_3" name="extra_email_3" type="email" placeholder="Optional" [email]="true"></ion-input>\n    </ion-item>\n    <ion-item id="page-input19">\n      <ion-label stacked>\n        Also e-mail QR codes to\n      </ion-label>\n      <ion-input [(ngModel)]="extra_email_4" name="extra_email_4" type="email" placeholder="Optional" [email]="true"></ion-input>\n    </ion-item>\n    <ion-item id="page-input20">\n      <ion-label stacked>\n        Also e-mail QR codes to\n      </ion-label>\n      <ion-input [(ngModel)]="extra_email_5" name="extra_email_5" type="email" placeholder="Optional" [email]="true"></ion-input>\n    </ion-item>\n    <re-captcha (resolved)="captchaResolved($event)" siteKey="6LdWBF4UAAAAAK8gVGD8yWcTbHsNaNEFtnFMJUU3"></re-captcha>\n    <div id="page-container1"></div>\n    <button id="page-button1" (click)="registerBtnClick()" ion-button color="positive" block>\n      Register\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_MarketplaceService__["a" /* MarketplaceService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgZone"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarketplaceService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(99);
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
        // SERVER_URL = "http://localhost:1337";
        this.SERVER_URL = "http://169.239.183.156:1337";
    }
    MarketplaceService.prototype.checkIfUserAlreadyExists = function (username) {
        return this.http.get(this.SERVER_URL + "/api/users/find/?username=" + username).toPromise();
    };
    MarketplaceService.prototype.registerUser = function (user) {
        return this.http.post(this.SERVER_URL + "/api/users/create/", user).toPromise();
    };
    MarketplaceService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MarketplaceService);
    return MarketplaceService;
}());

//# sourceMappingURL=MarketplaceService.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AfterRegisterPage; });
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

var AfterRegisterPage = /** @class */ (function () {
    function AfterRegisterPage() {
    }
    AfterRegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'after-register',template:/*ion-inline-start:"C:\dev\marketplace-register\src\pages\after-register\after-register.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Registered for ABALOBI Marketplace\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content id="content" padding>\n\n  <strong><p>Thank you for joining ABALOBI Marketplace!</p></strong>\n\n  <p>An ABALOBI team member will approve your registration and you will receive an e-mail letting you know you are activated. If you don\'t receive an e-mail within 1 business day please contact ABALOBI Support on 082 366 0270</p>\n\n  <a href="https://play.google.com/store/apps/details?id=com.abalobi.marketplace">\n\n    <button ion-button color="positive" block>\n\n      Download ABALOBI Marketplace\n\n    </button>\n\n  </a>\n\n  <a href="http://abalobi.info/"><button ion-button color="positive" block>\n\n    ABALOBI Website\n\n  </button></a>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\dev\marketplace-register\src\pages\after-register\after-register.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], AfterRegisterPage);
    return AfterRegisterPage;
}());

//# sourceMappingURL=after-register.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(225);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_MarketplaceService__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_after_register_after_register__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_recaptcha__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_recaptcha___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng_recaptcha__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_after_register_after_register__["a" /* AfterRegisterPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_10_ng_recaptcha__["RecaptchaModule"].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_after_register_after_register__["a" /* AfterRegisterPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__providers_MarketplaceService__["a" /* MarketplaceService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(200);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map