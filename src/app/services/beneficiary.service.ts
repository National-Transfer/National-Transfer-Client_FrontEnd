import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, catchError, of, tap } from 'rxjs';
import { environment } from '../../environments/environment';
import { Benificiary } from '../interfaces/Benificiary';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class BeneficiaryService {

  private http: HttpClient = inject(HttpClient);

  private readonly apiUrl: string = environment.redirectUri +'/kyc-service/api/v1/beneficiaries';
  
  getBeneficiary$ = (id : string) => <Observable<Benificiary>>
  this.http.get<Benificiary>(`${this.apiUrl}/${id}`)
    .pipe(
      tap(console.log),
      catchError(() => {
        return of('error getting benifiary')
      })
    );

  getAllBeneficiariesForClient$ = (id : string) => <Observable<Benificiary[]>>
      this.http.get<Benificiary[]>(`${this.apiUrl}/client/${id}`)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of('error getting benifiaries')
        })
      );

  
  saveBeneficiaryForClient$ = (id : string, benificiary : Benificiary ) => <Observable<Benificiary>>
        this.http.post<Benificiary>(`${this.apiUrl}/client/${id}`, benificiary, httpOptions )
        .pipe(
          tap(console.log),
          catchError(() => {
            return of('error saving benificiary')
          })
        );

  deleteBeneficiary(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`, httpOptions);
  }


}