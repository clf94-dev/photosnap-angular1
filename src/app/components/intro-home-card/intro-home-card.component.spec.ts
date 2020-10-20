import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroHomeCardComponent } from './intro-home-card.component';

describe('IntroHomeCardComponent', () => {
  let component: IntroHomeCardComponent;
  let fixture: ComponentFixture<IntroHomeCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntroHomeCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntroHomeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
