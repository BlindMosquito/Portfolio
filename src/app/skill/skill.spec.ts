import {Skill} from "./skill";

describe("Skill", () => {
  it("The skill constructor should be valid", () => {
    const skill:string[] = [".Net Core", "WPF"];
    expect(new Skill("Microsoft Tech", skill)).toBeTruthy();
  });

  it("An error should be thrown when name is empty", () => {
    const skill:string[] = [".Net Core", "WPF"];
    expect(() => {
      new Skill(" ", skill);
    }).toThrow(new Error("The name of the skill group cannot be empty"));
  });

  it("An error should be thrown when skill array is empty", () => {
    const skill:string[] = [];
    expect(() => {
      new Skill("Test", skill);
    }).toThrow(new Error("Please list skills utilized in skill group"));
  });
});
