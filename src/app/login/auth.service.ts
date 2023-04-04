import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public username: String;
  public password: String;

  constructor(private http: HttpClient) {

  }

  authenticationService(username: String, password: String) {
    let auth = this.createBasicAuthToken(username, password);
    return this.http.get('http://localhost:8080/login', { headers: { Authorization: 'Basic ' + auth } })
      .pipe(map((res) => {
        this.username = username;
        this.password = password;
        this.registerSuccessfulLogin(auth);
      }));
  }

  createBasicAuthToken(username: String, password: String) {
    return window.btoa(username + ":" + password)
  }

  registerSuccessfulLogin(token : string) {    
    sessionStorage.setItem("authenticatedUser", token)
  }

  logout() {
    sessionStorage.removeItem("authenticatedUser");
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticatedUser")
    if (user === null) return false
    return true
  }
}
