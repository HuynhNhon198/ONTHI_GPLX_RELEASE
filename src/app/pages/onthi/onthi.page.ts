import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThithuPage } from './thithu/thithu.page';
import { getListQuestions } from 'src/app/data/questions/get-data';
import { HelperService } from 'src/app/services/helper.service';
import { SelectTypeComponent } from 'src/app/select-type/select-type.component';

@Component({
  selector: 'app-onthi',
  templateUrl: './onthi.page.html',
  styleUrls: ['./onthi.page.scss'],
})
export class OnthiPage implements OnInit {
  type = '';
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
      this.renderData(this.type);
    }

  }

  async presentThiThu() {
    const modal = await this.modalController.create({
      component: ThithuPage
    });
    return await modal.present();
  }

  renderData(type: string) {
    console.log(getListQuestions(type));
  }



}
