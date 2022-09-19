import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.css']
})
export class NewMessageComponent implements OnInit {

  isMessagesOpen: boolean = false;

  userNames: any[];

  constructor(private messageService: MessageService) { }

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

}
