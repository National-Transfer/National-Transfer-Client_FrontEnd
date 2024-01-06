import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare, faRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-beneficiaries',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './beneficiaries.component.html',
  styleUrl: './beneficiaries.component.css'
})
export class BeneficiariesComponent {
  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  faRotateLeft = faRotateLeft;

  doSearch(value: string) {
    
  }
}
