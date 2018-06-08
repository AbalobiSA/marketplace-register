import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MarketplaceService} from "../providers/MarketplaceService";
import {HttpClientModule} from "@angular/common/http";
import {AfterRegisterPage} from "../pages/after-register/after-register";
import {RecaptchaModule} from "ng-recaptcha";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AfterRegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    RecaptchaModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AfterRegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    MarketplaceService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
