import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private httpClient: HttpClient) { }

  getMyMessages(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.apiRoute + "messages");
  }

  getMyMessagesWithUser(senderId: string): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.apiRoute + `messages/${senderId}`)
  }
}
