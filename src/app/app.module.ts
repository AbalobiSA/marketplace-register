//Modules
import {HttpClientModule}       from "@angular/common/http";
import {RecaptchaModule}        from "ng-recaptcha";
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera/ngx';

//Development
import { MyApp }                from './app.component';
//Common landing page
import { HomePage }               from '../pages/home/home';
//Fisher registration pages
//Marketplace registration pages
import { MarketplaceHome }      from '../pages/marketplace-home/marketplace-home';

//Imported services
import {MarketplaceService}     from "../providers/MarketplaceService";
import{FisherService}           from "../providers/FisherService";
import{Registree}               from "../classes/registree_class";
import {AfterRegisterPageModule} from "../pages/after-register/after-register.module";
import {FisherCommunityPageModule} from "../pages/fisher-community/fisher-community.module";
import {FisherConfirmPageModule} from "../pages/fisher-confirm/fisher-confirm.module";
import {FisherNotUniqueModule} from "../pages/fisher-not-unique/fisher-not-unique.module";
import {FisherPersonalPageModule} from "../pages/fisher-personal/fisher-personal.module";
import {FisherRegisterFailurePageModule} from "../pages/fisher-register-failure/fisher-register-failure.module";
import {FisherRegisterSuccessPageModule} from "../pages/fisher-register-success/fisher-register-success.module";
import {FisherRolePageModule} from "../pages/fisher-role/fisher-role.module";
import {FisherUsetermsPageModule} from "../pages/fisher-useterms/fisher-useterms.module";
import {confirmEqualValidatorsDirective} from "../classes/confirm-password-validator-directive";




@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MarketplaceHome,
    confirmEqualValidatorsDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    RecaptchaModule.forRoot(),
    AfterRegisterPageModule,
    FisherCommunityPageModule,
    FisherConfirmPageModule,
    FisherNotUniqueModule,
    FisherPersonalPageModule,
    FisherRegisterFailurePageModule,
    FisherRegisterSuccessPageModule,
    FisherRolePageModule,
    FisherUsetermsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MarketplaceHome
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MarketplaceService,
    FisherService,
    Registree,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Camera
  ]
})
export class AppModule {}
