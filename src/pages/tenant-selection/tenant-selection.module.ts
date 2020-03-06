import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TenantSelectionPage } from './tenant-selection';

@NgModule({
  declarations: [
    TenantSelectionPage,
  ],
  imports: [
    IonicPageModule.forChild(TenantSelectionPage),
  ],
})
export class TenantSelectionPageModule {}
