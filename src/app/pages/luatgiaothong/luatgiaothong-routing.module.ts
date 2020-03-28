import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LuatgiaothongPage } from './luatgiaothong.page';

const routes: Routes = [
  {
    path: '',
    component: LuatgiaothongPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LuatgiaothongPageRoutingModule {}
