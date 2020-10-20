import { Component, OnInit } from '@angular/core';
import { StoriesData } from './storiesData';

@Component({
  selector: 'app-stories-home',
  templateUrl: './stories-home.component.html',
  styleUrls: ['./stories-home.component.scss']
})
export class StoriesHomeComponent implements OnInit {
arrow="../../../assets/images/shared/desktop/arrow.svg"

public storiesdata: StoriesData[];
  constructor() { 
    this.storiesdata=[
      new StoriesData("","The Mountains","by John Appleseed","../../../assets/images/stories/desktop/mountains.jpg","The Mountains"),
      new StoriesData("","Sunset Cityscapes","by Benjamin Cruz","../../../assets/images/stories/desktop/cityscapes.jpg","Sunset Cityscapes"),
      new StoriesData("","18 Days Voyage","by Alexei Borodin","../../../assets/images/stories/desktop/18-days-voyage.jpg","18 Days Voyage"),
      new StoriesData("","Architecturals","by Samantha Brooke","../../../assets/images/stories/desktop/architecturals.jpg","Architecturals")
    ];
  }

  ngOnInit(): void {
  }

}
