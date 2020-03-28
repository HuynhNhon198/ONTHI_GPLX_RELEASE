import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnthiPage } from './onthi.page';

const routes: Routes = [
  {
    path: '',
    component: OnthiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnthiPageRoutingModule {}
