import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, inject} from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, tap, catchError, of } from 'rxjs';
import { Transfer } from '../interfaces/transfer';
import { IssueTransferRequest } from '../interfaces/issueTransferService';
import { OperationRequest } from '../interfaces/operationRequest';
import { RecipientRequest } from '../interfaces/recipientRequest';
import { ServeTransferRequest } from '../interfaces/serveTransferRequest';
import { TransferAmountRequest } from '../interfaces/transferAmountRequest';
import { TransferAmountResponse } from '../interfaces/transferAmountResponse';
import { ValidateTransferRequest } from '../interfaces/validateTransferRequest';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  private http = inject(HttpClient);
  private readonly apiUrl : string =  environment.redirectUri +'/transfer-service/api/v1/transfer';

  getAllTransfersForClient$ =(id : string)  => <Observable<Transfer[]>>
    this.http.get<Transfer[]>(`${this.apiUrl}/TransfersForClient/${id}`)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of('Error getting Transfers')
        })
      );

      getTransfer$ = (reference: string) => <Observable<Transfer>>
    this.http.get<Transfer>(`${this.apiUrl}/${reference}}`)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of(' Error getting transfer with reference' + reference)
        })
      );


  calculateTransferAmount$ = (transferAmountRequest: TransferAmountRequest) => <Observable<TransferAmountResponse>>
    this.http.post<TransferAmountResponse>(`${this.apiUrl}/transferAmount`, transferAmountRequest, httpOptions)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of(' Error calculating Total amount')
        })
      );

  issueTransfer$ = (issueTransferRequest: IssueTransferRequest) => <Observable<Transfer>>
    this.http.post<Transfer>(`${this.apiUrl}/issueTransfer`, issueTransferRequest, httpOptions)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of(' Error issuing transfer')
        })
      );

  validateTransferByWallet$ = (validateTransferRequest: ValidateTransferRequest) => <Observable<Transfer>>
    this.http.post<Transfer>(`${this.apiUrl}/validateTransferByWallet`, validateTransferRequest, httpOptions)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of(' Error validating transfer')
        })
      );

  checkRecipientSIRON$ = (recipientRequest: RecipientRequest) => <Observable<boolean>>
    this.http.post<boolean>(`${this.apiUrl}/recipientSiron`, recipientRequest, httpOptions)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of(' Error checking siron')
        })
      );

  checkTransferToServe$ = (reference: string) => <Observable<Transfer>>
    this.http.get<Transfer>(`${this.apiUrl}/checkTransferToServe/${reference}`)
      .pipe(
        tap(console.log),
        // catchError(() => {
        //   return of('invalid')
        // })
      );

  serveTransferCash$ = (serveTransferRequest: ServeTransferRequest) => <Observable<Transfer>>
    this.http.post<Transfer>(`${this.apiUrl}/serveTransferCash`, serveTransferRequest, httpOptions)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of(' Error serving transfer')
        })
      );

  serveTransferToWallet$ = (serveTransferRequest: ServeTransferRequest) => <Observable<Transfer>>
    this.http.post<Transfer>(`${this.apiUrl}/serveTransferToWallet`, serveTransferRequest, httpOptions)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of(' Error serving transfer')
        })
      );


  validateTransferToWallet$ = (validateTransferRequest: ValidateTransferRequest) => <Observable<Transfer>>
    this.http.post<Transfer>(`${this.apiUrl}/validateTransferToWallet`, validateTransferRequest, httpOptions)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of(' Error validating transfer to wallet')
        })
      );


  extournerTransfer$ = (operationRequest: OperationRequest) => <Observable<Transfer>>
    this.http.put<Transfer>(`${this.apiUrl}/extourner`, operationRequest, httpOptions)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of(' Error extourner transfer')
        })
      );


  restituerByAgent$ = (operationRequest: OperationRequest) => <Observable<Transfer>>
    this.http.put<Transfer>(`${this.apiUrl}/extourner`, operationRequest, httpOptions)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of(' Error restutuer transfer ')
        })
      );

  blockTransfer$ = (operationRequest: OperationRequest) => <Observable<Transfer>>
    this.http.put<Transfer>(`${this.apiUrl}/block`, operationRequest, httpOptions)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of(' Error blocking transfer')
        })
      );

  unblockTransfer$ = (operationRequest: OperationRequest) => <Observable<Transfer>>
    this.http.put<Transfer>(`${this.apiUrl}/unblock`, operationRequest, httpOptions)
      .pipe(
        tap(console.log),
        catchError(() => {
          return of('Error blocking ransfer')
        })
      );
}
