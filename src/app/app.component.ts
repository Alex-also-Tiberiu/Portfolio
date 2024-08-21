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
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    GreetingsComponent,
    SkillsComponent,
    ProgressBarComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    LottieComponent,
    FooterComponent,
    ContactMeComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
