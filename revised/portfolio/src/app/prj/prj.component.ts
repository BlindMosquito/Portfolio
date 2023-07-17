import { Component } from '@angular/core';
import {Project} from "./project";
import projectJson from './project.json';

@Component({
  selector: 'app-prj',
  templateUrl: './prj.component.html',
  styleUrls: ['./prj.component.scss']
})
export class PrjComponent {
  private readonly project: Project[];

  constructor() {
    this.project = this.GetProjects();
  }

  Projects():Project[] {
    return this.project;
  }

  private GetProjects():Project[] {
    const length:number = projectJson.length;
    let projects:Project[] = new Array<Project>(length);
    for(let i:number = 0; i < length; ++i) {
      let p = projectJson[i];
      projects[i] = new Project(p.name, p.description, p.technologies, p.link, p.why);
    }
    return projects;
  }
}
