import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserService {

  private STORAGE_USER_EMAIL_ID: string = 'user_email';
  private userEmail: string = '';


  public getUserEmail(): string{
    console.log("get userEmail:%s from UserService", this.userEmail);
    return this.userEmail;
  }

  public setUserEmail(userEmail: string): void {
    console.log("set userEmail:%s to UserService", userEmail);
    this.userEmail = userEmail;
  }

  public removeUserEmail(): void {
    console.log("remove userEmail from localStorage");
    localStorage.removeItem(this.STORAGE_USER_EMAIL_ID);
  }

  public clearUserEmail(): void {
    console.log("clear userEmail:%s in UserService", this.userEmail);
    this.userEmail = '';
  }
}
