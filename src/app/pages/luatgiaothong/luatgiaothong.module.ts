import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LuatgiaothongPageRoutingModule } from './luatgiaothong-routing.module';

import { LuatgiaothongPage } from './luatgiaothong.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LuatgiaothongPageRoutingModule
  ],
  declarations: [LuatgiaothongPage]
})
export class LuatgiaothongPageModule {}
