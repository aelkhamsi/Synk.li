import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
// import { Socket } from 'dgram';
import { ResponseDTO } from '../models/response-dto';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  SERVER_URI: string = environment.SERVER_URI;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'x-access-token': ''
    })
  };

  constructor(private http: HttpClient) { }

  createRoom(): Observable<any> {
    return this.http.post<any>(this.SERVER_URI + '/create-room', {}, this.httpOptions);
  }

  joinRoom(roomID: string): Observable<any> {
    const data = {
      roomID: roomID
    };
    return this.http.post<any>(this.SERVER_URI + '/join-room', data, this.httpOptions);
  }
}
