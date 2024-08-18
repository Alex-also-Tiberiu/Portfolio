import { Component } from '@angular/core';
import { AnimationOptions, LottieComponent } from 'ngx-lottie';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [LottieComponent],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  options: AnimationOptions = {
    path: 'animations/email.json'
  }
}
