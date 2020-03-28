import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HocthongminhPage } from './hocthongminh.page';

const routes: Routes = [
  {
    path: '',
    component: HocthongminhPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HocthongminhPageRoutingModule {}
