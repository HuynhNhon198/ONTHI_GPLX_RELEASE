import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThithuPage } from './thithu.page';

const routes: Routes = [
  {
    path: '',
    component: ThithuPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThithuPageRoutingModule {}
