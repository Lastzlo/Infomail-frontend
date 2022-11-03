import {Injectable} from "@angular/core";
import {HttpClient, HttpResponse} from "@angular/common/http";
import {User} from "../models/user";
import {Observable, of, tap} from "rxjs";
import {Router} from "@angular/router";

@Injectable({providedIn: 'root'})
export class AuthenticationService {

  private STORAGE_AUTH_TOKEN_ID: string = 'authentication_token';

  constructor(private http: HttpClient, private router: Router) {
  }

  public hasAuthToken(): boolean {
    console.log("hasAuthToken")
    const tokenAtStorage = localStorage.getItem(this.STORAGE_AUTH_TOKEN_ID);
    return tokenAtStorage !== null && tokenAtStorage !== '';
  }

  public setAuthToken(token: string): void {
    localStorage.setItem(this.STORAGE_AUTH_TOKEN_ID, token);
  }

  public getAuthToken(): string {
    console.log("getAuthToken")
    const tokenAtStorage = localStorage.getItem(this.STORAGE_AUTH_TOKEN_ID);
    return tokenAtStorage !== null ? tokenAtStorage : '';
  }

  public tryToAuthenticate(userCredentials: User): Observable<HttpResponse<any>> {
    return this.http.post(`/api/v1/authenticate`, userCredentials, {observe: 'response'});
  }

  public isAuthenticated(): Observable<boolean> {
    console.log("isAuthenticated")
    return of(this.hasAuthToken());
  }


  public logout(): void {
    console.log("Remove token from localStorage");
    localStorage.removeItem(this.STORAGE_AUTH_TOKEN_ID);
  }
}
