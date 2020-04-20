import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThithuPage } from './thithu/thithu.page';
import { getAllQuestions, getCate } from 'src/app/data/questions/get-data';
import { HelperService } from 'src/app/services/helper.service';
import { SelectTypeComponent } from 'src/app/select-type/select-type.component';
import { LichsuthiComponent } from './lichsuthi/lichsuthi.component';
import { MeothiComponent } from './meothi/meothi.component';
import { BailamPage } from '../bailam/bailam.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onthi',
  templateUrl: './onthi.page.html',
  styleUrls: ['./onthi.page.scss'],
})
export class OnthiPage implements OnInit {
  type = '';
  list: {
    all: any;
    signs: any;
    shapes: any;
    liet: any
  };
  hisCate = {
    all: [],
    signs: [],
    shapes: [],
    liet: []
  };
  percent = 0;
  constructor(
    public modalController: ModalController,
    private helper: HelperService,
    private router: Router
  ) { }

  async ngOnInit() {
    // this.helper.clearStorage();
  }

  openSmartLearn() {
    this.router.navigate(['tabs/tab2']);
  }
  async ionViewDidEnter() {
    this.helper.setColorStatusBar('#ffffff');
    const type = await this.helper.getStorage('type');
    if (type === null) {
      const modal = await this.modalController.create({
        component: SelectTypeComponent
      });
      await modal.present();
      this.helper.setColorStatusBar('#3171e0', true);
      const { data } = await modal.onWillDismiss();
      this.helper.setColorStatusBar('#ffffff');
      this.type = data.type;
      this.renderData(this.type);
    } else {
      this.type = type;
      this.helper.type = type;
      this.renderData(this.type);
    }

  }

  async presentThiThu() {
    const modal = await this.modalController.create({
      component: ThithuPage
    });
    return await modal.present();
  }

  async presentLichSuThi() {
    const modal = await this.modalController.create({
      component: LichsuthiComponent
    });
    return await modal.present();
  }
  async presentMeoThi() {
    const modal = await this.modalController.create({
      component: MeothiComponent
    });
    return await modal.present();
  }

  async presentXemCauSai(cate?: any) {
    const modal = await this.modalController.create({
      component: BailamPage,
      componentProps: {
        xemCauSai: true,
        cate,
        type: this.type
      }
    });
    await modal.present();
    await modal.onWillDismiss();
    this.getHisCate();
  }


  renderData(type: string) {
    this.list = getCate(type, true);
    this.calculator();
    this.getHisCate();
  }

  async getHisCate() {
    const data = await this.helper.getStorage(`history-cate-${this.type}`);
    if (data === null) {
      this.hisCate = {
        all: [],
        shapes: [],
        signs: [],
        liet: []
      };
      await this.helper.setStorage(`history-cate-${this.type}`, this.hisCate);
    } else {
      this.hisCate = data;
    }
  }

  async calculator() {
    const percent = await this.helper.getStorage(`percent-${this.helper.type}`);
    if (percent !== null) {
      this.percent = percent;
    }
  }

}
