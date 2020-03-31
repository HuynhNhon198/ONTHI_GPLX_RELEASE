import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'onthi',
    loadChildren: () => import('./pages/onthi/onthi.module').then( m => m.OnthiPageModule)
  },
  {
    path: 'hocthongminh',
    loadChildren: () => import('./pages/hocthongminh/hocthongminh.module').then( m => m.HocthongminhPageModule)
  },
  {
    path: 'luatgiaothong',
    loadChildren: () => import('./pages/luatgiaothong/luatgiaothong.module').then( m => m.LuatgiaothongPageModule)
  },
  {
    path: 'caidat',
    loadChildren: () => import('./pages/caidat/caidat.module').then( m => m.CaidatPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
