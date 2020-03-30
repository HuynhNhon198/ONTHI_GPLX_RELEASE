import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BailamPage } from './bailam.page';

const routes: Routes = [
  {
    path: '',
    component: BailamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BailamPageRoutingModule {}
