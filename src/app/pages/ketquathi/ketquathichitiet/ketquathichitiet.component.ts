import { Component, OnInit, Input } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';

@Component({
  selector: 'app-ketquathichitiet',
  templateUrl: './ketquathichitiet.component.html',
  styleUrls: ['./ketquathichitiet.component.scss'],
})
export class KetquathichitietComponent implements OnInit {

  @Input() question: any;

  constructor(navParams: NavParams, public modalCtrl: ModalController) {
    navParams.get('questions');
  }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getData();
  }

  getData() {
  }

  getAnswersOfType(type) {
    return this.question.answers.map((x, i) => {
      if (type === 1) {
        if (x.correct === true) { return i + 1; }
      } else {
        if (x.checked === true) { return i + 1; }
      }
    }).filter(x => x !== undefined);
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

}
