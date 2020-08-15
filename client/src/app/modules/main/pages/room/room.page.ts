import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import * as io from 'socket.io-client';
import { MatSnackBar } from '@angular/material';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss']
})
export class RoomPage implements OnInit, OnDestroy {
  roomId: string;
  username: string;
  socket: any;
  chatForm: FormGroup;
  messageContainer: HTMLElement;

  // public YT: any;

  private player: any;
  videoId: string;
  playerState: number;

  // public reframed: Boolean = false;


  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.paramMap.get('roomId');

    this.username = localStorage.getItem('x-username');
    if (!this.username) this.username = 'Anonymous';

    this.connectSocket();

    this.chatForm = this.fb.group({
      message: ["", Validators.required],
    });

    this.messageContainer = document.getElementById('message-container');

    this.videoId = 'MGs2f1ncMgA';
  }

  @HostListener('unloaded')  
  ngOnDestroy() {
    this.socket.emit('disconnect', '');
  }

  onStateChange(event) {
    this.playerState = event.data; 
    if (this.playerState == 1 || this.playerState == 2)
      this.socket.emit('player-state', this.playerState);
  }

  onReady(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }


  connectSocket() {
    this.socket = io(environment.SOCKET_URI, {query: `roomId=${this.roomId}&username=${this.username}`});

    this.socket.on('connect', () => {
      console.log("Socket connection with server established");
    })

    this.socket.on('disconnect', (reason) => {
      console.log(reason);
      this.openSnackBar("Socket connection failed. Please try again later", "Error");
      this.router.navigate(['dashboard']);
    })

    this.socket.on('message', (data) => {
      console.log(`server message (socket): ${data}`)
    });

    this.socket.on('chat-message', (data) => {
      this.displayMessage(`<span class="bold">${data.username}</span>: <span class="message">${data.message}</span>`, false);
    })

    this.socket.on('player-state', (state) => {
      if (state == 1) {
        this.player.playVideo()
        this.playerState = state;
      }
      else if (state == 2) {
        this.player.pauseVideo()
        this.playerState = state;
      }
    })
  }


  onSubmit() {
    if (this.chatForm.invalid) return;

    let data = {
      username: this.username,
      message: this.chatForm.value.message
    };

    this.socket.emit('chat-message', data);
    this.chatForm.reset();

    this.displayMessage(`<b>You</b>: ${data.message}`, true);
  }


  displayMessage(message: string, self: boolean) {
    let messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    if (self)
      messageElement.className = 'message-element message-element-self';
    else 
      messageElement.className = 'message-element message-element-other';

    // messageElement = this.redraw(messageElement);
    this.messageContainer.append(messageElement);
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
