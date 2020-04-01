import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-meothi',
  templateUrl: './meothi.component.html',
  styleUrls: ['./meothi.component.scss'],
})
export class MeothiComponent implements OnInit {

  constructor(
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {}
  dismiss() {
    this.modalCtrl.dismiss();
  }

  segmentChanged(v) {
    console.log(v);
  }
}
