import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  private subject = new BehaviorSubject<boolean>(false);
  public isModelOpen = this.subject.asObservable();

  constructor() { }

  openModel() {
    this.subject.next(true);
  }

  closeModel() {
    this.subject.next(false);
  }
}
