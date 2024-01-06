import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HomeFooterComponent } from '../home-footer/home-footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeFooterComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
