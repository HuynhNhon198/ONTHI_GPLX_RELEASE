import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ThithuPage } from './thithu/thithu.page';

@Component({
  selector: 'app-onthi',
  templateUrl: './onthi.page.html',
  styleUrls: ['./onthi.page.scss'],
})
export class OnthiPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }
  async presentThiThu() {
    const modal = await this.modalController.create({
      component: ThithuPage
    });
    return await modal.present();
  }

}
