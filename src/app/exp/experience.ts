import {Project} from "../prj/project";

export class Experience {
  private readonly business:string;
  private readonly role:string;
  private readonly startDate:Date;
  private readonly endDate:Date;
  private readonly description:string;
  private readonly projects:Project[] | null;

  constructor(business: string, role: string, startDate: string, endDate: string, description: string, projects:Project[] | null = null) {
    this.business = business;
    this.role = role;
    this.startDate = new Date(startDate);
    this.endDate = new Date(endDate);
    this.description = description;
    this.projects = projects;
    this.TestVariables();
  }

  Business():string { return this.business; }
  Role():string { return this.role; }
  StartMonth():string { return this.GetMonth(this.startDate); }
  EndMonth():string { return this.GetMonth(this.endDate); }
  StartYear():number { return this.startDate.getFullYear(); }
  EndYear():number { return this.endDate.getFullYear(); }
  Description():string { return this.description; }
  Projects():Project[] | null { return this.projects; }

  GetMonth(date:Date):string {
    let months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"];
    return months[date.getMonth()];
  }

  private TestVariables():void {
    if(this.business.trim().length < 1) throw new Error("The business name cannot be null");
    if(this.role.trim().length < 1) throw new Error("The role name cannot be null");
    if(this.startDate > this.endDate) throw new Error("The end date must be after the start date");
    if(this.startDate.getFullYear() < 1900) throw new Error("I doubt you have experience before 1900");
    if(this.endDate.getFullYear() > 2400) throw new Error("Not sure if I'm more impressed this app is still being used by this year");
    if(this.description.trim().length < 1) throw new Error("The description cannot be null");
  }
}
