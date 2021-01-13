import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../_helpers/must-match.validator';
import { AuthService } from '../../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup-box',
  templateUrl: './signup-box.component.html',
  styleUrls: ['./signup-box.component.scss']
})
export class SignupBoxComponent implements OnInit {

  signupForm: FormGroup;
  fieldTextType: Boolean = false;
  formSubmitted: Boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      username: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      confirmPassword: ["", Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    })
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  onSubmit() {
    this.formSubmitted = true;
    if (this.signupForm.invalid) {
      this.openSnackBar("Missing Fields", "");
      return;
    }
    
    const data = this.signupForm.value;
    this.authService.signup(data.username, data.email, data.password)
      .subscribe( res => {
        this.openSnackBar("User added", "");
        this.router.navigate(['login']);
      }, (error) => {
        if (error.status == 500)
          this.openSnackBar("Internal Server error. Please try later", "Error");
        else {
          console.log(error);
          this.openSnackBar(error.error.errorMessage, "Error");
        }
          
      })
  }

  // convenience getter for easy access to form fields
  get f() { return this.signupForm.controls; }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
