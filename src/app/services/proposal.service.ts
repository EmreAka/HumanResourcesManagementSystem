import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ProposalReadDto } from '../models/proposalReadDto';

@Injectable({
  providedIn: 'root'
})
export class ProposalService {

  private subject = new BehaviorSubject<boolean>(false);
  public isModelOpen = this.subject.asObservable();

  constructor(private httpClient: HttpClient) { }

  openModel() {
    this.subject.next(true);
  }

  closeModel() {
    this.subject.next(false);
  }

  getMyProposals(): Observable<ProposalReadDto[]> {
    return this.httpClient.get<ProposalReadDto[]>(environment.apiRoute + "/proposals");
  }
}
