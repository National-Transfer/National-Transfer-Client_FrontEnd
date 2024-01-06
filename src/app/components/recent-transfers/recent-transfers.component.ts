import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-recent-transfers',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './recent-transfers.component.html',
  styleUrl: './recent-transfers.component.css'
})
export class RecentTransfersComponent {
  faTrash = faTrash;

}
