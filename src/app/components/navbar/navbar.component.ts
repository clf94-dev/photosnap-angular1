import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
logo='../../../assets/images/shared/desktop/logo.svg';
click = false
constructor(private _route: ActivatedRoute, private _router: Router) { }

  ngOnInit(): void {
  }
  handleClick(){
    this.click = !this.click;
      }
      closeMobile(){
        this.click=false;
      }
  goToHome(){
    this._router.navigate(['/home']);
  }

}
