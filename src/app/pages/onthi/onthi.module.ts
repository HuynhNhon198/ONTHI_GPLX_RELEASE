import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OnthiPageRoutingModule } from './onthi-routing.module';

import { OnthiPage } from './onthi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OnthiPageRoutingModule
  ],
  declarations: [OnthiPage]
})
export class OnthiPageModule {}
