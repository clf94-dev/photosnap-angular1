import { Component, OnInit } from '@angular/core';
import { FeaturesData } from '../features-home/featuresData';

@Component({
  selector: 'app-all-features',
  templateUrl: './all-features.component.html',
  styleUrls: ['./all-features.component.scss']
})
export class AllFeaturesComponent implements OnInit {
  public featuresdata: FeaturesData[];
  constructor() {
    this.featuresdata=[
      new FeaturesData("100% Responsive","No matter which the device you’re on, our site is fully responsive and stories look beautiful on any screen.","../../../assets/images/features/desktop/responsive.svg","100% Responsive"),
      new FeaturesData("No Photo Upload Limit","Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share all of your stories in one go.","../../../assets/images/features/desktop/no-limit.svg","No Photo Upload Limit"),
      new FeaturesData("Available to Embed","Embed Tweets, Facebook posts, Instagram media, Vimeo or YouTube videos, Google Maps, and more.","../../../assets/images/features/desktop/embed.svg","Available to Embed"),
      new FeaturesData("Custom Domain","With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!","../../../assets/images/features/desktop/custom-domain.svg","Custom Domain"),
      new FeaturesData("Boost Your Exposure","Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.","../../../assets/images/features/desktop/boost-exposure.svg","Boost Your Exposure"),
      new FeaturesData("Drag & Drop Image","Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.","../../../assets/images/features/desktop/drag-drop.svg","Drag & Drop Image")
    ]
   }

  ngOnInit(): void {
  }

}
