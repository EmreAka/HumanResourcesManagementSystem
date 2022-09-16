import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import { ChatserviceService } from 'src/app/services/chatservice.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  isOpen: boolean = false;

  messages: any[];

  selectedMessage: any = null;

  messagesWithUser: any[];

  messageForm: FormGroup

  message: string;

  constructor(private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private authService: AuthService,
    private fb: FormBuilder,
    private chatService: ChatserviceService) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.getMyMessages();
      this.chatService.connect();
    }


    this.createMessageForm();

    this.messageForm.valueChanges.subscribe({
      next: (value) => {
        console.log(value)
      }
    })
  }

  createMessageForm() {
    this.messageForm = this.fb.group({
      text: [null, [Validators.required]]
    });
  }

  getMyMessages() {
    this.spinner.show();
    this.messageService.getMyMessages().subscribe({
      next: (value) => {
        this.messages = value;
        this.spinner.hide();
      },
      error: (err) => {
        console.log(err);
        this.spinner.hide();
      }
    });
  }

  getSenders(): string[] {
    const senders: string[] = [];
    this.messages.forEach(item => {
      if (!senders.includes(item.senderUserName)) {
        senders.push(item.senderUserName)
      }
    })
    return senders;
  }

  showMessages(sender: string) {
    this.selectedMessage = this.messages.find(m => m.senderUserName === sender);
    this.getMyMessagesWithUser();
  }

  getMyMessagesWithUser() {
    this.messageService.getMyMessagesWithUser(this.selectedMessage.senderUserId)
      .subscribe({
        next: (value) => {
          this.messagesWithUser = value;
        },
        error: (err) => {
          console.log(err)
        }
      });
  }

  // sendMessage() {
  //   const message: any = Object.assign(
  //     { receiverUserId: this.selectedMessage.senderUserId }, this.messageForm.value)
  //   this.messageService.sendMessage(message).subscribe({
  //     next: (value) => {
  //       console.log("Success");
  //       this.messageForm.reset();
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     }
  //   });
  // }

  sendMessage() {
    const message: any = Object.assign(
      { receiverUserId: this.selectedMessage.senderUserId }, this.messageForm.value)
    this.chatService.sendMessageToHub(message).subscribe({
      next: (value) => console.log(value),
      error: (err) => console.log(err)
    })
  }

  receiveMessage(message: string) {

  }

}
