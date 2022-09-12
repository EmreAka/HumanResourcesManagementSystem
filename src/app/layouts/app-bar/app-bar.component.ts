import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { DecodedToken } from 'src/app/models/decodedToken';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {


  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
    this.authService.isAuthenticated();
    this.router.navigateByUrl("auth/login")
  }

  isAuthenticated(){
  }

  getUserEmail(): string {
    return this.authService.decodedToken.Email;
  }
}


