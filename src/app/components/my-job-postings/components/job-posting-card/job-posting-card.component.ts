import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-job-posting-card',
  templateUrl: './job-posting-card.component.html',
  styleUrls: ['./job-posting-card.component.css']
})
export class JobPostingCardComponent implements OnInit {

  @Input() description: string;
  @Input() price: string;

  constructor() { }

  ngOnInit(): void {
  }

}
