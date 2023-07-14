import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpComponent } from './exp.component';
import * as stream from "stream";

describe('ExpComponent', () => {
  let component: ExpComponent;
  let fixture: ComponentFixture<ExpComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExpComponent]
    });
    fixture = TestBed.createComponent(ExpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Should find experience json", () => {
    let exp = component.Experiences();
    expect(exp.length).toBeGreaterThan(0);
    expect(exp[0].Business()).toMatch("^(?!\s*$).+");
  });
});
