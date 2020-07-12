import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-box',
  templateUrl: './login-box.component.html',
  styleUrls: ['./login-box.component.scss']
})
export class LoginBoxComponent implements OnInit {

  loginForm: FormGroup;
  fieldTextType: Boolean = false;
  formSubmitted: Boolean = false;

  constructor(private fb: FormBuilder) { }

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

  onSubmit() {
    this.formSubmitted = true;
    if (this.loginForm.invalid) return;
    console.log(this.loginForm.value);
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

}
