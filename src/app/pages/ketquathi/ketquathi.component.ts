import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { async } from '@angular/core/testing';
import { Result } from '../bailam/bailam.page';
import { getQuestions } from 'src/app/data/questions/get-data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ketquathi',
  templateUrl: './ketquathi.component.html',
  styleUrls: ['./ketquathi.component.scss']
})
export class KetquathiComponent implements OnInit {
  @Input() idQuestion: string;
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
    this.data = history.filter(x => x.id === this.idQuestion)[0];
    console.log(this.data);
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
    });
    this.result = this.questions;
    // console.log(this.questions);
  }

  getResult(option: number) {
    this.r = option;
    if (option !== 0) {
      this.result = this.questions.filter((x, i) => x.result === option);
    } else {
      this.result = this.questions;
    }
    // console.log(this.result);
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
