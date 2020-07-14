import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  SERVER_URI: string = environment.SERVER_URI;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': ''
    })
  };

  constructor(private http: HttpClient) { }


  //GET:  login
  login(email: string, password: string): Observable<any> {
    const data = {
      email,
      password
    };
    return this.http.post<any>(environment.SERVER_URI + '/auth/login', data, this.httpOptions);
  }


  //POST:  login
  signup(username: string, email: string, password: string): Observable<any> {
    const data = {
      username,
      email,
      password
    };
    return this.http.post<any>(environment.SERVER_URI + '/auth/signup', data, this.httpOptions);
  }
}
