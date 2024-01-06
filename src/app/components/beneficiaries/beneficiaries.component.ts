import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare, faRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Beneficiary } from '../../interfaces/beneficiary';
import { BeneficiaryService } from '../../services/beneficiary.service';

@Component({
  selector: 'app-beneficiaries',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './beneficiaries.component.html',
  styleUrl: './beneficiaries.component.css'
})
export class BeneficiariesComponent {

  beneficiaries?: Beneficiary[];
  
  beneficiaryService = inject(BeneficiaryService);

  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  faRotateLeft = faRotateLeft;

  doSearch(value: string) {
    
  }

  ngOnInit(): void {
    const id = '';
    this.getBeneficiaries(id);
  }

  getBeneficiaries(id: string): void {
    this.beneficiaryService.getBeneficiariesForClient(id)
      .subscribe(
        (data: Beneficiary[]) => {
          this.beneficiaries = data;
          console.log('Client beneficiaries:', this.beneficiaries);
        },
        error => {
          console.error('Error retrieving client beneficiaries:', error);
        }
      );
  }
}
