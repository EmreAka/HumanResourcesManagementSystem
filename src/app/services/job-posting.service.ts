import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {
  jobPostingForm: FormGroup;

  constructor(private httpClient: HttpClient) { }

  addJobPosting() {
    var result = this.httpClient.post(environment.apiRoute + "jobpostings/add", this.jobPostingForm.value);
    return result;
  }

  getJobPostings(): Observable<any[]> {
    var result = this.httpClient.get<any[]>(environment.apiRoute + "jobpostings/getallwithdetails")
    return result;
  }
}
