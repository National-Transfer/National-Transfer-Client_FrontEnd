import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  standalone: true,
  imports: [],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
  
  images : {id: string, src: string, name: string}[] = [
    {id: "1", src: "../../assets/images/bmce.png", name: "BMCE"},
    {id: "1", src: "../../assets/images/BP.png", name: "BCP"},
    {id: "1", src: "../../assets/images/cih.png", name: "CIH"},
    {id: "1", src: "../../assets/images/cnss.png", name: "CNSS"},
    {id: "1", src: "../../assets/images/oncf.png", name: "ONCF"},
    {id: "1", src: "../../assets/images/radeema.png", name: "RADEEMA"},
  ]
}
