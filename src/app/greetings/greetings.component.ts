import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-greetings',
  standalone: true,
  imports: [MatButtonModule, LottieComponent],
  templateUrl: './greetings.component.html',
  styleUrl: './greetings.component.scss'
})
export class GreetingsComponent{
  animated: boolean = true;
  
  options: AnimationOptions = {
    path: 'animations/landingPerson.json'
  }

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }
}
