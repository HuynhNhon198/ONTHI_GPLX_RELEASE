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
import { SelectTypeComponent } from './select-type/select-type.component';

@NgModule({
  declarations: [
    AppComponent,
    ThithuPage,
    SelectTypeComponent
  ],
  entryComponents: [
    ThithuPage,
    SelectTypeComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot({hardwareBackButton: false}),
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
