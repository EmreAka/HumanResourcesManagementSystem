import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-client-request',
  templateUrl: './client-request.component.html',
  styleUrls: ['./client-request.component.css']
})
export class ClientRequestComponent implements OnInit {

  @Input() name: string | undefined;
  @Input() title: string | undefined;
  @Input() description: string | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
