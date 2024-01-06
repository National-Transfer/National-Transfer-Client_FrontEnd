import { Component } from '@angular/core';

@Component({
  selector: 'app-statistics',
  standalone: true,
  imports: [],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent {
  icons : {id:string, counter:string, desc: string}[] = [
    {id:"1", counter : "+2000", desc: "Direct jobs and indirect jobs"},
    {id:"1", counter : "2024", desc: "Year of creation"},
    {id:"1", counter : "50 MDH", desc: "of Capitals"},
    {id:"1", counter : "+1000", desc: "Points of sales"}
  ]
}
