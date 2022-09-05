import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { LoginCredentials } from '../models/loginCredentials';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient) {
  }

  login(loginCredentials: LoginCredentials) {
    return this.httpClient.post(environment.apiRoute + "users/login", loginCredentials);
  }
}
