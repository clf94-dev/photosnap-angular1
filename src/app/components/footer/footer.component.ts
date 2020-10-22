import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
logo="../../../assets/images/shared/desktop/logo copy.svg"

arrowW="../../../assets/images/shared/desktop/arrow copy.svg";
  constructor() { }

  ngOnInit(): void {
  }

}
