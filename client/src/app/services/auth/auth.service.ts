import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  //SERVER_URI: string = environment.SERVER_URI;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': ''
    })
  };

  constructor(
    private http: HttpClient,
    public jwtHelper: JwtHelperService) { }


  //POST:  login
  login(email: string, password: string): Observable<any> {
    const data = {
      email,
      password
    };
    // return this.http.post<any>(environment.SERVER_URI + '/auth/login', data, this.httpOptions);
    return this.http.post<any>('api/auth/login', data, this.httpOptions);
  }


  //POST:  login
  signup(username: string, email: string, password: string): Observable<any> {
    const data = {
      username,
      email,
      password
    };
    // return this.http.post<any>(environment.SERVER_URI + '/auth/signup', data, this.httpOptions);
    return this.http.post<any>('api/auth/signup', data, this.httpOptions);
  }


  //TOKEN
  authenticate(token: string, username: string): void {
    localStorage.setItem('x-access-token', token);
    localStorage.setItem('x-username', username);
  }

  logout(): void {
    localStorage.removeItem('x-access-token');
    localStorage.removeItem('x-username');
  }

  isAuthenticated(): boolean {
    const token = localStorage.getItem('x-access-token');
    return token != null;
    // return !this.jwtHelper.isTokenExpired(token);   //throws an exception sometimes (The inspected token doesn't appear to be a JWT)
  }

  getUsername(): string {
    return localStorage.getItem('x-username');
  }

}
