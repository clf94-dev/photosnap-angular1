import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-pricing',
  templateUrl: './top-pricing.component.html',
  styleUrls: ['./top-pricing.component.scss']
})
export class TopPricingComponent implements OnInit {
  topPriceD="../../../assets/images/pricing/desktop/hero.jpg"
  topPriceT="../../../assets/images/pricing/tablet/hero.jpg"
  topPriceM="../../../assets/images/pricing/mobile/hero.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
