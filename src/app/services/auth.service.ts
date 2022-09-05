import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials } from '../models/loginCredentials';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Token } from '../models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  login(loginCredentials: LoginCredentials): Observable<Token> {
    return this.httpClient.post<Token>(environment.apiRoute + "users/login", loginCredentials);
  }

  isAuthenticated() {
    const dateNow = Date.parse(Date());
    const dateExp = Date.parse(<string>localStorage.getItem("exp"))
    if (localStorage.getItem('token') && localStorage.getItem("exp"))
      if (dateNow < dateExp)
        return true;
    return false;
  }
}
