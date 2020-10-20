import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro-home-card',
  templateUrl: './intro-home-card.component.html',
  styleUrls: ['./intro-home-card.component.scss']
})
export class IntroHomeCardComponent implements OnInit {
@Input() title: string;
@Input() text: string;
@Input() classes: string;
@Input() btn: string;
@Input() btnStyle: string;
@Input() arrow: string;
@Input() link: string;
@Input() src: string;
@Input() imgAlt: string;
  constructor() { }

  ngOnInit(): void {
  }

}
