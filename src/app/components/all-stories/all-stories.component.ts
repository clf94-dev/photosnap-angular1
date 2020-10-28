import { Component, OnInit } from '@angular/core';
import { StoriesData } from '../stories-home/storiesData';

@Component({
  selector: 'app-all-stories',
  templateUrl: './all-stories.component.html',
  styleUrls: ['./all-stories.component.scss']
})
export class AllStoriesComponent implements OnInit {

arrowW="../../../assets/images/shared/desktop/arrow copy.svg"
  public storiesdata: StoriesData[];
  constructor() { 
    this.storiesdata=[
      new StoriesData("April 16th 2020","The Mountains","by John Appleseed","../../../assets/images/stories/desktop/mountains.jpg","The Mountains"),
      new StoriesData("April 14th 2020","Sunset Cityscapes","by Benjamin Cruz","../../../assets/images/stories/desktop/cityscapes.jpg","Sunset Cityscapes"),
      new StoriesData("April 11th 2020","18 Days Voyage","by Alexei Borodin","../../../assets/images/stories/desktop/18-days-voyage.jpg","18 Days Voyage"),
      new StoriesData("April 9th 2020","Architecturals","by Samantha Brooke","../../../assets/images/stories/desktop/architecturals.jpg","Architecturals"),
      new StoriesData("April 7th 2020","World Tour 2019","by Timothy Wagner","../../../assets/images/stories/desktop/world-tour.jpg","World Tour 2019"),
      new StoriesData("April 3rd 2020","Unforeseen Corners","by William Malcolm","../../../assets/images/stories/desktop/unforeseen-corners.jpg","Unforeseen Corners"),
      new StoriesData("March 29th 2020","King on Africa: Part II"," by Tim Hillenburg","../../../assets/images/stories/desktop/king-on-africa.jpg","King on Africa: Part II"),
      new StoriesData("March 21st 2020","The Trip to Nowhere","by Felicia Rourke","../../../assets/images/stories/desktop/trip-to-nowhere.jpg","The Trip to Nowhere"),
      new StoriesData("March 19th 2020","Rage of The Sea","by Mohammed Abdul","../../../assets/images/stories/desktop/rage-of-the-sea.jpg","Rage of The Sea"),
      new StoriesData("March 16th 2020","Running Free","by Michelle","../../../assets/images/stories/desktop/running-free.jpg","Running Free"),
      new StoriesData("March 11th 2020","Behind the Waves","by Lamarr Wilson","../../../assets/images/stories/desktop/behind-the-waves.jpg","Behind the Waves"),
      new StoriesData(" March 9th 2020","Calm Waters","by Felicia Rourke","../../../assets/images/stories/desktop/calm-waters.jpg","Calm Waters"),
      new StoriesData("March 5th 2020","The Milky Way","by Benjamin Cruz","../../../assets/images/stories/desktop/milky-way.jpg","The Milky Way"),
      new StoriesData("March 4th 2020","Night at The Dark Forest","by Mohammed Abdul","../../../assets/images/stories/desktop/dark-forest.jpg","Night at The Dark Forest"),
      new StoriesData("March 1st 2020","Somwarpet’s Beauty","by Michelle","../../../assets/images/stories/desktop/somwarpet.jpg","Somwarpet’s Beauty"),
      new StoriesData("February 25th 2020","Land of Dreams","by William Malcolm","../../../assets/images/stories/desktop/land-of-dreams.jpg","Land of Dreams")
    ];
  }

  ngOnInit(): void {
  }

}
