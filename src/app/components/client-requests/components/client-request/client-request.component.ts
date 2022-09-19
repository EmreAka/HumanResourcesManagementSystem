import { Component, OnInit, Input } from '@angular/core';
import { ClientRequestRead } from 'src/app/models/clientRequestRead';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.css']
})
export class ClientRequestComponent implements OnInit {

  @Input() clientRequest: ClientRequestRead;

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  startAConversation() {
    this.messageService.sendMessage({ receiverUserId: this.clientRequest.userId, text: "Hello!" })
      .subscribe();
  }

}
