import { Component, OnInit, Input } from '@angular/core';
import { HelperService } from '../services/helper.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-type',
  templateUrl: './select-type.component.html',
  styleUrls: ['./select-type.component.scss'],
})
export class SelectTypeComponent implements OnInit {

  @Input() showCancel: boolean;
  @Input() type: string;
  types = [
    {
      name: 'a1',
      desc: 'Xe máy'
    },
    {
      name: 'a2',
      desc: 'Xe moto 2 bánh'
    },
    // {
    //   name: 'b1',
    //   desc: 'Xe oto tải trọng dưới 3.5 tấn'
    // },
    {
      name: 'b2',
      desc: 'Xe oto chở người dưới 9 chỗ'
    }
  ];
  constructor(
    private helper: HelperService,
    public modalController: ModalController
  ) { }

  ngOnInit() {
    console.log(this.showCancel);
  }

  async setType(type: string) {
    await this.helper.setStorage('type', type);
    this.helper.type = type;
    this.modalController.dismiss({
      type
    });
  }
}
