import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BailamPageRoutingModule } from './bailam-routing.module';

import { BailamPage } from './bailam.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BailamPageRoutingModule
  ],
  declarations: [BailamPage]
})
export class BailamPageModule {}
