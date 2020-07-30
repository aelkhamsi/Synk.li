import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
// import { Socket } from 'dgram';
// import { ResponseDTO } from '../../models/response-dto';

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
    return this.http.post<any>(this.SERVER_URI + '/room/create-room', {}, this.httpOptions);
  }

  joinRoom(roomId: string): Observable<any> {
    const data = {
      roomId: roomId
    };
    console.log(data);
    
    return this.http.post<any>(this.SERVER_URI + '/room/join-room', data, this.httpOptions);
  }
}
