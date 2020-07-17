import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from '../../../../services/auth/auth.service';


@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {

  loginForm: FormGroup;
  fieldTextType: Boolean = false;
  formSubmitted: Boolean = false;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService,
    private router: Router,
    private _snackBar: MatSnackBar,
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(6)]],
      keepConnection: false
    })
  }
  

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (this.loginForm.invalid) return;
    
    const data = this.loginForm.value;
    this.authService.login(data.email, data.password)
        .subscribe( res => {
          this.authService.authenticate(res.token, res.username);
          this.router.navigate(['dashboard']);
        }, (error) => {
          if (error.status == 500)
            this.openSnackBar("Internal Server error. Please try later", "Error");
          else
            this.openSnackBar(error.error.errorMessage, "Error");
        })
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
  }

}
