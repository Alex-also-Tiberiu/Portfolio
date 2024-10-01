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
      description: "On a continous training and also I was one of the developer of an internal project, for developing a REST application. We used different technologies:",
      logoUrl: "images/grupposcai.png",
      details: ["Spring Boot, Java, Hibernate, JPA, Docker, Maven", "Angular, HTML5, CSS3, Typescript", "Amazon Web Services - Lambda / Amplify / S3", "MySQL, H2","Oauth2, Webauthn"]
    },
    {
      company: "Banca Popolare di Sondrio",
      position: "Analyst programmer",
      duration: "May 2023 - May 2024",
      description: "I was part of a team of 4 people and we developed an internal application for this bank for managing assets and appraisals. "
      + "The application was REST based on microservices. Technologies used:",
      logoUrl: "images/banca_popolare_di_sondrio_logo.jpg",
      details: ["Spring Boot / Spring Batch ,Java, MyBatis, Elastic Search , Docker , Maven","Angular , Bootstrap, HTML5, CSS3, Typescript","Jenkins, Red Hat - Openshift, Azure", "Oracle"]
    }
  ]
}
