// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Angular2TokenService } from 'angular2-token';
import 'rxjs/add/operator/map';

@Injectable()
export class PerformanceDataProvider {
  constructor(private _tokenService: Angular2TokenService) {}

  // constructor(public http: HttpClient) {
  //   console.log('Hello PerfomanceDataProvider Provider');
  // }

  saveData(data) {
     return this._tokenService.post('performance_data', data).map(data => data);
   }

   getResults() {
     return this._tokenService
        .get('performance_data')
        .map(results => results.json());
  }
 }
