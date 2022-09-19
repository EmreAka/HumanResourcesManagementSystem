import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  isMessagesOpen: boolean = false;

  userNames: any[];

  messages: any[];

  constructor(private messageService: MessageService, private auth: AuthService) { }

  ngOnInit(): void {
    this.getUserNames();
  }

  getUserNames() {
    this.messageService.getUserNames().subscribe({
      next: (value) => {
        this.userNames = value;
      }
    });
  }

  getUserName(): string {
    const m = this.messages
      .find(m => m.receiverUserId == this.auth.decodedToken["UserId"]);
    return m.senderUserName;
  }

  getMessagesWithAUser(userId: string) {
    this.messageService.getMyMessagesWithUser(userId).subscribe({
      next: (value) => {
        this.messages = value;
        this.getUserName();
      }
    });
  }

}
