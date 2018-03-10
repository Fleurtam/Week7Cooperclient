// import { PersonProvider } from '../../providers/person/person';
// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { CooperProvider } from '../cooper/cooper'
import { ConstructorProvider } from '@angular/core/src/di/provider';
/*
  Generated class for the PersonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PersonProvider {
  public gender: string;
  public age: number;
  public assessmentMessage: string;


  constructor(private cooper: CooperProvider){}

  doAssessment(distance: number): void {
    this.assessmentMessage = this.cooper.assess(this, distance);

//  constructor(public http: HttpClient) {
//      console.log('Hello PersonProvider Provider');

//
}
}
