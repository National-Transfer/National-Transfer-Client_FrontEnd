import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Beneficiary } from '../interfaces/beneficiary';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  private readonly URL: string = 'http://localhost:8080/api/beneficiaries';

  constructor(private http: HttpClient) {}

  getBeneficiariesForClient(id: string): Observable<Beneficiary[]> {
    return this.http.get<Beneficiary[]>(`${this.URL}/client/${id}`, httpOptions);
  }

  deleteBeneficiary(id: string): Observable<any> {
    return this.http.delete<any>(`${this.URL}/${id}`, httpOptions);
  }

  addBeneficiary(clientId : string , beneficiary: Beneficiary): Observable<Beneficiary> {
    return this.http.post<Beneficiary>(`${this.URL}/client/${clientId}`, beneficiary, httpOptions);
  }

}