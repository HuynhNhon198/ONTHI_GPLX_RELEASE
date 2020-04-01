import { Component, OnInit, Input } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { async } from '@angular/core/testing';
import { Result } from '../bailam/bailam.page';
import { getQuestions } from 'src/app/data/questions/get-data';

@Component({
  selector: 'app-ketquathi',
  templateUrl: './ketquathi.component.html',
  styleUrls: ['./ketquathi.component.scss'],
})
export class KetquathiComponent implements OnInit {

  @Input() idQuestion: string;
  nPass: number;
  nFail: number;
  data: {
    questions: [{
      answers: [],
      result: number
    }
    ],
    pass: boolean,
    ctime: number,
    id: string
  };
  questions: [any];
  result: any;

  constructor(private navParams: NavParams, private helper: HelperService, private modalCtrl: ModalController) { navParams.get('idQuestion'); }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getData();
  }

  async getData() {
    this.data = await this.helper.getStorage(this.idQuestion);
    console.log(this.data);
    this.nPass = this.data.questions.filter(x => x.result === Result.Dung).length;
    this.nFail = this.data.questions.filter(x => x.result === Result.Sai).length;
    this.questions = getQuestions(this.helper.type, this.idQuestion).questions;
    this.questions.forEach((x, i) => {
      x.num = i;
      x.answers.forEach((y, j) => {
        y.checked = this.data.questions[i].answers[j];
      });
      x.result = this.data.questions[i].result;
    });
    this.result = this.questions;
    // console.log(this.questions);
  }

  getResult(option: number) {
    if (option !== 0) {
      this.result = this.questions.filter((x, i) =>
        x.result === option
      );
    } else { this.result = this.questions; }
    // console.log(this.result);
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
