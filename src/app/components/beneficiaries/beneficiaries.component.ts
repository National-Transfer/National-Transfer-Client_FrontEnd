import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPenToSquare, faRotateLeft, faTrash } from '@fortawesome/free-solid-svg-icons';
import { BeneficiaryService } from '../../services/beneficiary.service';
import { Observable, filter, map } from 'rxjs';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { AuthState } from '@okta/okta-auth-js';
import { Benificiary } from '../../interfaces/Benificiary';

@Component({
  selector: 'app-beneficiaries',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './beneficiaries.component.html',
  styleUrl: './beneficiaries.component.css'
})
export class BeneficiariesComponent {

  beneficiaries!: Benificiary[];
  
  oktaAuth = inject(OKTA_AUTH);
  oktaAuthStateService = inject(OktaAuthStateService);

   userId$!: Observable<any>;
  beneficiaryService = inject(BeneficiaryService);

  faTrash = faTrash;
  faPenToSquare = faPenToSquare;
  faRotateLeft = faRotateLeft;


  id !: string;
  doSearch(value: string) {
    
  }

  ngOnInit(): void {
     
  // this.userId$$ = oktaAuthStateService.authState$.pipe(
  //   filter((authState: AuthState) => !!authState && !!authState.isAuthenticated),
  //   map((authState: AuthState) => authState.accessToken?.claims.userId ?? '')
  // );

  // this.userId$$.subscribe((idFromToken: string) => {
  //   this.id = idFromToken
  
  // });


    this.getBeneficiaries(this.id);
  }

  getBeneficiaries(id: string): void {
    this.beneficiaryService.getAllBeneficiariesForClient$(id)
      .subscribe(
        (data) => {
          this.beneficiaries = data;
          console.log('Client beneficiaries:', this.beneficiaries);
        },
        error => {
          console.error('Error retrieving client beneficiaries:', error);
        }
      );
  }
}
