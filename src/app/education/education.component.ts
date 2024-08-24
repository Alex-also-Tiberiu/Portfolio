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
      description: 'Thesis: Development of a web application, with authentication service via oauth2 protocol',
      details: [
        'Internship on REST applications based on microservices and agile methodology',
        'Different projects on various programming language'
      ],
      logoUrl: 'images/unipd2.png'
    };
}
