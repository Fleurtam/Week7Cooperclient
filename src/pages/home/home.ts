import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { PerfomanceDataProvider } from '../../providers/perfomance-data/perfomance-data';
import { PersonProvider } from '../../providers/person/person';
import { ResultsPage } from '../results/results';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  user: any = {};

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public person: PersonProvider
    // public perfomanceData: PerfomanceDataProvider
  ) {
    this.user = { distance: 1000, age: 20, gender: 'female' };
  }

  // calculate(user) {
  //   this.person.doAssessment(user.distance);
  //   this.perfomanceData
  //     .saveData({ performance_data: { data: { message: this.person.assessmentMessage } } })
  //     .subscribe(data => console.log(data));
  // }

  calculate() {
    this.person.age = this.user.age;
    this.person.gender = this.user.gender;

    this.person.doAssessment(this.user.distance);
    console.log(this.person.assessmentMessage);
  }

  showResults() {
    this.modalCtrl.create(ResultsPage).present();
  }

  
}
