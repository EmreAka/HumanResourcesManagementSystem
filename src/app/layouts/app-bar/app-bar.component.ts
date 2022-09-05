import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  constructor(public authService: AuthService) {
  }

  ngOnInit(): void {
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("exp");
    this.authService.isAuthenticated();
  }

  isAuthenticated(){
  }

  getUserDetail(){
  }
}


