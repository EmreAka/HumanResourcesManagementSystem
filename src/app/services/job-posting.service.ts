import { Injectable } from '@angular/core';
import {addDoc, collection, collectionData, Firestore, query, where} from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {
  jobPostingForm: FormGroup;

  constructor() { }

  addJobPosting(jobPosting: any){
  }

  getJobPostings(userId: string){
  }
}
