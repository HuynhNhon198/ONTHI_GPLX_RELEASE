import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThithuPage } from './thithu/thithu.page';
import { getListQuestions } from 'src/app/data/questions/get-data';

@Component({
  selector: 'app-onthi',
  templateUrl: './onthi.page.html',
  styleUrls: ['./onthi.page.scss'],
})
export class OnthiPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    console.log(getListQuestions('a1'));
  }
  async presentThiThu() {
    const modal = await this.modalController.create({
      component: ThithuPage
    });
    return await modal.present();
  }

}
