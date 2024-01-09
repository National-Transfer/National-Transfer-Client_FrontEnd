import { Component, OnInit, inject , Inject} from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Transfer } from '../../interfaces/transfer';
import { TransferService } from '../../services/transfer.service';
import { OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';


interface Claim {
  claim: string;
  value: unknown;
}

@Component({
  selector: 'app-recent-transfers',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './recent-transfers.component.html',
  styleUrl: './recent-transfers.component.css'
})
export class RecentTransfersComponent implements OnInit {
  faTrash = faTrash;

  transferService : TransferService = inject(TransferService); 
  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth) { }


  transfers ?: Transfer[];
  transfersWithStateToServe ?: Transfer[];
  transfersWithoutStateToServe ?: Transfer[];
  
  claims ?: Claim[];

  async ngOnInit() {
    const userClaims = await this.oktaAuth.getUser();
    this.claims = Object.entries(userClaims).map(entry => ({ claim: entry[0], value: entry[1] }));
    this.transferService.getAllTransfersForClient$(this.claims[10].value as string).subscribe( data => {
      this.transfers = data;
      this.transfersWithStateToServe = this.transfers.filter(transfer => transfer.transferState === 'TO_SERVE');
      this.transfersWithoutStateToServe = this.transfers.filter(transfer => transfer.transferState !== 'TO_SERVE');
    })
  }



}
