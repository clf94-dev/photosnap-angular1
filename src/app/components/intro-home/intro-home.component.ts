import { Component, OnInit } from '@angular/core';
import { IntroHomeData } from './introHomeData';

@Component({
  selector: 'app-intro-home',
  templateUrl: './intro-home.component.html',
  styleUrls: ['./intro-home.component.scss']
})
export class IntroHomeComponent implements OnInit {
public introdata: IntroHomeData[];

  constructor() { 

    this.introdata=[
      new IntroHomeData("Create and share your photo Stories","Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.","Get an Invite","intro-row reversed dark","",0,"../../../assets/images/home/desktop/create-and-share.jpg","",""),
      new IntroHomeData("Beautiful stories every time","We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.","View the stories","intro-row","",1,"../../../assets/images/home/desktop/beautiful-stories.jpg","","/stories"),
      new IntroHomeData("Designed for everyone","Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. ","View the stories","intro-row reversed","",1,"../../../assets/images/home/desktop/designed-for-everyone.jpg","","/stories")
    ]
  }

  ngOnInit(): void {
  }

}
