import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { RoomService } from 'src/app/services/room/room.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {

  username: string;
  // createRoomForm: FormGroup;
  joinRoomForm: FormGroup;
  formSubmitted: Boolean = false;
  hexRegex: string = "[0-9a-f]{24}";

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private roomService: RoomService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.joinRoomForm = this.fb.group({
      roomId: ["", [Validators.required, Validators.pattern(this.hexRegex)]]
    })
    this.username = this.authService.getUsername();
    console.log(this.username);
    
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['home']);
  } 


  onCreate(): void {
    this.roomService.createRoom()
      .subscribe((res) => {
        this.router.navigate(['/room', res]); 
      }, (error) => {
        if (error.status == 500)
          this.openSnackBar("Internal Server error. Please try later", "Error");
        else
          this.openSnackBar(error.error.errorMessage, "Error");
      });
  }

  onJoin(): void {
    this.formSubmitted = true;
    if (this.joinRoomForm.invalid) return;

    const data = this.joinRoomForm.value;
    
    this.roomService.joinRoom(data.roomId)
      .subscribe((res) => {
        this.router.navigate(['/room', res]); 
      }, (error) => {
        if (error.status == 500)
          this.openSnackBar("Internal Server error. Please try later", "Error");
        else
          this.openSnackBar(error.error.errorMessage, "Error");
      });
  }


  // convenience getter for easy access to form fields
  get f() { return this.joinRoomForm.controls; }


  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
