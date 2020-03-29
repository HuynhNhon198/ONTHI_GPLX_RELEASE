import { Component, OnInit } from '@angular/core';
import { getSignByType } from 'src/app/data/signs';

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
    console.log(this.signs);
  }

}
