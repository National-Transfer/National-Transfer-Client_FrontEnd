import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OKTA_AUTH } from '@okta/okta-angular';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  private router = inject(Router);
  private route = inject(ActivatedRoute);
  private oktaAuth = inject(OKTA_AUTH);
  home() {
    this.router.navigate([''], { relativeTo: this.route });

  }

  beneficiaries() {
    this.router.navigate(['beneficiaries'], { relativeTo: this.route });
  }

  profile() {
    this.router.navigate(['profile'], { relativeTo: this.route });
  }

  transfer() {
    this.router.navigate(['recent-transfers'], { relativeTo: this.route });
  }

  async logout(): Promise<void>{
     await this.oktaAuth.signOut();
  }

}
