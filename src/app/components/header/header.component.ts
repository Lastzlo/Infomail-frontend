import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthenticationService, public userService: UserService) { }

  ngOnInit(): void {
    if(this.isUserAuthenticate()) {
      this.userService.setUserEmailFromApi();
    }
  }

  isUserAuthenticate(): boolean {
    return this.authService.hasAuthToken();
  }

  public getUserEmail(): string {
    return this.userService.getUserEmail();
  }

  onLogout() {
    this.userService.clearUserEmail();
    this.authService.logout();
  }

}
