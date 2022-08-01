import { Injectable } from '@angular/core';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { FormGroup } from '@angular/forms';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobPostingService {
  jobPostingForm: FormGroup;

  constructor(private fireStore: Firestore) { }

  addJobPosting(jobPosting: any){
    const jobPostingsRef = collection(this.fireStore, "/job-postings");
    const lalla = from(addDoc(jobPostingsRef, jobPosting))
    return lalla;
  }
}
