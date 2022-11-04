import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user";

@Injectable({providedIn: 'root'})
export class UserService {

  private userEmail: string = '';

  constructor(private http: HttpClient){}

  public setUserEmailFromApi(): void {
    console.log("set userEmail from API")
    this.getUserEmailFromApi().subscribe({
      next: (user: User) => this.setUserEmail(user.email)
    });

  }

  public getUserEmailFromApi(): Observable<User>{
    console.log("get userEmail from API")
    return this.http.get<User>(`/api/v1/users/email`);
  }
  public getUserEmail(): string{
    console.log("get userEmail:%s from UserService", this.userEmail);
    return this.userEmail;
  }

  public setUserEmail(userEmail: string): void {
    console.log("set userEmail:%s to UserService", userEmail);
    this.userEmail = userEmail;
  }

  public clearUserEmail(): void {
    console.log("clear userEmail:%s in UserService", this.userEmail);
    this.userEmail = '';
  }
}
