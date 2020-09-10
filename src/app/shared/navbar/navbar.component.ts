import { Component, Input, Output,OnChanges, EventEmitter, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { SigninComponent } from '../../signin/signin.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  userInfo: any;
  userInfoToken: boolean = false;

  constructor(public userService: UserService,public router: Router,private modalService: NgbModal) { }

  ngOnInit() {
    this.checkRouteGaurd();
  }

  ngOnChanges() {
    this.checkRouteGaurd();
  }

  public checkRouteGaurd: any = () => {
    console.log("authToken", Cookie.get('authToken'))

    if (Cookie.get('authToken') === undefined || Cookie.get('authToken') === '' || Cookie.get('authToken') === null || Cookie.get('authToken') === 'false') {
      this.userInfoToken = false;
    } else {
      this.userInfo = this.userService.getUserInfoFromLocalstorage();
      console.log("user info stored local storage is:", this.userInfo);
      this.userInfoToken = true;
    }

  }

  public goToLogin(): any {
    this.router.navigate(['/signin']);
  }

  // openLogin(login) {
  //   const modalRef = this.modalService.open(SigninComponent);
  //   modalRef.componentInstance.login = login;
  // }

  public logout: any = () => {
    Cookie.deleteAll();
    this.userInfoToken = false;
    this.router.navigate(['/']);

  } // end logout

  //open AboutUs
  public goToAboutUs(): any {
    this.router.navigate(['/aboutus']);
  }

}
