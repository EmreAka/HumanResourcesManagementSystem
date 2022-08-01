import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  constructor(private authService: AuthService) {
  }

  ngOnInit(): void {
    this.authService.getUserInformationFromLocalStorage();
  }

  logout() {
    this.authService.logout();
  }

  isAuthenticated(){
    debugger;
    if (this.authService.isAuthenticated()){
      return true;
    }
    return false;
  }
}


