import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { getTipA1 } from 'src/app/data/questions/a1';
import { getTips } from 'src/app/data/questions/get-data';

@Component({
  selector: 'app-meothi',
  templateUrl: './meothi.component.html',
  styleUrls: ['./meothi.component.scss'],
})
export class MeothiComponent implements OnInit {
  type = 'lythuyet';
  data = [];
  renderData = [];
  constructor(
    private modalCtrl: ModalController,
    private helper: HelperService
  ) { }

  ngOnInit() {
    this.helper.setColorStatusBar('#3171e0', true);
    this.data = getTips(this.helper.type);
    this.renderData = this.data.find( x => x.type === 'lythuyet').tips;
    // console.log(this.renderData);
  }
  dismiss() {
    this.helper.setColorStatusBar('#ffffff');
    this.modalCtrl.dismiss();
  }

  segmentChanged(v) {
    this.renderData = this.data.find( x => x.type === v).tips || [];
    // console.log(this.renderData);
  }


}
