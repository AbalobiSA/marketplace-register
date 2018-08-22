import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AfterRegisterPage } from './after-register';

@NgModule({
  declarations: [
    AfterRegisterPage,
  ],
  imports: [
    IonicPageModule.forChild(AfterRegisterPage),
  ],
})
export class AfterRegisterPageModule {}
