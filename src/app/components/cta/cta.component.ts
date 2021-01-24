import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {
  backgroundD="../../../assets/images/shared/desktop/bg-beta.jpg"
  backgroundT="../../../assets/images/shared/tablet/bg-beta.jpg"
  backgroundM="../../../assets/images/shared/mobile/bg-beta.jpg"
 arrowW="../../../assets/images/shared/desktop/arrow copy.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
