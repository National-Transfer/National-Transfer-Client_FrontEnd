import { Component, OnInit, inject } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { Client } from '../../interfaces/client';
import { ActivatedRoute } from '@angular/router';

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

  
  client ?: Client;

  ngOnInit(): void {
    // this.clientService.client$(this.client!.id).subscribe( result => {
    //   this.client = result.data.client;
    // })
  }

  
}
