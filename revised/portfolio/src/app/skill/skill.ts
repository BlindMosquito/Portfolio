export class Skill {
  private readonly name:string;
  private readonly skills:string[];

  constructor(name:string, skills:string[]) {
    this.name = name;
    this.skills = skills;
    this.TestVariables();
  }

  Name():string { return this.name; }
  Skills():string[] { return this.skills; }

  private TestVariables():void {
    if(this.name.trim().length < 1) throw new Error("The name of the skill group cannot be empty");
    if(this.skills.length < 1) throw new Error("Please list skills utilized in skill group");
  }
}
