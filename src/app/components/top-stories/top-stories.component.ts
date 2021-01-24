import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {
topStoriesD="../../../assets/images/stories/desktop/moon-of-appalacia.jpg";
topStoriesT="../../../assets/images/stories/tablet/moon-of-appalacia.jpg";
topStoriesM="../../../assets/images/stories/mobile/moon-of-appalacia.jpg";
arrowW="../../../assets/images/shared/desktop/arrow copy.svg"
  constructor() { }

  ngOnInit(): void {
  }

}
