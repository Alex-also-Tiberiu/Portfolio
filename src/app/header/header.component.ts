import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, RouterOutlet, MatListModule, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  public developer = 'Alexandru Tiberiu Vilcu';
  isMobile: boolean = false;

  @Input()
  public sidenavState: any;

  @Output()
  public toggleSdNav = new EventEmitter();

  @HostListener('window:resize',['$event'])
  onResize(event: any): void {
    this.checkScreenSize();
  }
  
  ngOnInit(): void {
    this.checkScreenSize();
  }

  public scroll(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  public trigger() {
    this.toggleSdNav.emit();
  }

  checkScreenSize(): void {
    this.isMobile = window.innerWidth <= 768; // Puoi regolare la larghezza in base alle tue esigenze
  }
  
}
