import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deadline } from '../models/deadline';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeadlineService {

  constructor(private httpClient: HttpClient) { }

  getDeadlines(): Observable<Deadline[]>{
    return this.httpClient.get<Deadline[]>(environment.apiRoute + "deadlines");
  }
}
