export class Experience {
  private readonly business:string = "";
  private readonly role:string = "";
  private readonly startDate:Date;
  private readonly endDate:Date;

  constructor(business:string, role:string, startDate:Date, endDate:Date) {
    this.business = business;
    this.role = role;
    this.startDate = startDate;
    this.endDate = endDate;
    this.TestVariables();
  }

  Business():string { return this.business; }
  Role():string { return this.role; }
  StartMonth():string { return this.GetMonth(this.startDate); }
  EndMonth():string { return this.GetMonth(this.endDate); }
  StartYear():number { return this.startDate.getFullYear(); }
  EndYear():number { return this.endDate.getFullYear(); }

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
  }

}
