import { Component, OnInit, Input } from '@angular/core';
import { ClientRequestRead } from 'src/app/models/clientRequestRead';
import { MessageService } from 'src/app/services/message.service';
import { ProposalService } from 'src/app/services/proposal.service';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.css']
})
export class ClientRequestComponent implements OnInit {

  @Input() clientRequest: ClientRequestRead;
  @Input() showClientRequestsUserMadeAnOffer: boolean;

  constructor(private messageService: MessageService,
    private proposalService: ProposalService) { }

  ngOnInit(): void {
  }

  startAConversation() {
    this.messageService.sendMessage({ receiverUserId: this.clientRequest.userId, text: "Hello!" })
      .subscribe({
        next: (value) => {
          this.messageService.startAConversation(this.clientRequest.userId, this.clientRequest.userName);
        }
      });
  }

  openProposalModal() {
    this.proposalService.openModel({ clientRequestId: this.clientRequest.id, clientId: this.clientRequest.userId });
  }

}
