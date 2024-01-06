import { Component, ViewChild } from '@angular/core';
import { HomeHeaderComponent } from '../home-header/home-header.component';
import { UtilitiesComponent } from '../utilities/utilities.component';
import { StatisticsComponent } from '../statistics/statistics.component';
import { PartnersComponent } from '../partners/partners.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [HomeHeaderComponent, UtilitiesComponent, StatisticsComponent, PartnersComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
