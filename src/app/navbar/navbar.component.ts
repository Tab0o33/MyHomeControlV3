import { Component, OnInit, OnDestroy } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, OnDestroy {

  themes: any[];

  selectedTheme: string;
  selectedThemeSubscription: Subscription;

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.themes = this.themeService.themes;

    this.selectedThemeSubscription = this.themeService.selectedThemeSubject.subscribe(
      (selectedTheme: string) => {
        this.selectedTheme = selectedTheme;
      }
    );
    this.themeService.emitSelectedThemeSubject();

  }

  getBGColor() {
    if (this.selectedTheme === 'classic') {
      return 'bg-primary';
    } else if (this.selectedTheme === 'dark') {
      return 'bg-fullDark';
    } else if (this.selectedTheme === 'ironman') {
      return 'bg-dark';
    } else {
      return 'bg-primary';
    }
  }

  getDDBColor() {
    if (this.selectedTheme === 'classic') {
      return 'btn-primary';
    } else if (this.selectedTheme === 'dark') {
      return 'btn-fullDark';
    } else if (this.selectedTheme === 'ironman') {
      return 'btn-dark';
    } else {
      return 'btn-primary';
    }
  }

  switchToTheme(name: string): void {
    this.themeService.changeSelectedTheme(name);
  }

  ngOnDestroy() {
    this.selectedThemeSubscription.unsubscribe();
  }

}
