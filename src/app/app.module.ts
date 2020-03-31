import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThithuPage } from './pages/onthi/thithu/thithu.page';
import { BailamPage } from './pages/bailam/bailam.page';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ThithuPage, BailamPage],
  entryComponents: [
    ThithuPage,
    BailamPage
  ],
  imports: [FormsModule, BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
