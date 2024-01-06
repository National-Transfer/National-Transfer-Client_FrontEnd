import { HttpHeaders } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  transferService = inject(TransferService);

  // restituerTransferByClient(request);
}
