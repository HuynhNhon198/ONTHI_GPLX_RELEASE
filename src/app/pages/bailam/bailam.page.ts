import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonSlides, MenuController, AlertController, NavController } from '@ionic/angular';
import { getQuestions } from 'src/app/data/questions/get-data';
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
  @ViewChild('slide', { static: false }) slide: IonSlides;
  questions: any;
  timeView = '00:00';
  count = 0;
  questionInMenu = [];

  constructor(public navCtrl: NavController, private helper: HelperService, public modalCtrl: ModalController, navParams: NavParams, private menu: MenuController, public alertController: AlertController) {
    navParams.get('idQuestion');
    navParams.get('time');
  }

  ngOnInit() {
    this.helper.setColorStatusBar('#3171e0', true);
  }

  ionViewDidEnter() {
    this.questions = getQuestions(this.type, this.idQuestion);
    this.countDown();
  }

  async submit() {
    const alert = await this.alertController.create({
      header: 'NỘP BÀI THI NGAY?',
      message: 'Chỗ này để hỏi gì đó tí nữa sửa',
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
    result.questions = this.questions.questions.map(question => {
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
    result.num = this.questions.num;

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
    this.questionInMenu = this.questions.questions.map(x => {
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
