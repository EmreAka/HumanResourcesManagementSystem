import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HubConnectionBuilder } from '@microsoft/signalr';
import { HubConnection } from '@microsoft/signalr/dist/esm/HubConnection';
import { from, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService {

  private hubConnection: HubConnection
  public messages: any[] = [];
  private connectionUrl = environment.chatRoute;
  // private apiUrl = 'https://localhost:44319/api/chat';

  constructor(private http: HttpClient) { }

  public connect = () => {
    this.startConnection();
    this.addListeners();
  }

  // public sendMessageToApi(message: string) {
  //   return this.http.post(this.apiUrl, this.buildChatMessage(message))
  //     .pipe(tap(_ => console.log("message sucessfully sent to api controller")));
  // }

  public sendMessageToHub(message: string) {
    var promise = this.hubConnection.invoke("SendMessageAsync", message)
      .then(() => { console.log('message sent successfully to hub'); })
      .catch((err) => console.log('error while sending a message to hub: ' + err));

    return from(promise);
  }

  private getConnection(): HubConnection {
    return new HubConnectionBuilder()
      .withUrl(this.connectionUrl, { accessTokenFactory: () => <string>localStorage.getItem('token') })
      // .withHubProtocol(new MessagePackHubProtocol())
      //  .configureLogging(LogLevel.Trace)
      .build();
  }

  // private buildChatMessage(message: string): any {
  //   return {
  //     connectionId: this.hubConnection.connectionId,
  //     text: message,
  //     dateTime: new Date()
  //   };
  // }

  private startConnection() {
    this.hubConnection = this.getConnection();

    this.hubConnection.start()
      .then(() => console.log('connection started'))
      .catch((err) => console.log('error while establishing signalr connection: ' + err))
  }

  private addListeners() {
    this.hubConnection.on("messageReceivedFromApi", (data: any) => {
      console.log("message received from API Controller")
      this.messages.push(data);
    })
    this.hubConnection.on("receiveMessage", (data: any) => {
      console.log("message received from Hub: " + data);
      this.messages.push(data);
    })
    this.hubConnection.on("newUserConnected", _ => {
      console.log("new user connected")
    })
  }
}
