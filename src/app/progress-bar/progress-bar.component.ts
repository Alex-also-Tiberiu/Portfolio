import { Component } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  progressBars = [
    { label: 'Frontend/Design', value: 70 },
    { label: 'Backend', value: 90 },
    { label: 'Programming', value: 80 }
  ];
}
