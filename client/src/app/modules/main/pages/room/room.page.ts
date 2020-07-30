import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-room',
  templateUrl: './room.page.html',
  styleUrls: ['./room.page.scss']
})
export class RoomPage implements OnInit {

  roomId: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.roomId = this.route.snapshot.paramMap.get('roomId');
  }

}
