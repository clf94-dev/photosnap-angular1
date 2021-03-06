import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

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
@Input() arrow: number;
@Input() link: boolean;
@Input() src: string;
@Input() index: number;
@Input() imgAlt: string;


Arrow="../../../assets/images/shared/desktop/arrow.svg";
ArrowW="../../../assets/images/shared/desktop/arrow copy.svg";

  constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }
  goToStories(){
    this._router.navigate(['/stories']);
  }

}
