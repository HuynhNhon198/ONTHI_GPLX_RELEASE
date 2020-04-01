import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThithuPage } from './thithu/thithu.page';
import { getAllQuestions } from 'src/app/data/questions/get-data';
import { HelperService } from 'src/app/services/helper.service';
import { SelectTypeComponent } from 'src/app/select-type/select-type.component';
import { LichsuthiComponent } from './lichsuthi/lichsuthi.component';

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
    shape: any;
  };
  constructor(
    public modalController: ModalController,
    private helper: HelperService
  ) { }

  async ngOnInit() {
  }

  async ionViewDidEnter() {
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

  renderData(type: string) {
    // console.log(getListQuestions(type));
    const all = getAllQuestions(type).questions;

    const filterType = (x, min: number, max: number) => {
      if (x.img === '') {
        return false;
      }
      const vitri = Number(x.img.match(/\d+/)[0]);
      return (min < vitri && vitri < max);
    };

    this.list = {
      all,
      signs: all.filter(x => filterType(x, 255, 356)),
      shape: all.filter(x => filterType(x, 355, 451))
    };
    console.log(this.list);
  }

}
