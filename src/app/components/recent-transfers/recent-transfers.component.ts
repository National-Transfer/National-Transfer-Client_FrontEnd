import { Component, OnInit, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { Transfer } from '../../interfaces/transfer';
import { TransferService } from '../../services/transfer.service';

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


  transfers ?: Transfer[];

  ngOnInit(): void {

    
  }



}
