import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hocthongminh',
  templateUrl: './hocthongminh.page.html',
  styleUrls: ['./hocthongminh.page.scss'],
})
export class HocthongminhPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  counter(i: number) {
    return new Array(i);
  }
}
