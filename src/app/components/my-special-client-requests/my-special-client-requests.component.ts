import { Component, OnInit } from '@angular/core';
import { ClientRequestRead } from 'src/app/models/clientRequestRead';
import { ClientRequestService } from 'src/app/services/client-request.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-my-special-client-requests',
  templateUrl: './my-special-client-requests.component.html',
  styleUrls: ['./my-special-client-requests.component.css']
})
export class MySpecialClientRequestsComponent implements OnInit {

  clientRequests: ClientRequestRead[];
  constructor(private clientRequestService: ClientRequestService,
  private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getClientRequestsByUserId();
  }

  getClientRequestsByUserId() {
    this.spinner.show();
    this.clientRequestService.getClientRequestsByUserId().subscribe({
      next: (value) => {
        this.clientRequests = value;
        console.log(value);
        this.spinner.hide();
      },
      error: (err) => {
        console.log(err);
        this.spinner.hide();
      }
    });
  }

  deleteClientRequest(id: string) {
    console.log(id);
    this.spinner.show();
    this.clientRequestService.deleteClientRequest(id).subscribe({
      next: (value) => {
        const index = this.clientRequests.findIndex(x => x.id == id);
        this.clientRequests.splice(index, index + 1);
        this.spinner.hide();
      },
      error: (err) => {
        console.log(err);
        this.spinner.hide();
      }
    })
  }

}
