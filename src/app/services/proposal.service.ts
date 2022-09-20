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

  public proposalClientInfo: any;

  constructor(private httpClient: HttpClient) { }

  openModel(proposalClientInfo: any) {
    this.proposalClientInfo = proposalClientInfo;
    this.subject.next(true);
  }

  closeModel() {
    this.subject.next(false);
  }

  getMyProposals(): Observable<ProposalReadDto[]> {
    return this.httpClient.get<ProposalReadDto[]>(environment.apiRoute + "proposals");
  }

  addProposal(proposal: any): Observable<any> {
    return this.httpClient.post<any>(environment.apiRoute + "proposals", proposal);
  }
}
