import { Component, OnInit } from '@angular/core';
import { StoriesData } from '../stories-home/storiesData';

@Component({
  selector: 'app-all-stories',
  templateUrl: './all-stories.component.html',
  styleUrls: ['./all-stories.component.scss']
})
export class AllStoriesComponent implements OnInit {
  public storiesdata: StoriesData[];
  constructor() { }

  ngOnInit(): void {
  }

}
