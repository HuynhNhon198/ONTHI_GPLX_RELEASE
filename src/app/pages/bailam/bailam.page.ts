import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NavParams, ModalController, IonSlides, MenuController, AlertController } from '@ionic/angular';
import { getQuestions } from 'src/app/data/questions/get-data';


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
  @ViewChild('slide', { static: true }) slide: IonSlides;
  questions: any;
  timeView = '00:00';
  count = 0;

  constructor(public modalCtrl: ModalController, navParams: NavParams, private menu: MenuController, public alertController: AlertController) {
    navParams.get('idQuestion');
    navParams.get('time');
  }

  ngOnInit() {
    this.questions = getQuestions('a1', this.idQuestion);
    // this.timeView = this.convertToTimeView(this.time);
    this.countDown();
  }

  submit() {
    this.questions.questions.forEach(question => {
      const corrects = question.answers.filter(x => x.correct).length;
      const checkeds = question.answers.filter(x => x.correct && x.checked === x.correct).length;
      const sl = question.answers.filter(x => x.checked).length;
      if (corrects === checkeds && checkeds === sl) {
        question.result = Result.Dung;
      } else {
        if (sl !== 0) {
          question.result = Result.Sai;
        } else {
          question.result = Result.ChuaLam;
        }
      }
    });
    console.log(this.questions.questions);
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
