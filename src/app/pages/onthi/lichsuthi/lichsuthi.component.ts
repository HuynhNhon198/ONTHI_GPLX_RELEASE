import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { KetquathiComponent } from '../../ketquathi/ketquathi.component';

@Component({
  selector: 'app-lichsuthi',
  templateUrl: './lichsuthi.component.html',
  styleUrls: ['./lichsuthi.component.scss'],
})
export class LichsuthiComponent implements OnInit {

  listQuestions: {
    num: any;
    questions: [{
      answers: [],
      result: number
    }
    ],
    nPass: number,
    nFail: number,
    pass: boolean,
    ctime: number,
    id: string,
    byDay: boolean
  }[];

  constructor(public modalCtrl: ModalController, private helper: HelperService) { }

  ngOnInit() {
    this.helper.setColorStatusBar('#3171e0', true);
  }

  ionViewDidEnter() {
    this.getData();
  }

  async getData() {
    this.listQuestions = await this.helper.getStorage(`history-${this.helper.type}`);
    if (this.listQuestions !== null && this.listQuestions.filter(x => !x.byDay).length > 0) {
      this.listQuestions = this.listQuestions.filter(x => !x.byDay);
      this.listQuestions = this.helper.sortArrObj(this.listQuestions, 'ctime', 'desc');
      this.listQuestions.forEach(question => {
        question.nPass = question.questions.filter(x => x.result === 1).length;
        question.nFail = question.questions.filter(x => x.result === 2).length;
      });
    } else {
      this.modalCtrl.dismiss();
      this.helper.toastNoData();
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
    this.helper.setColorStatusBar('#ffffff');
  }

  async presentKetQuaThi(idQuestion: string) {
    const modal = await this.modalCtrl.create({
      component: KetquathiComponent,
      componentProps: {
        idQuestion
      }
    });
    await modal.present();
  }

}
