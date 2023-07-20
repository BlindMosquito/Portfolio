import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbtComponent } from './abt.component';

describe('AbtComponent', () => {
  let component: AbtComponent;
  let fixture: ComponentFixture<AbtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AbtComponent]
    });
    fixture = TestBed.createComponent(AbtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
