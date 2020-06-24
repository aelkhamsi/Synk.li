import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { CST } from '../cst';
import * as io from 'socket.io-client';
// import { Socket } from 'dgram';
import { environment } from 'src/environments/environment';
// import { RoomService } from '../services/room.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})
export class HomePage implements OnInit {

  createForm: FormGroup;
  joinForm: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    // private roomService: RoomService,
    private _snackBar: MatSnackBar ) {}

  ngOnInit() {
    //Toggle Menu
    var menu = document.getElementById('menu');
    var nav = document.getElementById('nav');
    var exit = document.getElementById('exit');
    menu.addEventListener('click', function(e) {
      nav.classList.toggle('hide-mobile');
      // e.preventDefault();
    });
    exit.addEventListener('click', function(e) {
      nav.classList.toggle('hide-mobile');
      // e.preventDefault();
    });

    //Form
    this.createForm = this.fb.group({
      usernameCreate: ['', Validators.required],
    });
    this.joinForm = this.fb.group({
      roomId: ['', Validators.required],
      usernameJoin: ['', Validators.required],
    });
  }


  // onCreate() {
  //   // store username in LS
  //   const username: string = this.createForm.value.usernameCreate;
  //   if (username)
  //     localStorage.setItem(CST.LS_USERNAME_LABEL, username);   

  //   // create a room
  //   this.roomService.createRoom()
  //     .subscribe((res) => {
  //       const roomID = res.roomID;
  //       this.router.navigate(['room', roomID]); // ------------> /room
  //     }, (error) => {
  //       this.openSnackBar(error.error.errorMessage, "Error");
  //       this.createForm.reset();
  //     });  
      
  // }

  // onJoin() {
  //   const username: string = this.joinForm.value.usernameJoin;
  //   const roomID: string = this.joinForm.value.roomId;

  //   // Verify if the room exists
  //   this.roomService.joinRoom(roomID)
  //     .subscribe((res) => {
  //       // store the username in LS
  //       if (username)
  //         localStorage.setItem(CST.LS_USERNAME_LABEL, username);   
  //       this.router.navigate(['room', roomID]); // ------------> /room
  //     }, (error) => {
  //       if (error.status == 500)
  //         this.openSnackBar("This room doesn't exist. Please try with another room ID", "Error");
  //       else
  //         this.openSnackBar(error.error.errorMessage, "Error");
  //       this.joinForm.reset();
  //     })
  // }

  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message, action, {
  //     duration: 5000,
  //   });
  // }

}
