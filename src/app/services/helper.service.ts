import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(
    private storage: Storage,
    private statusBar: StatusBar
  ) { }

  async getStorage(key: string) {
    return await this.storage.get(key);
  }

  async setStorage(key: string, data: any) {
    await this.storage.set(key, data);
  }

  async clearStorage() {
    await this.storage.clear();
  }

  setColorStatusBar(hex: string, whiteText?: boolean) {
    this.statusBar.backgroundColorByHexString(hex);
    if (whiteText) {
      this.statusBar.styleLightContent();
    } else {
      this.statusBar.styleDefault();
    }
  }

}
