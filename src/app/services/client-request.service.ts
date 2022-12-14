import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from, Observable } from 'rxjs';
import { ClientRequestRead } from '../models/clientRequestRead';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientRequestService {

  constructor(private httpClient: HttpClient) { }

  getClientRequests(): Observable<ClientRequestRead[]> {
    return this.httpClient.get<ClientRequestRead[]>
      (environment.apiRoute + "clientrequests/GetAllRequestClientsWithDetails");
  }

  getClientRequestsByUserId(): Observable<ClientRequestRead[]> {
    return this.httpClient.get<ClientRequestRead[]>(
      environment.apiRoute + "clientrequests/GetAllRequestClientsWithDetailsWithUserId"
    );
  }

  getClientRequestsUserMadeAnOffer(): Observable<ClientRequestRead[]> {
    return this.httpClient.get<ClientRequestRead[]>(environment.apiRoute + "clientrequests/GetAllRequestClientsUserPropose");
  }

  deleteClientRequest(id: string) {
    return this.httpClient.post(environment.apiRoute + `clientrequests/delete/${id}`, {});
  }

  addClientRequest(clientRequest: any) {
    return this.httpClient.post(environment.apiRoute + "clientrequests/add", clientRequest);
  }
}
