import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { GreetingsComponent } from './greetings/greetings.component';
import { SkillsComponent } from './skills/skills.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { EducationComponent } from "./education/education.component";
import { ExperiencesComponent } from "./experiences/experiences.component";
import { ProjectsComponent } from "./projects/projects.component";

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
    ProjectsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
