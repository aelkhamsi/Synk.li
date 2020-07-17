import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss']
})
export class DashboardPage implements OnInit {

  username: string;
  createRoomForm: FormGroup;
  joinRoomForm: FormGroup;
  formSubmitted: Boolean = false;
  numericalRegex: string = "[0-9]*";

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.joinRoomForm = this.fb.group({
      roomId: ["", [Validators.required, Validators.pattern(this.numericalRegex)]]
    })
    this.username = this.authService.getUsername();
    console.log(this.username);
    
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['home']);
  } 


  onCreate(): void {
    this.router.navigate(['room']);
  }

  onJoin(): void {
    this.formSubmitted = true;
    if (this.joinRoomForm.invalid) return;
    this.router.navigate(['room']);
  }

  // convenience getter for easy access to form fields
  get f() { return this.joinRoomForm.controls; }

}
