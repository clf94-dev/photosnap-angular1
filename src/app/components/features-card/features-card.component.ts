import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-features-card',
  templateUrl: './features-card.component.html',
  styleUrls: ['./features-card.component.scss']
})
export class FeaturesCardComponent implements OnInit {
@Input() title: string;
@Input() text: string;
@Input() src: string;
@Input() imgAlt: string;

  constructor() { 
   
  }

  ngOnInit(): void {
  }

}
