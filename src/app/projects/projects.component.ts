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
    { 
      title: 'Main Page', 
      subtitle: '@Alex-also-Tiberiu', 
      description: 'The main page of my personal github account', 
      logoUrl: 'assets/developer-portfolio-logo.png', 
      githubLink: 'https://github.com/Alex-also-Tiberiu' 
    },
    { 
      title: 'Adapter Pattern', 
      subtitle: '@Software engineering', 
      description: 'Software engineering project during university, based on Java jdk 1.8 and Junit4', 
      logoUrl: 'assets/awesome-web-components-logo.png', 
      githubLink: 'https://github.com/Alex-also-Tiberiu/Adapter-pattern' 
    },
    { 
      title: 'Starting with Java 8', 
      subtitle: '@Learn Java', 
      description: 'This repositorie contains all the code i did to start learning Java. I started from simple exercices and i finish writing various data structures and algorithms', 
      logoUrl: 'assets/awesome-web-components-logo.png', 
      githubLink: 'https://github.com/Alex-also-Tiberiu/Java-Laboratory' 
    },
    { 
      title: 'HTTP Protocol', 
      subtitle: '@C lang', 
      description: 'Repository published by a friend about programming HTTP protocol in C language, it contains different code which we worked on', 
      logoUrl: 'assets/awesome-web-components-logo.png', 
      githubLink: 'https://github.com/Alex-also-Tiberiu/rdc22' 
    },
    { 
      title: 'Game Engine', 
      subtitle: '@C++', 
      description: 'Simple Game Engine, developed just for practicing more with C++ language', 
      logoUrl: 'assets/awesome-web-components-logo.png', 
      githubLink: 'https://github.com/Alex-also-Tiberiu/Game-engine' 
    },
    { 
      title: 'Simple Neural Networks', 
      subtitle: '@Python / Pytorch / CNN', 
      description: 'Just a few files describing a perceptron and a few neural networks', 
      logoUrl: 'assets/awesome-web-components-logo.png', 
      githubLink: 'https://github.com/Alex-also-Tiberiu/Simple_Neural_Networks' 
    },
    // Add more projects as needed
  ];
}
