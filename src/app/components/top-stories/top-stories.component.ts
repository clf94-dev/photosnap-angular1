import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.component.html',
  styleUrls: ['./top-stories.component.scss']
})
export class TopStoriesComponent implements OnInit {
topStories="../../../assets/images/stories/desktop/moon-of-appalacia.jpg";
arrowW="../../../assets/images/shared/desktop/arrow copy.svg"
  constructor() { }

  ngOnInit(): void {
  }

}
