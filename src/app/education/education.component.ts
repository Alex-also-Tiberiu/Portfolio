import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

  public education = {
      school: 'University of studies of Padua',
      degree: 'Bachelor degree in Computer Engineering',
      duration: 'September 2018 - March 2022',
      description: 'Participated in the research of XXX and published 3 papers.',
      details: [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit2'
      ],
      logoUrl: 'images/unipd.png'
    };
}
