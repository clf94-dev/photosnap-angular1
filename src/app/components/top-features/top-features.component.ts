import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-features',
  templateUrl: './top-features.component.html',
  styleUrls: ['./top-features.component.scss']
})
export class TopFeaturesComponent implements OnInit {
topFeatD="../../../assets/images/features/desktop/hero.jpg"
topFeatT="../../../assets/images/features/tablet/hero.jpg"
topFeatM="../../../assets/images/features/mobile/hero.jpg"
  constructor() { }

  ngOnInit(): void {
  }

}
