import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonSlides, MenuController, AlertController, NavController } from '@ionic/angular';
import { getQuestions, getCate } from 'src/app/data/questions/get-data';
import { KetquathiComponent } from '../ketquathi/ketquathi.component';
import { HelperService } from 'src/app/services/helper.service';

export enum Result {
  Dung = 1,
  Sai = 2,
  ChuaLam = 3,
}

@Component({
  selector: 'app-bailam',
  templateUrl: './bailam.page.html',
  styleUrls: ['./bailam.page.scss'],
})
export class BailamPage implements OnInit {

  @Input() idQuestion: string;
  @Input() time: number;
  @Input() type: string;
  @Input() xemCauSai: boolean;
  @Input() cate: any;
  @ViewChild('slide', { static: false }) slide: IonSlides;
  questions: any;
  timeView = '00:00';
  count = 0;
  questionInMenu = [];
  num: number;
  index: number;
  loading = true;
  constructor(public navCtrl: NavController, private helper: HelperService, public modalCtrl: ModalController, private menu: MenuController, public alertController: AlertController) {

  }

  ngOnInit() {
    this.helper.setColorStatusBar('#3171e0', true);
  }

  async ionViewDidEnter() {
    if (this.xemCauSai) {
      if (this.cate) {
        this.questions = getCate(this.type)[this.cate];
      } else {
        const questions = [];
        const history = await this.helper.getStorage(`history-${this.helper.type}`);
        history.forEach(h => {
          const question = getQuestions(this.helper.type, h.id);
          h.questions.forEach((q, i) => {
            if (q.result === 2) {
              questions.push(question.questions[i]);
            }
          });
        });
        this.questions = questions;
      }
    } else {
      const questions = getQuestions(this.type, this.idQuestion);
      this.num = questions.num;
      this.questions = questions.questions;
      this.countDown();
    }
    this.loading = false;
  }

  async slideChange() {
    if (this.xemCauSai) {
      this.index = await this.slide.getActiveIndex();
      this.getAnswersOfType(this.questions[this.index].result);
    }
  }

  async checkAnswers() {
    this.index = await this.slide.getActiveIndex();
    const corrects = this.questions[this.index].answers.filter(x => x.correct).length;
    const checkeds = this.questions[this.index].answers.filter(x => x.correct && x.checked === x.correct).length;
    const sl = this.questions[this.index].answers.filter(x => x.checked).length;
    if (corrects === checkeds && checkeds === sl) {
      this.questions[this.index].result = Result.Dung;
      const hisCate = await this.helper.getStorage(`history-cate-${this.type}`);
      if (!hisCate[this.cate].includes(this.index)) {
        hisCate[this.cate].push(this.index);
      }
      await this.helper.setStorage(`history-cate-${this.type}`, hisCate);
    } else {
      if (sl !== 0) {
        this.questions[this.index].result = Result.Sai;
      } else {
        this.questions[this.index].result = Result.ChuaLam;
      }
    }
  }

  getAnswersOfType(type: number) {
    return this.questions[this.index].answers.map((x, i) => {
      if (type === 1) {
        if (x.correct === true) { return i + 1; }
      } else {
        if (x.checked === true) { return i + 1; }
      }
    }).filter(x => x !== undefined);
  }

  async submit() {
    const cauchualam = this.questions.length - this.questions.filter(x =>
      x.answers.find(y => y.checked)
    ).length;
    const alert = await this.alertController.create({
      header: 'NỘP BÀI THI NGAY?',
      message: cauchualam === 0 ? 'Nộp bài thi ngay và chấm điểm' : `Bạn còn ${cauchualam} câu chưa trả lời. Bạn có chăc chắn muốn nộp bài ngay?`,
      buttons: [
        {
          text: 'Không',
          // role: 'cancel',
        }, {
          text: 'Có',
          handler: () => {
            this.submitHandler();
          }
        }
      ]
    });

    await alert.present();

  }

  async submitHandler() {
    let history: any[];
    const result: any = {
      num: Number,
      questions: [{
        answers: [],
        result: Number
      }
      ],
      pass: Boolean,
      ctime: Number,
      id: String
    };
    let socaudung = 0;
    result.questions = this.questions.map(question => {
      const corrects = question.answers.filter(x => x.correct).length;
      const checkeds = question.answers.filter(x => x.correct && x.checked === x.correct).length;
      const sl = question.answers.filter(x => x.checked).length;
      const answers = question.answers.map(x => x.checked);
      let re: number;
      if (corrects === checkeds && checkeds === sl) {
        socaudung++;
        re = Result.Dung;
      } else {
        if (sl !== 0) {
          re = Result.Sai;
        } else {
          re = Result.ChuaLam;
        }
      }
      return {
        answers,
        result: re
      };
    });

    if (socaudung >= 16) { result.pass = true; } else { result.pass = false; }
    result.ctime = this.helper.create_milisec('');
    result.id = this.idQuestion;
    result.num = this.num;

    history = await this.helper.getStorage(`history-${this.helper.type}`);
    if (!history) {
      history = [];
    }
    const index = history.findIndex(x => x.id === this.idQuestion);
    if (index !== -1) {
      history[index] = result;
    } else {
      history.push(result);
    }
    this.helper.setStorage(`history-${this.helper.type}`, history);
    this.presentKetQuaThi();
  }

  countDown() {
    this.count = this.time;
    // this.time = this.questions.time;
    const timer = setInterval(() => {
      if (this.count >= 0) {
        this.timeView = this.convertToTimeView(this.count);
        this.count--;
      } else {
        clearInterval(timer);
      }
    }, 1000);
  }

  openMenu() {
    this.questionInMenu = this.questions.map(x => {
      return {
        q: x.question,
        checked: x.answers.find(y => y.checked) ? 'ĐÃ LÀM' : 'CHƯA LÀM'
      };
    });
    this.menu.enable(true, 'chonCauHoi');
    this.menu.open('chonCauHoi');
  }

  convertToTimeView(sec: number) {
    const quotient = Math.floor(sec / 60);
    const remainder = sec % 60;
    const newRemainder = remainder < 10 ? '0' + remainder : remainder;
    return `${quotient}:${newRemainder}`;
  }

  slideTo(index: number) {
    console.log(index);
    this.menu.close();
    this.slide.slideTo(index);
  }

  async dismiss() {
    if (this.xemCauSai) {
      this.modalCtrl.dismiss();
    } else {
      const alert = await this.alertController.create({
        header: 'THOÁT BÀI THI?',
        message: 'Dữ liệu bài thi đang làm sẽ không được lưu lại, bạn có chắc chắn muốn thoát?',
        buttons: [
          {
            text: 'Không',
            // role: 'cancel',
          }, {
            text: 'Có',
            handler: () => {
              this.helper.setColorStatusBar('#ffffff');
              this.modalCtrl.dismiss({
                dismissed: true
              });
            }
          }
        ]
      });

      await alert.present();
    }
  }

  async presentKetQuaThi() {
    const modal = await this.modalCtrl.create({
      component: KetquathiComponent,
      componentProps: {
        idQuestion: this.idQuestion,
      }
    });
    await modal.present();
    await modal.onDidDismiss();

    this.helper.setColorStatusBar('#ffffff');
    this.close();
  }

  async close() {
    const modal = await this.modalCtrl.getTop();
    this.modalCtrl.dismiss(modal.id);
  }

}
