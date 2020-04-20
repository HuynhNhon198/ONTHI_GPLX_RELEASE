import { Component, OnInit } from '@angular/core';
import { getListQuestions } from 'src/app/data/questions/get-data';
import { HelperService } from 'src/app/services/helper.service';
import { ModalController, AlertController } from '@ionic/angular';
import { BailamPage } from '../bailam/bailam.page';
import { KetquathiComponent } from '../ketquathi/ketquathi.component';

@Component({
  selector: 'app-hocthongminh',
  templateUrl: './hocthongminh.page.html',
  styleUrls: ['./hocthongminh.page.scss'],
})
export class HocthongminhPage implements OnInit {

  constructor(
    private helper: HelperService,
    private modalCtrl: ModalController,
    private alertController: AlertController
  ) { }

  listQuestions: { num: any; time: any; id: any; q_length: any; }[] = [];
  historyByDay: {
    questions: {
      id: string;
      correct: number;
      q_length: number;
      num: number;
    }[],
    corr?: number,
    q_leg?: number
  }[] = [];

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.renderData();
  }

  counter(i: number) {
    return new Array(i);
  }

  async renderData() {
    this.helper.setColorStatusBar('#3171e0', true);
    let historyByDay = await this.helper.getStorage(`history-${this.helper.type}`);
    if (historyByDay === null) {
      historyByDay = [];
      await this.helper.setStorage(`history-${this.helper.type}`, []);
    }
    historyByDay = historyByDay.filter(x => x.byDay);
    const listQuestions = getListQuestions(this.helper.type) as any[];
    const days = [{
      questions: [],
    }];
    let ii = 0;
    listQuestions.forEach((q, i) => {
      const obj = historyByDay.find(x => x.id === q.id);
      q.correct = obj ? obj.questions.filter(x => x.result === 1).length : 0;
      days[ii].questions = [q, ...days[ii].questions || []];
      if ((i + 1) % 4 === 0 && (i + 1) < listQuestions.length) {
        ii++;
        days.push({
          questions: []
        });
      }
      i++;
    });
    this.historyByDay = days;
    this.calculate();
    console.log(this.historyByDay);
  }

  calculate() {
    let correct = 0;
    // tslint:disable-next-line: variable-name
    let q_length = 0;
    for (const i in this.historyByDay) {
      if (i) {
        let corr = 0;
        // tslint:disable-next-line: variable-name
        let q_leg = 0;
        this.historyByDay[i].questions.forEach(e => {
          corr += e.correct;
          q_leg += e.q_length;
        });
        this.historyByDay[i].corr = corr;
        this.historyByDay[i].q_leg = q_leg;
        correct += corr;
        q_length += q_leg;
      }
    }
    this.helper.setStorage(`percent-${this.helper.type}`, ((correct / q_length) * 100).toFixed(2));
  }

  async openBaiLam(idQuestion: string, correct: number, date: number, q: number) {
    const modal = await this.modalCtrl.create({
      component: correct === 0 ? BailamPage : KetquathiComponent,
      componentProps: {
        idQuestion,
        type: this.helper.type,
        byDay: true,
        day: {
          date,
          q
        }
      }
    });
    await modal.present();
    await modal.onDidDismiss();
    this.renderData();
  }

  async refresh() {
    const alert = await this.alertController.create({
      header: 'Bắt đầu lại từ ngày 1',
      message: 'BẠN CÓ CHẮC CHẮN MUỐN XÓA DỮ LIỆU ĐÃ HỌC THEO NGÀY ?',
      buttons: [
        {
          text: 'HỦY',
          // role: 'cancel',
        }, {
          text: 'XÓA',
          handler: async () => {
            let history = await this.helper.getStorage(`history-${this.helper.type}`);
            history = history.filter(x => !x.byDay);
            await this.helper.setStorage(`history-${this.helper.type}`, history);
            this.renderData();
          }
        }
      ]
    });

    await alert.present();
  }
}
