import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { ChatserviceService } from 'src/app/services/chatservice.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  isMessagesOpen: boolean = false;

  userNames: any[];

  messages: any[] | null;

  messageForm: FormGroup;

  constructor(private messageService: MessageService,
    private auth: AuthService,
    private fb: FormBuilder,
    private chatService: ChatserviceService) { }

  ngOnInit(): void {
    this.getUserNames();
    this.createMessageForm();
    this.chatService.connect();

    this.chatService.subject.subscribe({
      next: (value) => {
        if (this.messages) {
          this.messages.push(value)
        }
      }
    });
  }

  createMessageForm() {
    this.messageForm = this.fb.group({
      text: [null, [Validators.required]]
    });
  }

  getUserNames() {
    this.messageService.getUserNames().subscribe({
      next: (value) => {
        this.userNames = value;
      }
    });
  }

  getUserName(): string {
    // var m = this.messages!
    //   .find(m => m.receiverUserId == this.auth.decodedToken["UserId"]);
    // if (m) {
    //   m = this.messages!
    //     .find(m => m.senderUserId == this.auth.decodedToken["UserId"]);
    //   return m.receiverUserName;
    // }
    // return m.senderUserName;
    return "PATLADIK"
  }

  getReceiverId(): string {
    var m = this.messages!
      .find(m => m.receiverUserId == this.auth.decodedToken["UserId"]);
    if (!m) {
      m = this.messages!
        .find(m => m.senderUserId == this.auth.decodedToken["UserId"]);
      return m.receiverUserId;
    }
    return m.senderUserId;
  }

  getMessagesWithAUser(userId: string) {
    this.messageService.getMyMessagesWithUser(userId).subscribe({
      next: (value) => {
        this.messages = value;
        debugger;
        this.getUserName();
      }
    });
  }

  sendMessage() {
    const message: any = Object.assign(
      { receiverUserId: this.getReceiverId() }, this.messageForm.value)
    this.chatService.sendMessageToHub(message).subscribe({
      next: (value) => this.messageForm.reset(),
      error: (err) => console.log(err)
    })
  }

}
