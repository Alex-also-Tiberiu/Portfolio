import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { GreetingsComponent } from './greetings/greetings.component';
import { SkillsComponent } from './skills/skills.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { EducationComponent } from "./education/education.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { ProjectsComponent } from "./projects/projects.component";
import { LottieComponent } from 'ngx-lottie';
import { FooterComponent } from "./footer/footer.component";
import { ContactMeComponent } from "./contact-me/contact-me.component";
import { MatSidenav, MatSidenavContainer, MatSidenavContent, MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    GreetingsComponent,
    SkillsComponent,
    ProgressBarComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    LottieComponent,
    FooterComponent,
    ContactMeComponent,
    RouterOutlet,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';

  constructor() {}

  public scroll(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
