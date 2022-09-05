import { Component, OnInit } from '@angular/core';
import {JobPostingService} from "../../services/job-posting.service";
import {Auth} from "@angular/fire/auth";

@Component({
  selector: 'app-my-job-postings',
  templateUrl: './my-job-postings.component.html',
  styleUrls: ['./my-job-postings.component.css']
})
export class MyJobPostingsComponent implements OnInit {

  jobPostings: any[] = [];

  constructor(private jobPostingService: JobPostingService, private auth: Auth) { }

  ngOnInit(): void {
    this.getJobPostings();
  }

  getJobPostings(){
  }

}
