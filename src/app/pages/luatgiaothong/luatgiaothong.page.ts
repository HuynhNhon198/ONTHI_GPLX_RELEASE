import { Component, OnInit, ViewChild } from '@angular/core';
import { getSignByType } from 'src/app/data/signs';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-luatgiaothong',
  templateUrl: './luatgiaothong.page.html',
  styleUrls: ['./luatgiaothong.page.scss'],
})
export class LuatgiaothongPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 200,
  };
  signs: any = [];
  constructor() { }

  ngOnInit() {
    this.renderData('bienbaocam');
  }

  renderData(type: string) {
    this.signs = getSignByType(type);
  }

  segmentChanged(ev: any) {
    this.renderData(ev.detail.value);
  }

}
