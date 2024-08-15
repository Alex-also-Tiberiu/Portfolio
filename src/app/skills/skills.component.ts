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
  options: AnimationOptions = {
    path: 'animations/codingPerson.json'
  }
}
