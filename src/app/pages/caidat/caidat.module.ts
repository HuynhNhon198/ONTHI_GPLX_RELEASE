import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CaidatPageRoutingModule } from './caidat-routing.module';

import { CaidatPage } from './caidat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CaidatPageRoutingModule
  ],
  declarations: [CaidatPage]
})
export class CaidatPageModule {}
