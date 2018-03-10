import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
  results = [];
  constructor(
    private perfomanceData: PerformanceDataProvider,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}


  // )
  // (public navCtrl: NavController, public navParams: NavParams) {
  // }

  ionViewDidLoad() {
    this.perfomanceData
         .getResults()
         .subscribe(data => (this.results = data.entries));
     }

    // console.log('ionViewDidLoad ResultsPage');
  }
