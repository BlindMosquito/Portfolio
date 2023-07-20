import { Component } from '@angular/core';
import {Experience} from "./experience";
import experienceJson from './experience.json';
import {Project} from "../prj/project";

@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent {
  private readonly experience: Experience[];

  constructor() {
    this.experience = this.GetExperience();
  }

  Experiences():Experience[] {
    return this.experience;
  }


  private GetExperience():Experience[] {
    const length = experienceJson.length;
    let exp = new Array<Experience>(length);
    for(let i = 0; i < length; ++i) {
      let value = experienceJson[i];
      let projects = this.GetProjects(value.projects);
      exp[i] = new Experience(value.business, value.role, value.startDate, value.endDate, value.description, projects);
    }
    return exp;
  }

  private GetProjects(proj:{name: string, description: string, technologies: string[]}[] | undefined):Project[] | null {
    if(proj == null || proj.length < 1) return null;
    let p:Project[] = new Array<Project>(proj.length);
    proj.forEach(function (value, index) {
      p[index] = new Project(value.name, value.description, value.technologies);
    })
    return p;
  }
}
