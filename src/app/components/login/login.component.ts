import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";
import { NgxSpinnerService } from 'ngx-spinner/public_api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private spinner: NgxSpinnerService) { }

  get email(): string | any{
    return this.credentials.value['email'];
  }

  get password(): string | any {
    return this.credentials.value['password'];
  }

  ngOnInit(): void {
    this.createLoginForm();
    this.spinner.show();
  }

  createLoginForm(){
    this.credentials = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(9)]]
    })
  }

  login() {
    this.auth.login(this.credentials.value).subscribe({
      next: (value) => {
        localStorage.setItem("token", value.accessToken);
        localStorage.setItem("exp", value.expiration.toString());
        this.auth.isAuthenticated()
        this.router.navigateByUrl("/")
      },
      error: (err) => console.log(err)
    });
  }
}
