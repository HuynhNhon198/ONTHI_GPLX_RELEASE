import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { BailamPage } from '../../bailam/bailam.page';
import { getListQuestions } from 'src/app/data/questions/get-data';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-thithu',
  templateUrl: './thithu.page.html',
  styleUrls: ['./thithu.page.scss'],
})
export class ThithuPage implements OnInit {

  constructor(public modalCtrl: ModalController, private helper: HelperService) { }

  listQuestions: { num: any; time: any; id: any; q_length: any; }[];

  ngOnInit() {
    this.listQuestions = this.helper.sortArrObj(getListQuestions(this.helper.type), 'num', 'asc');
  }

  randomCauHoi() {
    const num = Math.floor(Math.random() * this.listQuestions.length);
    this.presentCauHoi(this.listQuestions[num].id, this.listQuestions[num].time);
  }

  async presentCauHoi(idQuestion: string, time: number) {
    const modal = await this.modalCtrl.create({
      component: BailamPage,
      componentProps: {
        idQuestion,
        time,
        type: this.helper.type
      }
    });
    return await modal.present();
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
