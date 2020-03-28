import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HocthongminhPageRoutingModule } from './hocthongminh-routing.module';

import { HocthongminhPage } from './hocthongminh.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HocthongminhPageRoutingModule
  ],
  declarations: [HocthongminhPage]
})
export class HocthongminhPageModule {}
