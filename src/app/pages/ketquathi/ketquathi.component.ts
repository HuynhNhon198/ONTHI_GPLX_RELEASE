import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { Result } from '../bailam/bailam.page';
import { getQuestions } from 'src/app/data/questions/get-data';
import { Router } from '@angular/router';
import { KetquathichitietComponent } from './ketquathichitiet/ketquathichitiet.component';

@Component({
  selector: 'app-ketquathi',
  templateUrl: './ketquathi.component.html',
  styleUrls: ['./ketquathi.component.scss']
})
export class KetquathiComponent implements OnInit {
  @Input() idQuestion: string;
  @Input() byDay: boolean;
  passed = false;
  nPass: number;
  nFail: number;
  data: {
    questions: [
      {
        answers: [];
        result: number;
      }
    ];
    pass: boolean;
    ctime: number;
    id: string;
  };
  questions: [any];
  result: any;
  r = 0;
  constructor(
    private router: Router,
    private navParams: NavParams,
    private helper: HelperService,
    private modalCtrl: ModalController
  ) {
    navParams.get('idQuestion');
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getData();
  }

  async getData() {
    const history = await this.helper.getStorage(`history-${this.helper.type}`);
    this.data = history.find(x => x.id === this.idQuestion && x.byDay === this.byDay);
    this.nPass = this.data.questions.filter(
      x => x.result === Result.Dung
    ).length;
    this.nFail = this.data.questions.filter(
      x => x.result === Result.Sai
    ).length;
    this.questions = getQuestions(this.helper.type, this.idQuestion).questions;
    this.questions.forEach((x, i) => {
      x.num = i + 1;
      x.answers.forEach((y, j) => {
        y.checked = this.data.questions[i].answers[j];
      });
      x.result = this.data.questions[i].result;
      x.totalQuestions = this.questions.length;
    });
    this.result = this.questions;
    this.passed = this.nPass > (this.result.length === 20 ? 15 : 25);
  }

  getResult(option: number) {
    this.r = option;
    if (option !== 0) {
      this.result = this.questions.filter((x, i) => x.result === option);
    } else {
      this.result = this.questions;
    }
  }

  async presentKetQuaThiChiTiet(question) {
    const modal = await this.modalCtrl.create({
      component: KetquathichitietComponent,
      componentProps: {
        question
      }
    });
    await modal.present();
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
