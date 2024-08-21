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

  title = "Hi all, I'm Alexandru";
  subTitle = "A passionate Computer Engineer having an experience of building Web and Mobile "
  + "applications with TypeScript / Angular / Spring Boot and some other modern libraries and frameworks."
}
