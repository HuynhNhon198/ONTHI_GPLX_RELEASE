import { Component, OnInit } from '@angular/core';
import { getListQuestions } from 'src/app/data/questions/get-data';

@Component({
  selector: 'app-onthi',
  templateUrl: './onthi.page.html',
  styleUrls: ['./onthi.page.scss'],
})
export class OnthiPage implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(getListQuestions('a1'));
  }

}
