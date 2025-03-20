import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private currentTheme = signal<'light' | 'dark'>('light');

  constructor() { }

  setTheme(theme: 'light' | 'dark'): void {
    this.currentTheme.set(theme);
  }

  getTheme(): 'light' | 'dark' {
    return this.currentTheme();
  }
}
