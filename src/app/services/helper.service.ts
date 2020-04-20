import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class HelperService {

  type = 'a1';
  constructor(
    private storage: Storage,
    private statusBar: StatusBar,
    public toastController: ToastController
  ) {}

  async getStorage(key: string) {
    return await this.storage.get(key);
  }

  async setStorage(key: string, data: any) {
    await this.storage.set(key, data);
  }

  async clearStorage() {
    await this.storage.clear();
  }

  async toastNoData() {
    const toast = await this.toastController.create({
      message: 'CHƯA CÓ DỮ LIỆU',
      duration: 1500
    });
    toast.present();
  }

  setColorStatusBar(hex: string, whiteText?: boolean) {
    this.statusBar.backgroundColorByHexString(hex);
    if (whiteText) {
      this.statusBar.styleLightContent();
    } else {
      this.statusBar.styleDefault();
    }
  }

  create_milisec(date) {
    const d = (date === '' ? new Date() : new Date(date)).getTime().toString();
    return Number(d.substring(0, d.length - 3));
  }

  sortArrObj(arr: any[], prop: string, type: string) {
    if (type.toLowerCase() === 'asc') {
      return arr.sort((a, b) => (a[prop] > b[prop]) ? 1 : ((b[prop] > a[prop]) ? -1 : 0));
    } else {
      return arr.sort((a, b) => (a[prop] < b[prop]) ? 1 : ((b[prop] < a[prop]) ? -1 : 0));
    }
  }

}
