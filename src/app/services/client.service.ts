import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Client } from '../interfaces/client';
import { environment } from '../../environments/environment.development';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  
  private readonly URL : string =  environment.redirectUri +'/api/clients';

  private http : HttpClient =  inject(HttpClient);

  // getClient(id : string): Observable<Client> {
  //   return this.http.get<Client>(`${this.URL}/${id}`, httpOptions )
  //   .pipe(tap(
  //     console.log
  //   ));
  // }

  client$ =  (clientId: string) => <Observable<Client>>
      this.http.get<Client>(`${this.URL}/${clientId}`)
      .pipe(
        tap(console.log)
      )
}
