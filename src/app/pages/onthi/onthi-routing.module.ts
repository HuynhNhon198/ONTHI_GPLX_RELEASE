import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OnthiPage } from './onthi.page';

const routes: Routes = [
  {
    path: '',
    component: OnthiPage
  },  {
    path: 'thithu',
    loadChildren: () => import('./thithu/thithu.module').then( m => m.ThithuPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OnthiPageRoutingModule {}
