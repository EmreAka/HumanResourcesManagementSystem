import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  isOpen: boolean = true;

  messages: any[];

  selectedMessage: any = { senderUserName: "RidvanAka" };

  constructor(private messageService: MessageService,
    private spinner: NgxSpinnerService,
    private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated())
      this.getMyMessages();
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
  }

  getMessages(sender: string): any[] {
    return this.messages.filter(m => m.senderUserName === sender)
  }

}
