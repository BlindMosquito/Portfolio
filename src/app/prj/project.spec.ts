import {Project} from "./project";

describe("Project", () => {
  it("The experience constructor should be valid",() => {
    const tech:string[] = [".Net Core"];
    expect(new Project("project", "description", tech)).toBeTruthy();
  });

  it("The experience needs a name", () => {
    const tech:string[] = [".Net Core"];
    expect(() => {
      new Project(" ", "description", tech);
    }).toThrow(new Error("The name of the project cannot be empty"));
  });

  it("The experience needs a description", () => {
    const tech:string[] = [".Net Core"];
    expect(() => {
      new Project("name", "", tech);
    }).toThrow(new Error("The description of the project cannot be empty"));
  });

  it("The technology needs items", () => {
    const tech:string[] = [];
    expect(() => {
      new Project("name", "description", tech);
    }).toThrow(new Error("Please list technologies utilized in project"));
  });
});
