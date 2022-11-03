import {Component} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor(private authService: AuthenticationService, public userService: UserService) { }

  isUserAuthenticate(): boolean {
    return this.authService.hasAuthToken();
  }

  public getUserEmail(): string {
    return this.userService.getUserEmail();
  }

  onLogout() {
    this.userService.removeUserEmail();
    this.authService.logout();
  }

}
