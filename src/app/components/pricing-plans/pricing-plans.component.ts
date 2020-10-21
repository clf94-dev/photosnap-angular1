import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pricing-plans',
  templateUrl: './pricing-plans.component.html',
  styleUrls: ['./pricing-plans.component.scss']
})
export class PricingPlansComponent implements OnInit {
public year: boolean;
  constructor() { 
    this.year=false;
  }

  ngOnInit(): void {
  }

  changePrice(){
this.year=!this.year;
  }

}
