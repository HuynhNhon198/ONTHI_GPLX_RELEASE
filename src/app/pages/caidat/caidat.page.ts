import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { SelectTypeComponent } from 'src/app/select-type/select-type.component';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-caidat',
  templateUrl: './caidat.page.html',
  styleUrls: ['./caidat.page.scss'],
})
export class CaidatPage implements OnInit {
  type = '';
  constructor(
    private helper: HelperService,
    private modalController: ModalController,
    public router: Router,
    private socialSharing: SocialSharing
  ) { }

  async ngOnInit() {
    this.type = await this.helper.getStorage('type');
  }

  ionViewWillEnter() {
    this.helper.setColorStatusBar('#0f2659', true);
  }

  ionViewWillLeave() {
    this.helper.setColorStatusBar('#ffffff');
  }

  async setType() {
    const modal = await this.modalController.create({
      component: SelectTypeComponent,
      componentProps: {
        showCancel: true,
        type: this.type
      }
    });
    await modal.present();
    const { data } = await modal.onWillDismiss();
    this.type = data.type || this.type;
  }

  share() {
    this.socialSharing.share('đây là share message');
  }

  openMail() {
    this.socialSharing.shareViaEmail('', '', ['huynhnhon.dev@gmail.com']);
  }

}
