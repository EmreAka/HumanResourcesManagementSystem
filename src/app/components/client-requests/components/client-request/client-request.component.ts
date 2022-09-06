import { Component, OnInit, Input } from '@angular/core';
import { ClientRequestRead } from 'src/app/models/clientRequestRead';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.css']
})
export class ClientRequestComponent implements OnInit {

  @Input() clientRequest: ClientRequestRead;

  constructor() { }

  ngOnInit(): void {
  }

}
