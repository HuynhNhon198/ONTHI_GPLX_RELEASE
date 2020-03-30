import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ThithuPageRoutingModule } from './thithu-routing.module';

import { ThithuPage } from './thithu.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThithuPageRoutingModule
  ],
  declarations: [ThithuPage]
})
export class ThithuPageModule {}
