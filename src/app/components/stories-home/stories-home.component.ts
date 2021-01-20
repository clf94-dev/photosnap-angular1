import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StoriesData } from './storiesData';

@Component({
  selector: 'app-stories-home',
  templateUrl: './stories-home.component.html',
  styleUrls: ['./stories-home.component.scss']
})
export class StoriesHomeComponent implements OnInit {
arrowW="../../../assets/images/shared/desktop/arrow copy.svg"

public storiesdata: StoriesData[];
  constructor(private _route: ActivatedRoute, private _router: Router) { 
    this.storiesdata=[
      new StoriesData("","The Mountains","by John Appleseed","../../../assets/images/stories/desktop/mountains.jpg","../../../assets/images/stories/tablet/mountains.jpg","../../../assets/images/stories/mobile/mountains.jpg","The Mountains"),
      new StoriesData("","Sunset Cityscapes","by Benjamin Cruz","../../../assets/images/stories/desktop/cityscapes.jpg","../../../assets/images/stories/tablet/cityscapes.jpg","../../../assets/images/stories/mobile/cityscapes.jpg","Sunset Cityscapes"),
      new StoriesData("","18 Days Voyage","by Alexei Borodin","../../../assets/images/stories/desktop/18-days-voyage.jpg","../../../assets/images/stories/tablet/18-days-voyage.jpg","../../../assets/images/stories/mobile/18-days-voyage.jpg","18 Days Voyage"),
      new StoriesData("","Architecturals","by Samantha Brooke","../../../assets/images/stories/desktop/architecturals.jpg","../../../assets/images/stories/tablet/architecturals.jpg","../../../assets/images/stories/mobile/architecturals.jpg","Architecturals")
    ];
  }

  ngOnInit(): void {
  }
  goToStories(){
    this._router.navigate(['/stories']);
  }


}
