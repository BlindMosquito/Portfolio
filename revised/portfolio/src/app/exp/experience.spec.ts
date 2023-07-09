import { TestBed } from "@angular/core/testing";
import { Experience } from './experience';

describe('Experience', () => {
  it("The business name and role name should update from constructor", () => {
    const businessName:string = "business";
    const roleName:string = "business";
    let exp: Experience = new Experience(businessName, roleName, new Date(), new Date());
    let business = exp.Business();
    let role = exp.Role();
    expect(business).toBe(businessName);
    expect(role).toBe(roleName);
  });
  it("An error should be thrown with null business name", () => {
    expect(() => {
      new Experience("", "Test", new Date(), new Date());
    }).toThrow(new Error("The business name cannot be null"));

    expect(() => {
      new Experience("  ", "Test", new Date(), new Date());
    }).toThrow(new Error("The business name cannot be null"));
  });

  it("An error should be thrown with null role name", () => {
    expect(() => {
      new Experience("Test", "", new Date(), new Date());
    }).toThrow(new Error("The role name cannot be null"));

    expect(() => {
      new Experience("Test", "   ", new Date(), new Date());
    }).toThrow(new Error("The role name cannot be null"));
  });

  it("Should return the name of the month depending on the date passed in", () => {
    let months: string[] = ["January", "February", "March", "April", "May", "June", "July", "August",
      "September", "October", "November", "December"];
    months.forEach(function (value, index) {
      let date:Date = new Date(2020, index, 1, 0, 0, 0, 0);
      let exp: Experience = new Experience("business", "role", date, date);
      let month = exp.GetMonth(date);
      expect(month).toBe(value);
    });
  });

  it("Should return correct start and end dates month and year", () => {
    let startDate:Date = new Date(2020, 2, 1, 0, 0, 0, 0);
    let endDate:Date = new Date(2023, 7, 1, 0, 0, 0, 0);
    let exp: Experience = new Experience("business", "role", startDate, endDate);
    expect(exp.StartMonth()).toBe("March");
    expect(exp.StartYear()).toBe(2020);
    expect(exp.EndMonth()).toBe("August");
    expect(exp.EndYear()).toBe(2023);
  });

  it("Should throw error if start date is greater then end date", () => {
    let startDate:Date = new Date(2020, 2, 1, 0, 0, 0, 0);
    let endDate:Date = new Date(2020, 1, 13, 0, 0, 0, 0);
    expect(() => {
      new Experience("business", "role", startDate, endDate);
    }).toThrow(new Error("The end date must be after the start date"));
  })

  it("Should throw error if start date is before 1900", () => {
    let startDate:Date = new Date(1895, 2, 1, 0, 0, 0, 0);
    let endDate:Date = new Date(2020, 1, 13, 0, 0, 0, 0);
    expect(() => {
      new Experience("business", "role", startDate, endDate);
    }).toThrow(new Error("I doubt you have experience before 1900"));
  })

  it("Should throw error if date is after 2300", () => {
    let startDate:Date = new Date(2020, 2, 1, 0, 0, 0, 0);
    let endDate:Date = new Date(2520, 1, 13, 0, 0, 0, 0);
    expect(() => {
      new Experience("business", "role", startDate, endDate);
    }).toThrow(new Error("Not sure if I'm more impressed this app is still being used by this year"));
  })
});
