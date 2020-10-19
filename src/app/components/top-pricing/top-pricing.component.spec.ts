import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopPricingComponent } from './top-pricing.component';

describe('TopPricingComponent', () => {
  let component: TopPricingComponent;
  let fixture: ComponentFixture<TopPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopPricingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
