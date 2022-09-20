import { Component, OnInit } from '@angular/core';
import { ClientRequestRead } from 'src/app/models/clientRequestRead';
import { ClientRequestService } from 'src/app/services/client-request.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ProposalService } from 'src/app/services/proposal.service';
import { ProposalReadDto } from 'src/app/models/proposalReadDto';

@Component({
  selector: 'app-client-requests',
  templateUrl: './client-requests.component.html',
  styleUrls: ['./client-requests.component.css']
})
export class ClientRequestsComponent implements OnInit {

  showClientRequestsUserMadeAnOffer: boolean = false;
  clientRequests: ClientRequestRead[];
  proposals: ProposalReadDto[];
  constructor(private clientRequestService: ClientRequestService,
    private spinner: NgxSpinnerService,
    private proposalService: ProposalService) { }

  ngOnInit(): void {
    this.getClientRequests();
    this.proposalService.getMyProposals().subscribe({
      next: (value) => {
        this.proposals = value;
      }
    })
  }

  getRequestsUserMadeAnOffer() {
    this.spinner.show();
    this.clientRequestService.getClientRequestsUserMadeAnOffer().subscribe({
      next: (value) => {
        this.clientRequests = value;
        this.spinner.hide();
      },
      error: (err) => { console.log(err); this.spinner.hide }
    });
  }

  getClientRequests() {
    this.spinner.show();
    this.clientRequestService.getClientRequests().subscribe({
      next: (value) => {
        this.clientRequests = value;
        this.spinner.hide();
      },
      error: (err) => {
        console.log(err);
        this.spinner.hide();
      }
    });
  }

}
