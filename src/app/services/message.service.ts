import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  private subject = new BehaviorSubject<any>({});

  public isAConversationStarted = this.subject.asObservable();

  constructor(private httpClient: HttpClient) { }

  getMyMessages(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.apiRoute + "messages");
  }

  getMyMessagesWithUser(senderId: string): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.apiRoute + `messages/${senderId}`)
  }

  startAConversation(userId: string, userName: string): void {
    this.subject.next({ userId: userId, userName: userName, status: true });
  }

  conversationIsStarted(): void {
    this.subject.next({ userId: null, status: true });
  }

  sendMessage(message: any): Observable<any> {
    return this.httpClient.post<any>(environment.apiRoute + "messages", message);
  }

  getUserNames(): Observable<any[]> {
    return this.httpClient.get<any[]>(environment.apiRoute + "messages/usernames");
  }
}
