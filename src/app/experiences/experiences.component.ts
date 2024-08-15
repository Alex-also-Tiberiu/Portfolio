import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {

  experiences = [
    {
      company: "Scai Itec S.R.L",
      position: "Full Stack Developer",
      duration: "November 2022 - nowadays",
      description: "",
      logoUrl: "images/grupposcai.png",
      details: []
    },
    {
      company: "Banca Popolare di Sondrio",
      position: "Analyst programmer",
      duration: "May 2023 - May 2024",
      description: "",
      logoUrl: "images/banca_popolare_di_sondrio_logo.jpg",
      details: []
    }
  ]
}
