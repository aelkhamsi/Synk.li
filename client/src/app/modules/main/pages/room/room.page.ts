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
  urlForm: FormGroup;
  messageContainer: HTMLElement;
  videoIdRegex: RegExp = /v=.*/;

  private player: YT.Player;
  private syncReqDuration: number;

  videoId: string;
  playerState: number;
  isHost: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { 
  }

  ngOnInit() {
    this.roomId = this.route.snapshot.paramMap.get('roomId');

    this.username = localStorage.getItem('x-username');
    if (!this.username) this.username = 'Anonymous';

    this.connectSocket();

    this.chatForm = this.fb.group({
      message: ["", Validators.required],
    });

    this.urlForm = this.fb.group({
      url: ["", Validators.required]
    })

    this.messageContainer = document.getElementById('message-container');

    //VideoID
    let videoId = this.route.snapshot.paramMap.get('videoId');
    if (videoId) {
      this.videoId = videoId;
    } else {
      this.videoId = 'MGs2f1ncMgA';
    }
  }

  @HostListener('unloaded')  
  ngOnDestroy() {
    // this.socket.emit('disconnect', '');   doesn't work!!!
    this.socket.disconnect();
  }

  onStateChange(event) {
    this.playerState = event.data; 
    if (this.playerState == 1 || this.playerState == 2)
      this.socket.emit('player-state', this.playerState);
  }

  onReady(player) {
    this.player = player;
    console.log(this.player);
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
      this.openSnackBar("You've left the room", "");
      this.router.navigate(['dashboard']);
    })

    ////Managing Chat messages
    this.socket.on('message', (data) => {
      console.log(`server message (socket): ${data}`)
    });

    this.socket.on('chat-message', (data) => {
      this.displayMessage(`<span class="bold">${data.username}</span>: <span class="message">${data.message}</span>`, false);
    });

    ////Synchronizing player state (play/pause)
    this.socket.on('player-state', (state) => {
      if (state == 1) {
        this.player.playVideo()
        this.playerState = state;
      }
      else if (state == 2) {
        this.player.pauseVideo()
        this.playerState = state;
      }
    });

    ////Updating Host status
    this.socket.on('status-host', () => {
      this.isHost = true;
    })

    this.socket.on('status-nothost', () => {
      this.isHost = false;
    })

    ////Synchronizing player time
    this.socket.on('sync-host', (hostState) => { //Sync with host
      console.log(hostState);
      
      if (this.videoId != hostState.videoId) {
        this.router.navigate(['/room', {roomId: this.roomId, videoId: hostState.videoId}])
          .then(() => window.location.reload());
      }

      if (this.playerState == 1) {
        let d = new Date();
        this.syncReqDuration = d.getTime() - this.syncReqDuration;
        console.log(this.syncReqDuration / 1000);
        this.player.seekTo(hostState.playerTime + this.syncReqDuration / 1000 + 0.4, true);
      }
      else this.player.seekTo(hostState.playerTime, true);
    })

    this.socket.on('get-hoststate', () => { //Providing the time of the player (implies that you are the host)
      let hostState = {
        "playerTime": this.player.getCurrentTime(),
        "videoId": this.videoId
      };
      this.socket.emit('get-hoststate', hostState);
    })
  }

  onSyncHost() {
    let d = new Date();
    this.syncReqDuration = d.getTime();
    this.socket.emit('sync-host', '');

    // this.player.
  }

  onBecomeHost() {
    this.socket.emit('become-host', '');
  }

  onSendChatMessage() {
    if (this.chatForm.invalid) return;

    let data = {
      username: this.username,
      message: this.chatForm.value.message
    };

    this.socket.emit('chat-message', data);
    this.chatForm.reset();

    this.displayMessage(`<b>You</b>: ${data.message}`, true);
  }

  onChangeUrl(videoId: string) {
    if (this.urlForm.invalid) return;

    console.log(videoId);
    
    if (videoId != undefined) {
      this.videoId = videoId;
      this.router.navigate(['/room', {roomId: this.roomId, videoId: this.videoId}])
        .then(() => window.location.reload());
      return;
    }
    else {
      let url = this.urlForm.value.url;
      this.videoId = this.videoIdRegex.exec(url)[0].slice(2);
      console.log(this.videoId);
      

      this.router.navigate(['/room', {roomId: this.roomId, videoId: this.videoId}])
        .then(() => window.location.reload());
    }
  }

  displayMessage(message: string, self: boolean) {
    let messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    if (self)
      messageElement.className = 'message-element message-element-self';
    else 
      messageElement.className = 'message-element message-element-other';

    this.messageContainer.append(messageElement);
  }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
