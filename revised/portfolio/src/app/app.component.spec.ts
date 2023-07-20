import {ComponentFixture, TestBed} from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {NavComponent} from "./nav/nav.component";
import {AbtComponent} from "./abt/abt.component";
import {ExpComponent} from "./exp/exp.component";
import {PrjComponent} from "./prj/prj.component";
import {SkillComponent} from "./skill/skill.component";

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule( {
      declarations: [
        AppComponent,
        NavComponent,
        AbtComponent,
        ExpComponent,
        PrjComponent,
        SkillComponent
      ]
    })
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Should Create App Component', () => {
    expect(component).toBeTruthy();
  })

  // @ty
  it("Should get height of component", () => {
    // @ts-expect-error
    let height = component.getHeight('exp');
    expect(height).toBeGreaterThan(0);
  });
});
