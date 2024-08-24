import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  constructor() {}

  options: AnimationOptions = {
    path: 'animations/codingPerson.json'
  }

  skills_svg = [
    {
      path: "icons/typescript.svg",
      alt:  "Typescript Icon",
      name: "Typescript"
    },
    {
      path: "icons/c.svg",
      alt:  "C Icon",
      name: "C"
    },
    {
      path: "icons/cplusplus.svg",
      alt:  "C++ Icon",
      name: "C++"
    },
    {
      path: "icons/spring-boot.svg",
      alt:  "Spring Boot",
      name: "Spring Boot"
    },
    {
      path: "icons/hibernate.svg",
      alt:  "Hibernate",
      name: "Hibernate"
    },
    {
      path: "icons/yubico.svg",
      alt:  "Yubico Webauthn",
      name: "Webauthn Yubico"
    },
    {
      path: "icons/maven.svg",
      alt:  "Maven",
      name: "Maven"
    },
    {
      path: "icons/jenkins.svg",
      alt:  "Jenkins Icon",
      name: "Jenkins"
    },
    {
      path: "icons/mysql.svg",
      alt:  "MySQL Icon",
      name: "MySQL"
    },
    {
      path: "icons/postgresql.svg",
      alt:  "Postgresql Icon",
      name: "PostgreSQL"
    },
    {
      path: "icons/oracle-2.svg",
      alt:  "Oracle Icon",
      name: "Oracle DB"
    }
  ]

  skills = [
    {
      class:"fab fa-java",
      name:"Java",
      link:""
    },
    {
      class:"fab fa-python",
      name:"Python",
      link:""
    },
    {
      class:"fab fa-golang",
      name:"Go lang",
      link:""
    },
    {
      class:"fab fa-aws",
      name:"AWS",
      link:""
    },
    {
      class:"fab fa-docker",
      name:"Docker",
      link:""
    },
    {
      class:"fab fa-html5",
      name:"HTML 5",
      link:""
    },
    {
      class:"fab fa-css3",
      name:"CSS 3",
      link:""
    },
    {
      class:"fab fa-js",
      name:"Javascript",
      link:"https://www.javascript.com"
    },
    {
      class:"fab fa-angular",
      name:"Angular",
      link:"https://angular.io"
    },
    {
      class:"fab fa-node",
      name:"Node",
      link:""
    },
    {
      class:"fab fa-git-alt",
      name:"Git",
      link:""
    },
    {
      class:"fab fa-sourcetree",
      name:"Sourcetree",
      link:""
    },
    {
      class:"fab fa-redhat",
      name:"Openshift",
      link:""
    },
  ]
}