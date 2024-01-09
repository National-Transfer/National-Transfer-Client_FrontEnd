import { Component, Inject, OnInit, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../interfaces/client';
import { ActivatedRoute } from '@angular/router';
import { OKTA_AUTH } from '@okta/okta-angular';
import OktaAuth from '@okta/okta-auth-js';


interface Claim {
  claim: string;
  value: unknown;
}


interface Claim {
  claim: string;
  value: unknown;
}



@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  
  private clientService = inject(ClientService);
  private route = inject(ActivatedRoute);

  
  constructor(@Inject(OKTA_AUTH) public oktaAuth: OktaAuth) {
  }
  client ?: Client;
  claims: Claim[] = [];

  async ngOnInit(): Promise<void> {
    const userClaims = await this.oktaAuth.getUser();
    this.claims = Object.entries(userClaims).map(entry => ({ claim: entry[0], value: entry[1] }));

    
    this.clientService.client$(this.claims[10].value as string).subscribe( result => {
      this.client = result;
    })

  }

  
}
