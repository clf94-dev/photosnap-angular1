import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-pricing',
  templateUrl: './top-pricing.component.html',
  styleUrls: ['./top-pricing.component.scss']
})
export class TopPricingComponent implements OnInit {
  topPrice="../../../assets/images/pricing/desktop/hero.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
