import { Component } from '@angular/core';
import {Experience} from "./experience";
import experienceJson from './experience.json';

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent {
  //private experience: Array<Experience>;

  constructor() {
    const totalExp = experienceJson.length;
    experienceJson.forEach(function (value) {
      let ex = new Experience(value.business, value.role, value.startDate, value.endDate);
      console.log(`The b: ${ex.Business()} r: ${ex.Role()} sd: ${ex.StartMonth()}-${ex.StartYear()} ed: ${ex.EndMonth()}-${ex.EndYear()}`);
    })
  }


}
