import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipListbox, MatChip } from '@angular/material/chips';
import { MatIcon} from '@angular/material/icon'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatCardModule, MatChipListbox, MatChip, MatIcon],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  projects = [
    { title: 'Developer Portfolio Template', subtitle: '@ developerFolio', description: 'Software Developer Portfolio Template that helps you showcase your work and skills as a ...', logoUrl: 'assets/developer-portfolio-logo.png', githubLink: 'https://github.com/developerFolio' },
    { title: 'React Blog: Github Issues', subtitle: '@ react-blog-github', description: 'React + Github Issues @ Your Personal Blog', logoUrl: 'assets/react-blog-logo.png', githubLink: 'https://github.com/react-blog-github' },
    { title: 'Awesome-web-components', subtitle: '@ awesome-web-components', description: 'Awesome web components and snippets for every Front-End Developer', logoUrl: 'assets/awesome-web-components-logo.png', githubLink: 'https://github.com/awesome-web-components' },
    { title: 'Awesome-web-components', subtitle: '@ awesome-web-components', description: 'Awesome web components and snippets for every Front-End Developer', logoUrl: 'assets/awesome-web-components-logo.png', githubLink: 'https://github.com/awesome-web-components' },
    { title: 'Awesome-web-components', subtitle: '@ awesome-web-components', description: 'Awesome web components and snippets for every Front-End Developer', logoUrl: 'assets/awesome-web-components-logo.png', githubLink: 'https://github.com/awesome-web-components' },
    { title: 'Awesome-web-components', subtitle: '@ awesome-web-components', description: 'Awesome web components and snippets for every Front-End Developer', logoUrl: 'assets/awesome-web-components-logo.png', githubLink: 'https://github.com/awesome-web-components' },
    // Add more projects as needed
  ];
}
