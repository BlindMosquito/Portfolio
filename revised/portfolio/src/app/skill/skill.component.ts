import { Component } from '@angular/core';
import {Skill} from "./skill";
import skillJson from "./skill.json";

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent {
  private readonly skill: Skill[];

  constructor() {
    this.skill = this.GetSkills();
  }
  Skills():Skill[] { return this.skill; }

  private GetSkills():Skill[] {
    const length:number = skillJson.length;
    let skills:Skill[] = new Array<Skill>(length);
    skillJson.forEach(function(value, index) {
      skills[index] = new Skill(value.name, value.skill);
    });
    return skills;
  }
}
