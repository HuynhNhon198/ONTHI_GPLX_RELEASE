import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { HelperService } from 'src/app/services/helper.service';
import { getListQuestions } from 'src/app/data/questions/get-data';

@Component({
  selector: 'app-lichsuthi',
  templateUrl: './lichsuthi.component.html',
  styleUrls: ['./lichsuthi.component.scss'],
})
export class LichsuthiComponent implements OnInit {

  listQuestions: {
    num: any;
    time: any;
    id: any;
    q_length: any;
    data: {
      questions: [{
        answers: [],
        result: number
      }
      ],
      pass: boolean,
      ctime: number,
      id: string
    }
  }[];

  constructor(public modalCtrl: ModalController, private helper: HelperService) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.getData();
  }

  getData() {
    const arr = getListQuestions(this.helper.type).map(async (question: any) => {
      const data = await this.helper.getStorage(question.id);
      if (data) {
        question.data = data;
        return question;
      }
    });
    console.log(this.listQuestions);
  }

  dismiss() {
    this.modalCtrl.dismiss({
      dismissed: true
    });
  }

}
