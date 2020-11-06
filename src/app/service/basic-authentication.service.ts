import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {


  constructor(
    private http: HttpClient,
    ) { }

  authenticate(username, password) {
    if(username==='padua' && password === 'ok'){
      sessionStorage.setItem('authenticatedUser', username);
      return true;
    }
    else {
      return false;
    }

  }
  executeAuthenticationService(username, password) {
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    
    let headers = new HttpHeaders({
      Authorization: basicAuthHeaderString
    })
    
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basic-auth`,
    {headers}).pipe(
      map(
        data => {
            sessionStorage.setItem('authenticaterUser', username);
            return data;
        }

      )
    )
  }

  isUserLoggedIn() {
    let username = sessionStorage.getItem('authenticatedUser');
    return !(username === null);
  }

  logout() {
    sessionStorage.removeItem('authenticatedUser');
  }
}

export class AuthenticationBean{
  constructor(public message:String){}

}
