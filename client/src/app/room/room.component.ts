import { Component, OnInit, OnDestroy } from '@angular/core';
import { CST } from '../cst';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';
import { ActivatedRoute, Router } from '@angular/router';
//import { Socket } from 'net';
import { RoomService } from '../services/room/room.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit, OnDestroy {
  socket; //Socket type
  roomID: string;
  username: string;

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
    private router: Router,
    private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getRoomID();

    this.roomService.joinRoom(this.roomID)
      .subscribe((res) => {
        // if the room exists...
        this.getUsername();
        this.connectSocket();

      }, (error) => {
        // else
        if (error.status == 500)
          this.openSnackBar("This room doesn't exist. Please try with another room ID", "Error");
        else
          this.openSnackBar(error.error.errorMessage, "Error");
        this.router.navigate(['home']);
      })
    
    window.onbeforeunload = () => this.ngOnDestroy();
    
  }

  ngOnDestroy() {
    // removing the user
    localStorage.removeItem(CST.LS_USERNAME_LABEL);

    // close the socket & remove it from the room
    this.socket.emit('disconnect', '');
  }

  connectSocket() {
    this.socket = io(environment.SOCKET_URI, {query: `roomID=${this.roomID}`});
    this.socket.on('connect', () => {
      console.log("Socket connection with server established");
    })
    this.socket.on('disconnect', (reason) => {
      console.log(reason);
      this.openSnackBar("Socket connection failed. Please try again later", "Error");
      this.router.navigate(['home']);
    })
    this.socket.on('message', (data) => {
      console.log(`server message (socket): ${data}`)
    });
  }

  getUsername() {
    var username = localStorage.getItem(CST.LS_USERNAME_LABEL);
    if (!username) {
      username = prompt("Please Choose a Username: ");
      localStorage.setItem(CST.LS_USERNAME_LABEL, username); 
    }
    this.username = username;
  }

  getRoomID() {
    this.roomID = this.route.snapshot.paramMap.get('id');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
