import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class UserService {

  private STORAGE_USER_EMAIL_ID: string = 'user_email';

  public getUserEmail(): string{
    console.log("get userEmail from localStorage");
    const userEmailAtStorage = localStorage.getItem(this.STORAGE_USER_EMAIL_ID
    );
    return userEmailAtStorage === null ? '' : userEmailAtStorage;
  }

  public setUserEmail(userEmail: string): void {
    console.log("set userEmail to localStorage");
    localStorage.setItem(this.STORAGE_USER_EMAIL_ID, userEmail);
  }

  public removeUserEmail(): void {
    console.log("remove userEmail from localStorage");
    localStorage.removeItem(this.STORAGE_USER_EMAIL_ID);
  }

}
