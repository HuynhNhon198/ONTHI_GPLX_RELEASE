import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ThithuPage } from './pages/onthi/thithu/thithu.page';
import { BailamPage } from './pages/bailam/bailam.page';
import { FormsModule } from '@angular/forms';
import { SelectTypeComponent } from './select-type/select-type.component';
import { KetquathiComponent } from './pages/ketquathi/ketquathi.component';
import { LichsuthiComponent } from './pages/onthi/lichsuthi/lichsuthi.component';
import { MeothiComponent } from './pages/onthi/meothi/meothi.component';
import { KetquathichitietComponent } from './pages/ketquathi/ketquathichitiet/ketquathichitiet.component';


@NgModule({
  declarations: [
    AppComponent,
    ThithuPage,
    BailamPage,
    KetquathiComponent,
    LichsuthiComponent,
    SelectTypeComponent,
    KetquathichitietComponent,
    MeothiComponent,
  ],
  entryComponents: [
    ThithuPage,
    BailamPage,
    KetquathiComponent,
    LichsuthiComponent,
    SelectTypeComponent,
    KetquathichitietComponent,
    MeothiComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IonicModule.forRoot({ hardwareBackButton: false }),
    AppRoutingModule,
    IonicStorageModule.forRoot()],
  providers: [
    StatusBar,
    SplashScreen,
    SocialSharing,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
