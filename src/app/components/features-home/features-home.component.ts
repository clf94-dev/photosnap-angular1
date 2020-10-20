import { Component, OnInit } from '@angular/core';
import { FeaturesData } from './featuresData';

@Component({
  selector: 'app-features-home',
  templateUrl: './features-home.component.html',
  styleUrls: ['./features-home.component.scss']
})
export class FeaturesHomeComponent implements OnInit {
  public featuresdata: FeaturesData[];
  constructor() { 
    this.featuresdata=[
      new FeaturesData("100% Responsive","No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.","../../../assets/images/features/desktop/responsive.svg","100% Responsive"),
      new FeaturesData("No Photo Upload Limit","Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.","../../../assets/images/features/desktop/no-limit.svg","No Photo Upload Limit"),
      new FeaturesData("Available to Embed","Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.","../../../assets/images/features/desktop/embed.svg","Available to Embed")
    ]
  }

  ngOnInit(): void {
  }

}
