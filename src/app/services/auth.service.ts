import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials } from '../models/loginCredentials';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token';
import { DecodedToken } from '../models/decodedToken';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  decodedToken: DecodedToken = { Token: "", DecodedToken: "", Expiration: 0, Email: "", Name: "", Role: "", Roles: [], UserId: "" };

  constructor(private httpClient: HttpClient, private jwtHelperService: JwtHelperService) {
  }

  login(loginCredentials: LoginCredentials): Observable<Token> {
    return this.httpClient.post<Token>(environment.apiRoute + "users/login", loginCredentials);
  }

  isAuthenticated() {
    const dateNow = Date.parse(Date());
    const dateExp = Date.parse(<string>localStorage.getItem("exp"))
    if (localStorage.getItem('token') && localStorage.getItem("exp"))
      if (dateNow < dateExp) {
        this.getUserDetailsFromToken();
        return true;
      }
    this.decodedToken = { Token: "", DecodedToken: "", Expiration: 0, Email: "", Name: "", Role: "", Roles: [], UserId: "" };
    return false;
  }

  private getUserDetailsFromToken() {
    const token: any = localStorage.getItem('token');
    const decodedToken = this.jwtHelperService.decodeToken(token);
    this.decodedToken['Token'] = localStorage.getItem('token');
    this.decodedToken['DecodedToken'] = this.jwtHelperService.decodeToken(token);
    this.decodedToken['Expiration'] = +decodedToken['exp'];
    this.decodedToken['Name'] = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'];
    this.decodedToken['Role'] = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    this.decodedToken['Roles'] = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
    this.decodedToken['Email'] = decodedToken['email'];
    this.decodedToken['UserId'] = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
  }
}
