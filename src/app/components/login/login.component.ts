import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, UntypedFormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials: FormGroup;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router) { }

  get email(): string | any{
    return this.credentials.value['email'];
  }

  get password(): string | any {
    return this.credentials.value['password'];
  }

  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.credentials = this.formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required, Validators.minLength(9)]]
    })
  }

  async register() {
   // const loading = await this.loadingController.create();
    //await loading.present();

    const user = await this.auth.register(this.email, this.password);
    //await loading.dismiss();

    if (user) {
      //this.router.navigateByUrl('/home', { replaceUrl: true });
    } else {
      //this.showAlert('Registration failed', 'Please try again!');
    }
  }

  async login() {
    //const loading = await this.loadingController.create();
    //await loading.present();
    const user = await this.auth.login(this.email, this.password);
    //await loading.dismiss();
    if (user) {
      await this.router.navigateByUrl('/', { replaceUrl: true });
    } else {
      console.log("error")
      //this.showAlert('Login failed', 'Please try again!');
    }
  }

   logout(){
    this.auth.logout();
   }
}
