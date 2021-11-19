import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../model/user";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  constructor(
    private http: HttpClient
  ){}

  public hasAuthToken(): boolean {
    return localStorage.getItem("token") !== null;
  }

  private setAuthToken(token: string): void {
    localStorage.setItem("token", token);
  }

  public getAuthToken(): string {
    const tokenAtStorage = localStorage.getItem("token");
    return tokenAtStorage !== null ? tokenAtStorage : '';
  }

  public tryToAuthenticate(userCredentials: User) {
    console.log("Trying to Authenticate")
    this.sendUserCredentials(userCredentials).subscribe({
        next: (res) => {
          const token: string | null = res.headers.get('Authorization');
          if (token === null) {console.error("Token not exists");}
          else {this.setAuthToken(token);}
        },
        error: (e) => console.error("error when tryToAuthenticate", e)
      });
  }

  private sendUserCredentials(userCredentials: User): Observable<HttpResponse<any>> {
    return this.http.post(`/api/v1/authenticate`, userCredentials, {observe: 'response'});
  }

  public logout(): void {
    localStorage.removeItem("token");
    console.log("Token removed from localStorage")
  }
}
