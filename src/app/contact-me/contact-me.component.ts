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

  details = {
    mobile: "+393921158716",
    email:  ""//alexandrutiberiu.vilcu@gmail.com"
  }

  tel() {
    return "tel:" + this.details.mobile;
  }

  mailTo() {
    return "mailto:" + this.details.email;
  }
}
