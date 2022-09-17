import { Component, OnInit } from '@angular/core';
import { ClientRequestRead } from 'src/app/models/clientRequestRead';
import { ClientRequestService } from 'src/app/services/client-request.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-client-requests',
  templateUrl: './client-requests.component.html',
  styleUrls: ['./client-requests.component.css']
})
export class ClientRequestsComponent implements OnInit {

  clientRequests: ClientRequestRead[];
  constructor(private clientRequestService: ClientRequestService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getClientRequests();
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
