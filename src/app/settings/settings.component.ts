import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../theme.service';

@Component({
  selector: 'app-settings',
  imports: [CommonModule],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {
  isSettingsOpen = false;

  constructor(public themeService: ThemeService) { // Inject the theme service
    // this.themeService.getTheme();
  }

  handleSettings(): void {
    this.isSettingsOpen = !this.isSettingsOpen; 
  }

  handleTheme(event: Event): void {
    const selectedTheme = (event.target as HTMLSelectElement).value as 'light' | 'dark';
    this.themeService.setTheme(selectedTheme);
  }
}
