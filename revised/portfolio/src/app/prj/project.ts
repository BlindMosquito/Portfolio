export class Project {
  private readonly name:string;
  private readonly description:string;
  private readonly technologies:string[];

  constructor(name:string, description:string, technologies:string[]) {
    this.name = name;
    this.description = description
    this.technologies = technologies;
    this.TestVariables();
  }

  Name():string {return this.name;}
  Description():string {return this.description;}
  Technologies():string[] {return this.technologies;}

  private TestVariables():void {
    if(this.name.trim().length < 1) throw new Error("The name of the project cannot be empty");
    if(this.description.trim().length < 1) throw new Error("The description of the project cannot be empty");
    if(this.technologies.length < 1) throw new Error("Please list technologies utilized in project");
  }
}
